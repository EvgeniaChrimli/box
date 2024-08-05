const formLogin = document.getElementById("login");
const formReg = document.getElementById("register");
const formRestore = document.getElementById("restore");
const btnLog = document.getElementById("loginBtn");
const btnForget = document.getElementById("btnForget");

const email = document.getElementById("email");
const password = document.getElementById("password");
const check = document.getElementById("check");

const nameReg = document.getElementById("name");
const emailReg = document.getElementById("emailReg");
const pass = document.getElementById("pass");
const pass1 = document.getElementById("pass1");

const email1 = document.getElementById("email1");

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  validateFunc();
});

function validateFunc() {
  const emailValue = email.value.trim();
  const passValue = password.value.trim();

  if (emailValue == "" || !isEmail(emailValue)) {
    setError(email, "Почта не введена или введена неверно!");
  } else {
    setSuccess(email);
    email.value = "";
    modal(email, emailValue);
  }

  if (passValue == "") {
    setError(password, "Введите пароль!");
    alert("Введите данные");
  } else {
    setSuccess(password);
    password.value = "";
  }
}

formReg.addEventListener("submit", (e) => {
  e.preventDefault();
  validateFormLogin();
});

function validateFormLogin() {
  const nameValue = nameReg.value.trim();
  const emailValue = emailReg.value.trim();
  const passValue = pass.value.trim();
  const pass1Value = pass1.value.trim();

  if (nameValue == "") {
    setError(nameReg, "Введите ваше имя");
  } else {
    setSuccess(nameReg);
    modal(nameReg, nameValue);
    nameReg.value = "";
  }
  if (emailValue == "" || !isEmail(emailValue)) {
    setError(emailReg, "Почта не введена или введена неверно!");
  } else {
    setSuccess(emailReg);
    emailReg.value = "";
  }
  if (passValue !== pass1Value) {
    setError(pass, "Пароли не совпадают");
  } else if (pass1Value == "") {
    setError(pass, "Введите пароль");
  } else if (passValue == "") {
    setError(pass, "Введите пароль");
  } else {
    setSuccess(pass);
    pass.value = "";
    pass1.value = "";
  }
}
formRestore.addEventListener("submit", (e) => {
  e.preventDefault();
  validationRestore();
});

function validationRestore() {
  const emailValue = email1.value.trim();
  if (emailValue == "" || !isEmail(emailValue)) {
    setError(email1, "Почта не введена или введена неверно!");
  } else {
    setSuccess(email1);
    modal(email1, emailValue);
    email1.value = "";
  }
}

const setError = (el, message) => {
  const inputControll = el.parentElement;
  const errDisplay = inputControll.querySelector(".error");
  errDisplay.innerText = message;
  inputControll.classList.add("error");
};

const setSuccess = (el) => {
  const inputControll = el.parentElement;
  const errDisplay = inputControll.querySelector(".error");
  errDisplay.innerText = " ";
  inputControll.classList.remove("error");
};

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
const modal = (el, value) => {
  const inputControll = el.parentElement;
  inputControll.insertAdjacentHTML(
    "afterend",
    `<div id="elem" >
    <div id="popup">
    <h3>${value}, добро пожаловать!</h3>
    <button type="button" id="buttonModal">Закрыть</button>
    </div>
    </div>`
  );
  const successElem = document.getElementById("elem");
  successElem.classList.add("elem");

  const popup = document.getElementById("popup");
  popup.classList.add("popup");

  const buttonModal = document.getElementById("buttonModal");
  buttonModal.classList.add("buttonModal");

  buttonModal.addEventListener("click", () => {
    successElem.classList.remove("elem");
    popup.classList.remove("popup");
    buttonModal.classList.remove("buttonModal");
    successElem.classList.add("block");
  });
};

btnLog.addEventListener("click", getRegister);
function getRegister(e) {
  e.preventDefault();
  formLogin.classList.add("formreg");
  formReg.classList.remove("formreg");
}

btnForget.addEventListener("click", forgetPass);

function forgetPass(e) {
  e.preventDefault();
  formLogin.classList.add("formreg");
  formReg.classList.add("formreg");
  formRestore.classList.remove("formreg");
}

const btnReload = document.getElementById("rel");
btnReload.addEventListener("click", () => {
  location.reload();
});
