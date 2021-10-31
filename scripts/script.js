// 1 находим кнонтент
let content = document.querySelector('.content');

// 2 находим кнопоки
let editBtnProfile = content.querySelector('.profile__edit-button');
let closeBtnPopup = document.querySelector('.popup__close');
let saveBtnProfile = document.querySelector('.popup__form');

// 3 находим popup
let popup = document.querySelector('.popup');

// 4 находим имя и профессию в блоке profile
let profileName = content.querySelector('.profile__name');
let profileProfession = content.querySelector('.profile__profession');

// 5 находим Инпуты в popup
let popupInputTypeName = document.querySelector('.popup__input_type_name');
let popupInputTypeProfession = document.querySelector('.popup__input_type_profession');

// 6 заполняем Инпуты содержимым из профиля, имя и профессия
popupInputTypeName.value = profileName.innerHTML;
popupInputTypeProfession.value = profileProfession.innerHTML;


// 7 функции для открытия и закрытия popup
function createProfilePopup() {
  popup.classList.add('popup_opened');

}

function closeProfilePopup() {
  popup.classList.remove('popup_opened');

}

// 8 функция отправки формы (пока форму никуда не отправляем)
function formSubmitHandler(evt) {
  evt.preventDefault();

  //  4 находим имя и профессию в блоке profile
  // let profileName = content.querySelector('.profile__name');
  // let profileProfession = content.querySelector('.profile__profession');

  // 5 находим Инпуты в popup
  // let popupInputTypeName = document.querySelector('.popup__input_type_name');
  // let popupInputTypeProfession = document.querySelector('.popup__input_type_profession');

  // 6 заполняем Инпуты содержимым из профиля, имя и профессия
  // popupInputTypeName.value = profileName.innerHTML;
  // popupInputTypeProfession.value = profileProfession.innerHTML;

  let nameInputValue = popupInputTypeName.value;
  let professionInputValue = popupInputTypeProfession.value;

  profileName.textContent = nameInputValue;
  profileProfession.textContent = professionInputValue;

  popup.classList.remove('popup_opened');
}

// 9 создали слушателя для кнопок
editBtnProfile.addEventListener('click', createProfilePopup);
closeBtnPopup.addEventListener('click', closeProfilePopup);
saveBtnProfile.addEventListener('submit', formSubmitHandler);

