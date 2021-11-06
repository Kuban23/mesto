//  находим кнонтент
let content = document.querySelector('.content');

//  находим кнопоки
let editBtnProfile = content.querySelector('.profile__edit-button');
let closeBtnPopup = document.querySelector('.popup__close');
let profileForm = document.querySelector('.popup__form');

//  находим popup
let popup = document.querySelector('.popup');

//  находим Инпуты в popup
let popupInputTypeName = document.querySelector('.popup__input_type_name');
let popupInputTypeProfession = document.querySelector('.popup__input_type_profession');

//  находим имя и профессию в блоке profile
let profileName = content.querySelector('.profile__name');
let profileProfession = content.querySelector('.profile__profession');

//  функции для открытия и закрытия popup
function createProfilePopup() {
  popup.classList.add('popup_opened');
  //  заполняем Инпуты содержимым из профиля, имя и профессия
  popupInputTypeName.value = profileName.innerHTML;
  popupInputTypeProfession.value = profileProfession.innerHTML;
}

function closeProfilePopup() {
  popup.classList.remove('popup_opened');

}

//  функция отправки формы (пока форму никуда не отправляем)
function formSubmitHandler(evt) {
  evt.preventDefault();

  // Вставляем новые значения в поля профиля имя и профессия
  profileName.textContent = popupInputTypeName.value;
  profileProfession.textContent = popupInputTypeProfession.value;

  // закрываем popup
  closeProfilePopup();
}

//  создали слушателя для кнопок
editBtnProfile.addEventListener('click', createProfilePopup);
closeBtnPopup.addEventListener('click', closeProfilePopup);
profileForm.addEventListener('submit', formSubmitHandler);


