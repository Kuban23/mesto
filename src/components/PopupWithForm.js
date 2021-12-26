import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);

  }

  // Метод собирает данные всех полей формы
  _getInputListeners() {

  }

  // Дополняем родительский метод setEventListeners, добавляет обработчик клика иконке закрытия и обработчик сабмита формы
  setEventListeners() {

  }

  // Дополняем родительский метод close
  close() {

  }

}
