import Popup from './Popup.js';

export default class PopupDelete extends Popup {
  constructor(selectorPopup, handleButtonClick) {
    super(selectorPopup);
    this._form = this._popup.querySelector('.popup__form');
    this._handleButtonClick = handleButtonClick;
  }

  // open(card) {
  //   this._card = card;
  //   super.open();
  // }

  // Дополняем родительский метод setEventListeners, добавляет обработчик сабмита формы
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleButtonClick(evt, this._card);
    })
  }

  // setSubmit(action) {
  //   this._handleFormSubmit = action;
  // }


}
