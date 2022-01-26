//  Находим кнопки
export const editBtnProfile = document.querySelector('.profile__edit-button');
export const profileForm = document.querySelector('.popup__form-prof');
export const addBtnProfile = document.querySelector('.profile__add-button');
export const addBtnCard = document.querySelector('.popup__submit-button_type_image');

//  Находим popup
export const popupProfile = document.querySelector('.popup_type_profile');
//export const popupAddImage = document.querySelector('.popup_type_addImage');


//  Находим Инпуты в popup Profile
export const popupInputTypeName = document.querySelector('.popup__input_type_name');
export const popupInputTypeProfession = document.querySelector('.popup__input_type_profession');


// Находим Инпуты popup для добавления карточек
// export const popupInputaddImageTitle = document.querySelector('.popup__input_type_title');
// export const popupInputaddImageLink = document.querySelector('.popup__input_type_link');

// Находим имя и профессию в блоке profile
// export const profileName = document.querySelector('.profile__name');
// export const profileProfession = document.querySelector('.profile__profession');

// Селекторы для классов
export const profileNameSelector = '.profile__name';
export const profileProfessionSelector = '.profile__profession';
export const popupProfileSelector = '.popup_type_profile';
//  Находим popup image
export const popupImageViewing = '.popup_type_image';
// Находим блок photo
export const photoContainer = '.galery';
// Находим popup Image
export const popupAddImageSelector = '.popup_type_addImage';
// Находим шаблон для карточек-фото
export const photoTemplateSelector = '.photo-template';
// Находим popup Аватарки
export const popupAddAvatarSelector = '.popup_type_avatar';
// Находим popup подтверждения удаления
export const popupDeleteSelector = '.popup_type_delete';
// Находим инпут аватарки
// export const popupInputAvatarSelector = '.popup__input-avatar';
// Находим картинку автарки
export const imageAvatarSelector = '.profile__avatar';


// Берем форму popup картинок
export const addImageForm = document.querySelector('.popup_type_addImage .popup__form-image');

// Берем форму popup аватара
export const avatarForm = document.querySelector('.popup_type_avatar .popup__form-avatar');

// Поле для клика с последующей замены аватарки
export const openPupopAvatarBtn = document.querySelector('.profile__image');


export const objForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error'
};





