class Card {
  constructor(data, cardTemplate) {
    this._name = data.name;
    this._imageAlt = data.name;
    this._link = data.link;
    this._cardTemplate = cardTemplate;
  }

  // Забираем разметку из HTML  и клонируем элемент.
  _getTemplate() {
    const photoElement = document.querySelector('.photo-template').content.querySelector('.photo').cloneNode(true);
    return photoElement;
  }

  // Готовим карточку к публикации.
  generateCard() {
    this._element = this._getTemplate; //Запишем разметку в приватное поле _element
    // Добавим данные
    this._element.querySelector('.photo__image').src = this._link;
    this._element.querySelector('.photo__image').alt = this._name;
    this._element.querySelector('.photo__text').textContent = this._name;

    return this._element;
  }


}
