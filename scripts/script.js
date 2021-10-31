//  находим кнонтент
let content = document.querySelector('.content');

//  находим кнопоки
let editBtnProfile = content.querySelector('.profile__edit-button');
let closeBtnPopup = document.querySelector('.popup__close');
let saveBtnProfile = document.querySelector('.popup__form');

//  находим popup
let popup = document.querySelector('.popup');

//  находим имя и профессию в блоке profile
let profileName = content.querySelector('.profile__name');
let profileProfession = content.querySelector('.profile__profession');

//  находим Инпуты в popup
let popupInputTypeName = document.querySelector('.popup__input_type_name');
let popupInputTypeProfession = document.querySelector('.popup__input_type_profession');

//  заполняем Инпуты содержимым из профиля, имя и профессия
popupInputTypeName.value = profileName.innerHTML;
popupInputTypeProfession.value = profileProfession.innerHTML;


//  функции для открытия и закрытия popup
function createProfilePopup() {
  popup.classList.add('popup_opened');

}

function closeProfilePopup() {
  popup.classList.remove('popup_opened');

}

//  функция отправки формы (пока форму никуда не отправляем)
function formSubmitHandler(evt) {
  evt.preventDefault();

  let nameInputValue = popupInputTypeName.value;
  let professionInputValue = popupInputTypeProfession.value;

  profileName.textContent = nameInputValue;
  profileProfession.textContent = professionInputValue;

  popup.classList.remove('popup_opened');
}

//  создали слушателя для кнопок
editBtnProfile.addEventListener('click', createProfilePopup);
closeBtnPopup.addEventListener('click', closeProfilePopup);
saveBtnProfile.addEventListener('submit', formSubmitHandler);

