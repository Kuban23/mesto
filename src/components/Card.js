// import { openPopup } from '../parts/constants.js';
// import { popupImageViewing } from '../parts/constants.js';

export class Card {
  constructor({data, handleCardClick}, selector) {
    this._name = data.name;
    this._imageAlt = data.name;
    this._link = data.link;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
  }

  // Забираем разметку из HTML  и клонируем элемент.
  _getTemplate() {
    this._element = document.querySelector(this._selector).content.querySelector('.photo').cloneNode(true);
    return this._element;
  }

  // Готовим карточку к публикации.
  generateCard() {
    this._element = this._getTemplate(); //Запишем разметку в приватное поле _element
    this._likeButton = this._element.querySelector('.photo__like');
    this._trashButton = this._element.querySelector('.photo__trash');
    this._photoImageTemplate = this._element.querySelector('.photo__image');
    this._setEventListeners();
    // Добавим данные
    this._photoImageTemplate.src = this._link;
    this._photoImageTemplate.alt = this._name;
    this._element.querySelector('.photo__text').textContent = this._name;

    return this._element;
  }


  // Реализация лайков
  _addLike() {
    this._likeButton.classList.toggle('photo__like_active');
  }

  // Реализация удаления карточек
  _deleteCard() {
    this._trashButton.closest('.photo').remove();
  }

  //Реализация просмотра картинок
  _popupImageViewing(evt) {
    openPopup(popupImageViewing);
    popupImageViewing.querySelector('.popup__image').src = evt.target.src;
    popupImageViewing.querySelector('.popup__image').alt = evt.target.alt;
    popupImageViewing.querySelector('.popup__title-image').textContent = evt.target.alt;
  }

  _setEventListeners() {
    // Реализация клика лайка
    this._likeButton.addEventListener('click', () => {
      this._addLike();
    })

    // Реализация клика удаления карточки
    this._trashButton.addEventListener('click', () => {
      this._deleteCard();
    })

    // Реализация клика просмотра картинок
    // this._element.querySelector('.photo__image').addEventListener('click', (evt) => {
    //   this._popupImageViewing(evt);
    // })

    //Открываем popup с картинкой приклике на нее.
    this._photoImageTemplate.addEventListener('click', () => {
      this._handleCardClick();
    })

  }



};
