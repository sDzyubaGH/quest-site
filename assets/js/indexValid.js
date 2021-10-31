function changeStyle(el, bgColor, bColor) {
  el.style.backgroundColor = bgColor;
  el.style.borderColor = bColor;
}

btn = document.querySelector(".mybtn");
btn.addEventListener("click", (e) => {
  const login = document.querySelector(".login");
  const pass = document.querySelector(".pass");
  

  if (document.querySelector(".msg")) {
    document
      .querySelector(".msg")
      .parentNode.removeChild(document.querySelector(".msg"));
  }


  if (login.value == "") {
    e.preventDefault();

    changeStyle(login, "#DCDCDC", "red");

    const msg = '<p class="msg">Введите логин</p>';
    document.querySelector("form").insertAdjacentHTML("beforeend", msg);
  } else if (login.style.backgroundColor != "white" && login.style.borderColor != "#e3e3e3") {
    login.removeAttribute('style')
  }


  if (pass.value == "") {
    e.preventDefault();

    changeStyle(pass, "#DCDCDC", "red");

    if (!document.querySelector(".msg")) {
      const msg = '<p class="msg">Введите пароль</p>';
      document.querySelector("form").insertAdjacentHTML("beforeend", msg);
    }
  } else if (pass.style.backgroundColor != "white" && pass.style.borderColor != "#e3e3e3") {
    pass.removeAttribute('style')
  }
});
