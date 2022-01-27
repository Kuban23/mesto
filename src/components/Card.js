export class Card {
  constructor({ name, link, likes, owner, _id }, myProfileId, handleCardClick, handleDeleteCard, handleSetLike, hendleRemoveLike, selector) {
    this._name = name;
    this._link = link;
    this._id = _id;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._myProfileId = myProfileId;
    this._userId = owner._id;
    this._likes = likes;
    this._handleSetLike = handleSetLike;
    this._hendleRemoveLike = hendleRemoveLike;
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

    // Делаем проверку, при обновлении страницы, если были лайки, то закрасить сердечко
    if (this._findLikes()) {
      this._likeButton.classList.add('photo__like_active');
    }
    else {
      this._likeButton.classList.remove('photo__like_active');
    }

    this._trashButton = this._element.querySelector('.photo__trash');
    this._photoImageTemplate = this._element.querySelector('.photo__image');
    this._sumLikes = this._element.querySelector('.photo__like-sum');
    this._setEventListeners();
    // Добавим данные
    this._photoImageTemplate.src = this._link;
    this._photoImageTemplate.alt = this._name;
    this._element.querySelector('.photo__text').textContent = this._name;

    // Вызываем метод для одображения суммы лайков при обновлении старницы
    this._setLikes();
    this._hendleDeleteCardActive();


    return this._element;
  }


  // Реализация лайков
  _addLike() {
    this._likeButton.classList.toggle('photo__like_active');
  }

  // Реализация удаления карточек
  deleteCard() {
    this._element.remove();
  }


  _setEventListeners() {
    // Реализация клика лайка постановка и удаление
    this._likeButton.addEventListener('click', () => {
      //this._addLike();
      if (this._findLikes()) {
        this._hendleRemoveLike(this);
      }
      else {
        this._handleSetLike(this);
      }
    });

    // Реализация клика удаления карточки
    this._trashButton.addEventListener('click', () => {
      this._handleDeleteCard(this);
      //this._deleteCard();
    });

    //Открываем popup с картинкой при клике на нее.
    this._photoImageTemplate.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

  }

  // Метод для скрытия кнопки удаления карточки (корзины)
  _hendleDeleteCardActive() {
    if (this._userId === this._myProfileId) {
      this._trashButton.classList.add('photo__trash_type_active');
    }

  }

  // Реализация отображения лайков
  _setLikes() {
    this._sumLikes.textContent = this._likes.length;
  }

  // Установка инфориации об лайках
  setInfoLikes(data) {
    this._likes = data.likes;
    this._updateLikes();
  }

  // Обновляем просмотр лайков
  _updateLikes(data) {
    if (!this._findLikes()) {
      this._setLikes();
      this._likeButton.classList.remove('photo__like_active');
    }
    else {
      this._setLikes();
      this._likeButton.classList.add('photo__like_active');
    }
  }

  // Находим аналогичные лайки
  _findLikes() {
    return this._likes.find((like) => like._id === this._myProfileId);
  }

  // Получаем id
  getId() {
    return this._id;
  }


};
