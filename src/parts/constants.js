//  Находим кнопки
export const editBtnProfile = document.querySelector('.profile__edit-button');
export const profileForm = document.querySelector('.popup__form-prof');
export const addBtnProfile = document.querySelector('.profile__add-button');
export const addBtnCard = document.querySelector('.popup__submit-button_type_image');

//  Находим popup
export const popupProfile = document.querySelector('.popup_type_profile');
export const popupAddImage = document.querySelector('.popup_type_addImage');
export const popupImageViewing = document.querySelector('.popup_type_image');

//  Находим Инпуты в popup Profile
export const popupInputTypeName = document.querySelector('.popup__input_type_name');
export const popupInputTypeProfession = document.querySelector('.popup__input_type_profession');

// Находим Инпуты popup для добавления карточек
export const popupInputaddImageTitle = document.querySelector('.popup__input_type_title');
export const popupInputaddImageLink = document.querySelector('.popup__input_type_link');

// Находим имя и профессию в блоке profile
export const profileName = document.querySelector('.profile__name');
export const profileProfession = document.querySelector('.profile__profession');

// Находим блок photo
export const photoContainer = document.querySelector('.galery');

// Берем форму popup картинок
export const addImageForm = document.querySelector('.popup_type_addImage .popup__form-image');

// Объединение обработчиков Оверлея и закрытие popup при клике на крестик
export const popupList = document.querySelectorAll('.popup');
popupList.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  })
})

// Функция которая заполняет Инпуты содержимым из профиля, имя и профессия (перед валидацией)
export const initEditForm = () => {
  popupInputTypeName.value = profileName.textContent;
  popupInputTypeProfession.value = profileProfession.textContent;
};

// Функция закрытия popup по клавише Esc.
export function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

//  Функции для открытия и закрытия popup profile
export function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

export function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}


//  Функция отправки формы (пока форму никуда не отправляем)
export function submitFormHandler(evt) {
  evt.preventDefault();
  // Вставляем новые значения в поля профиля имя и профессия
  profileName.textContent = popupInputTypeName.value;
  profileProfession.textContent = popupInputTypeProfession.value;
  closePopup(popupProfile);
}

export const objForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error'
};


