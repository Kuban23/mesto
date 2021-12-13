import { openPopup } from './parts.js';
import { popupImageViewing } from './parts.js';

export class Card {
  constructor(data, cardTemplate) {
    this._name = data.name;
    this._imageAlt = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
  }

  // Забираем разметку из HTML  и клонируем элемент.
  _getTemplate() {
    this._element = document.querySelector(this._cardTemplate).content.querySelector('.photo').cloneNode(true);
    return this._element;
  }

  // Готовим карточку к публикации.
  generateCard() {
    this._element = this._getTemplate(); //Запишем разметку в приватное поле _element
    this._setEventListeners();
    // Добавим данные
    this._element.querySelector('.photo__image').src = this._link;
    this._element.querySelector('.photo__image').alt = this._name;
    this._element.querySelector('.photo__text').textContent = this._name;

    return this._element;
  }

  // Реализация лайков
  _addLike() {
    this._element.querySelector('.photo__like').classList.toggle('photo__like_active');
  }

  // Реализация удаления карточек
  _deleteCard() {
    this._element.querySelector('.photo__trash').closest('.photo').remove();
  }

  // Реализация просмотра картинок
  _popupImageViewing(evt) {
    openPopup(popupImageViewing);
    popupImageViewing.querySelector('.popup__image').src = evt.target.src;
    popupImageViewing.querySelector('.popup__image').alt = evt.target.alt;
    popupImageViewing.querySelector('.popup__title-image').textContent = evt.target.alt;

  }

  _setEventListeners() {
    // Реализация клика лайка
    this._element.querySelector('.photo__like').addEventListener('click', () => {
      this._addLike();
    })

    // Реализация клика удаления карточки
    this._element.querySelector('.photo__trash').addEventListener('click', () => {
      this._deleteCard();
    })

    // Реализация клика просмотра картинок
    this._element.querySelector('.photo__image').addEventListener('click', (evt) => {
      this._popupImageViewing(evt);
    })

  }


};
