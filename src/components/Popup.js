// Класс отвечает за откр и закр popup
export default class Popup {
  constructor(selectorPopup) {
    this._popup = document.querySelector(selectorPopup);
    this._handleCloseEsc = this._handleEscClose.bind(this);
    this._popupSubmitButton = this._popup.querySelector('.popup__submit-button');
  }

  // Метод open открытие popup
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleCloseEsc);
  }

  // Метод close закрытие popup
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleCloseEsc);
  }

  // Метод для закрытия popup по клавише Esc
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      if (this._popup.classList.contains('popup_opened')) {
        this.close();
      }
    }

  }

  // Метод добавляет слушатель клика закрытия popup
  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
        this.close();
      }
      this._handleButtonClick;
    })
  }

  // При редактировании профиля уведомляем пользователя о процессе загрузки
  renderLoading(Loading, order = true) {
    if (Loading) {
      this._popupSubmitButton.textContent = 'Сохранение...';
    }
    else if (order) {
      this._popupSubmitButton.textContent = 'Загрузка...';
    }
    else {
      this._popupSubmitButton.textContent = 'Сохранить';
    }
  }

  // Реализация отправки, без него получаем при клике на автарку отшибку- ответа от сервера
  setSubmit(action) {
    this._handleButtonClick = action;
  }

}
