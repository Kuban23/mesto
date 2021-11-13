//  находим кнонтент
//const content = document.querySelector('.content');

//  находим кнопоки
const editBtnProfile = document.querySelector('.profile__edit-button');
const closeBtnPopupProfile = document.querySelector('.popup_type_profile .popup__close');
const closeBtnPopupImage = document.querySelector('.popup_type_addImage .popup__close');
const profileForm = document.querySelector('.popup__form');
const addBtnProfile = document.querySelector('.profile__add-button');

//  находим popup
const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const popupAddImage = document.querySelector('.popup_type_addImage');

//  находим Инпуты в popup
const popupInputTypeName = document.querySelector('.popup__input_type_name');
const popupInputTypeProfession = document.querySelector('.popup__input_type_profession');

//  находим имя и профессию в блоке profile
let profileName = document.querySelector('.profile__name');
let profileProfession = document.querySelector('.profile__profession');

//  функции для открытия и закрытия popup profile
function createProfilePopup(popupElement) {
  popupElement.classList.add('popup_opened');

  //  заполняем Инпуты содержимым из профиля, имя и профессия
  popupInputTypeName.value = profileName.innerHTML;
  popupInputTypeProfession.value = profileProfession.innerHTML;
}

function closeProfilePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

//  функции для открытия и закрытия popup addImage

// function createAddImagePopup() {
//   popupAddImage.classList.add('popup_opened');
// }

// function closeAddImagePopup() {
//   popupAddImage.classList.remove('popup_opened');
// }



//  функция отправки формы (пока форму никуда не отправляем)
function formSubmitHandler(evt) {
  evt.preventDefault();

  // Вставляем новые значения в поля профиля имя и профессия
  profileName.textContent = popupInputTypeName.value;
  profileProfession.textContent = popupInputTypeProfession.value;

  // закрываем popup
  closeProfilePopup(popupProfile);
}



//  создали слушателя для кнопок
editBtnProfile.addEventListener('click', function () { // Открываем popup profile
  createProfilePopup(popupProfile);
});

addBtnProfile.addEventListener('click', function () {  // Открываем popup для добавления картинок
  createProfilePopup(popupAddImage);
});


closeBtnPopupProfile.addEventListener('click', function () { // Закрываем popup profile
  closeProfilePopup(popup);
});

closeBtnPopupImage.addEventListener('click', function () { // Закрываем popup картинок
  closeProfilePopup(popupAddImage);
});


profileForm.addEventListener('submit', formSubmitHandler);



// closeBtnPopup.addEventListener('click', closeAddImagePopup);

