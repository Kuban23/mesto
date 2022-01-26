(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var t=function(){function t(e,n,o,r,i,a,u){var s=e.name,c=e.link,l=e.likes,p=e.owner,f=e._id;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=s,this._link=c,this._id=f,this._selector=u,this._handleCardClick=o,this._handleDeleteCard=r,this._myProfileId=n,this._userId=p._id,this._likes=l,this._handleSetLike=i,this._hendleRemoveLike=a}var n,o;return n=t,(o=[{key:"_getTemplate",value:function(){return this._element=document.querySelector(this._selector).content.querySelector(".photo").cloneNode(!0),this._element}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".photo__like"),this._foundLikes()?this._likeButton.classList.add("photo__like_active"):this._likeButton.classList.remove("photo__like_active"),this._trashButton=this._element.querySelector(".photo__trash"),this._photoImageTemplate=this._element.querySelector(".photo__image"),this._sumLikes=this._element.querySelector(".photo__like-sum"),this._setEventListeners(),this._photoImageTemplate.src=this._link,this._photoImageTemplate.alt=this._name,this._element.querySelector(".photo__text").textContent=this._name,this._kitLikes(),this._hendleDeleteCardActive(),this._element}},{key:"_addLike",value:function(){this._likeButton.classList.toggle("photo__like_active")}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._foundLikes()?e._hendleRemoveLike(e):e._handleSetLike(e)})),this._trashButton.addEventListener("click",(function(){e._handleDeleteCard(e)})),this._photoImageTemplate.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}},{key:"_hendleDeleteCardActive",value:function(){this._userId===this._myProfileId&&this._trashButton.classList.add("photo__trash_type_active")}},{key:"_kitLikes",value:function(){this._sumLikes.textContent=this._likes.length}},{key:"kitInfoLikes",value:function(e){this._likes=e.likes,this._correctionLikes()}},{key:"_correctionLikes",value:function(e){this._foundLikes()?(this._kitLikes(),this._likeButton.classList.add("photo__like_active")):(this._kitLikes(),this._likeButton.classList.remove("photo__like_active"))}},{key:"_foundLikes",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._myProfileId}))}},{key:"getId",value:function(){return this._id}}])&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(t,n){var o=t.formSelector,r=t.inputSelector,i=t.submitButtonSelector,a=t.inactiveButtonClass,u=t.inputErrorClass,s=t.errorClass;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._element=n,this._formSelector=o,this._inputSelector=r,this._submitButtonSelector=i,this._inactiveButtonClass=a,this._inputErrorClass=u,this._errorClass=s,this._buttonElement=this._element.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._element.querySelectorAll(this._inputSelector))}var t,o;return t=e,(o=[{key:"enableValidation",value:function(){this._element.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_showInputError",value:function(e){var t=this._element.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.classList.add(this._errorClass),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){var t=this._element.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_toggleButtonState",value:function(){var e=this._element.checkValidity();this._buttonElement.disabled=!e,this._buttonElement.classList.toggle(this._inactiveButtonClass,!e)}},{key:"enableSubmitButton",value:function(){this._buttonElement.disabled=!1,this._buttonElement.classList.remove(this._inactiveButtonClass)}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t),e._toggleButtonState(),e._element.reset()}))}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function e(t,n){var o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t?this._container.append(e):this._container.prepend(e)}}],n&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleCloseEsc=this._handleEscClose.bind(this),this._popupSubmitButton=this._popup.querySelector(".popup__submit-button")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleCloseEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleCloseEsc)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this._popup.classList.contains("popup_opened")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close"))&&e.close(),e._handleButtonClick}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=p(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},l.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function h(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(o);if(r){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupName=t._popup.querySelector(".popup__title-image"),t}return t=a,(n=[{key:"open",value:function(e,t){this._popupImage.src=t,this._popupName.textContent=e,this._popupImage.alt=e,l(_(a.prototype),"open",this).call(this)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=b(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},m.apply(this,arguments)}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function g(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(o);if(r){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e){var t,n=e.selectorPopup,o=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._form=t._popup.querySelector(".popup__form"),t._handleFormSubmit=o,t}return t=a,n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popup.querySelectorAll(".popup__input"),this._formInputValue={},this._inputList.forEach((function(t){e._formInputValue[t.name]=t.value})),this._formInputValue}},{key:"setEventListeners",value:function(){var e=this;m(S(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){m(S(a.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this._popupSubmitButton.textContent=e?"Сохранение...":t?"Загрузка...":"Сохранить"}}],n&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function L(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var E=function(){function e(t){var n=t.nameSelector,o=t.professionSelector,r=(t.linkSelector,t.avatarSelector);!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._profession=document.querySelector(o),this._avatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._profession.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,o=e.avatar;t&&(this._name.textContent=t),n&&(this._profession.textContent=n),o&&(this._avatar.src=o)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function C(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=j(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},P.apply(this,arguments)}function j(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function I(e,t){return I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},I(e,t)}function R(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(a,e);var t,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(o);if(r){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;P(B(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleButtonClick()}))}},{key:"setSubmit",value:function(e){this._handleButtonClick=e}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function T(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var x=function(){function e(t){var n,o,r=t.address,i=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))},(n="_checkResponse")in this?Object.defineProperty(this,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[n]=o,this._address=r,this._token=i}var t,n;return t=e,(n=[{key:"getProfileUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"getLoadCards",value:function(){return fetch("".concat(this._address,"/cards"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"redactProfile",value:function(e){return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"addLikes",value:function(e){return fetch("".concat(this._address,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"deleteLikes",value:function(e){return fetch("".concat(this._address,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"redactAvatar",value:function(e){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),V=document.querySelector(".profile__edit-button"),A=document.querySelector(".popup__form-prof"),D=document.querySelector(".profile__add-button"),U=(document.querySelector(".popup__submit-button_type_image"),document.querySelector(".popup_type_profile"),document.querySelector(".popup__input_type_name")),z=document.querySelector(".popup__input_type_profession"),F=".photo-template",N=".profile__avatar",J=document.querySelector(".popup_type_addImage .popup__form-image"),M=document.querySelector(".popup_type_avatar .popup__form-avatar"),H=document.querySelector(".profile__image"),$={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error"};function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var K,Q=new d(".popup_type_image"),W=new E({nameSelector:".profile__name",professionSelector:".profile__profession",avatarSelector:N}),X=new E({avatarSelector:N}),Y=new x({address:"https://mesto.nomoreparties.co/v1/cohort-34",token:"3e73d708-abda-497f-b5cd-226c9c586d8e"});Promise.all([Y.getProfileUserInfo(),Y.getLoadCards()]).then((function(e){var t,n,o=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){u=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw r}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return G(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?G(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],i=o[1];K=r._id,W.setUserInfo(r),ee.renderItems(i)})).catch((function(e){console.log(e)}));var Z=function(e,n){var o=e.name,r=e.link,i=e.likes,a=e.owner,u=e._id,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e,t){Q.open(e,t)},c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){re.open(),re.setSubmit((function(){Y.deleteCard(e.getId()).then((function(){e.deleteCard(),re.close()})).catch((function(e){return console.log(e)}))}))},l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(e){Y.addLikes(e.getId()).then((function(t){e.kitInfoLikes(t)})).catch((function(e){return console.log(e)}))},p=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(e){Y.deleteLikes(e.getId()).then((function(t){e.kitInfoLikes(t)})).catch((function(e){return console.log(e)}))},f=new t({name:o,link:r,likes:i,owner:a,_id:u},K,s,c,l,p,n);return f.generateCard()},ee=new i({renderer:function(e){var t=Z(e,F);ee.addItem(t)}},".galery"),te=new w({selectorPopup:".popup_type_profile",handleFormSubmit:function(e){var t=e.name,n=e.about;te.renderLoading(!1,!0),Y.redactProfile({name:t,about:n}).then((function(e){W.setUserInfo({name:t,about:n}),te.close()})).catch((function(e){return console.log(e)})).finally((function(){te.renderLoading(!1,!1)}))}});V.addEventListener("click",(function(){te.open(),ie.resetValidation();var e=W.getUserInfo();U.value=e.name,z.value=e.about,ie.enableSubmitButton()}));var ne=new w({selectorPopup:".popup_type_addImage",handleFormSubmit:function(e){ne.renderLoading(!0,!1),Y.addCard(e).then((function(e){var t=Z(e,F);ee.addItem(t,!1),ne.close()})).catch((function(e){return console.log(e)})).finally((function(){ne.renderLoading(!1,!1)}))}}),oe=new w({selectorPopup:".popup_type_avatar",handleFormSubmit:function(e){var t=e.link;oe.renderLoading(!0,!1),Y.redactAvatar(t).then((function(e){X.setUserInfo({avatar:e.avatar}),oe.close()})).catch((function(e){return console.log(e)})).finally((function(){oe.renderLoading(!1,!1)}))}});H.addEventListener("click",(function(){oe.open(),ue.resetValidation()}));var re=new q(".popup_type_delete");D.addEventListener("click",(function(){ne.open(),ae.resetValidation()})),Q.setEventListeners(),te.setEventListeners(),ne.setEventListeners(),oe.setEventListeners(),re.setEventListeners();var ie=new o($,A);ie.enableValidation();var ae=new o($,J);ae.enableValidation();var ue=new o($,M);ue.enableValidation()})();
//# sourceMappingURL=main.js.map