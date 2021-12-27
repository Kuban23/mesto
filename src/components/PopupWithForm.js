import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(selectorPopup, handleFormSubmit) {
    super(selectorPopup);
    this._form = document.querySelector('.popup__form'); 
    this._handleFormSubmit = handleFormSubmit;
  }

  // Метод собирает данные всех полей формы
  _getInputValues() {
    this._inputList = document.querySelectorAll('.popup__input');
  }

  // Дополняем родительский метод setEventListeners, добавляет обработчик клика иконке закрытия и обработчик сабмита формы
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
