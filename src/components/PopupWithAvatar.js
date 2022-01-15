import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
constructor(selectorPopup){
  super(selectorPopup);
  this._form = this._popup.querySelector('.popup__form');
}

// Дополняем родительский метод setEventListeners, добавляет обработчик сабмита формы
setEventListeners() {
  super.setEventListeners();
  this._form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    this._handleFormSubmit();
  })
}


}
