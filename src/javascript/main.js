document.title = "Surplus.com";
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btnL = document.getElementById("btnL");
const btnR = document.getElementById("btnR");

//index
function changeColor3() {
  btnL.style.background = "#52B4A4";
  btnL.style.color = "white";
}
function defaultColor3() {
  btnL.style.background = "white";
  btnL.style.color = "black";
}
function changeColor4() {
  btnR.style.background = "#52B4A4";
  btnR.style.color = "white";
}
function defaultColor4() {
  btnR.style.background = "white";
  btnR.style.color = "black";
}
//btnLogin
function btnLogin() {
  alert("Anda Sudah Memiliki Akun?");
}

//btnRegister
function btnRegister() {
  alert("Anda Belum Punya Akun?");
}
function changeColor() {
  btn1.style.background = "#52B4A4";
  btn1.style.color = "white";
}
function defaultColor() {
  btn1.style.background = "white";
  btn1.style.color = "black";
}

//btnRegisterGoogle
function btnRegister2() {
  alert("Login Dengan Akun Google?");
}

function changeColor2() {
  btn2.style.background = "silver";
}

function defaultColor2() {
  btn2.style.background = "white";
}

//Landing Page
onload = function () {
  let id = document.getElementById("app");
  let loading = document.createElement("div");

  //fill the content
  loading.textContent = "Loading";
  loading.style.fontSize = "24px";
  id.appendChild(loading);

  //set time loading
  let loaded = setInterval(() => {
      loading.textContent = loading.textContent + "."
  }, 1000)

  //stop loading
  setTimeout(() => {
    clearInterval(loaded)
    loading.textContent = "Welcome To Our Page";
  }, 4000);
};