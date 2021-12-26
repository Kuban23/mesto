// Класс отвечает за откр и закр popup
export default class Popup {
  constructor(selectorPopup) {
    this._popup = document.querySelector(selectorPopup);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  // Метод open открытие popup
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  // Метод close закрытие popup
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  // Метод для закрытия popup по клавише Esc
  _handleEscClose(evt) {
    if (evt.key === 'Escape' && evt.target.classList.contains('popup_opened')) {
      this.close();
    }
  }

  // Метод добавляет слушатель клика закрытия popup
  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
        this.close();
      }
    })
  }


}
