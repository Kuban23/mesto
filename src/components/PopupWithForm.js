import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ selectorPopup, handleFormSubmit }) {
    super(selectorPopup);
    this._form = this._popup.querySelector('.popup__form');
    this._handleFormSubmit = handleFormSubmit;
  }

  // Метод собирает данные всех полей формы
  _getInputValues() {
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._formInputValue = {};
    this._inputList.forEach((input) => {
      this._formInputValue[input.name] = input.value;
    });

    return this._formInputValue;
  }

  // Дополняем родительский метод setEventListeners, добавляет обработчик сабмита формы
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    })
  }

  // Дополняем родительский метод close
  close() {
    super.close();
    this._form.reset();
  }

}
