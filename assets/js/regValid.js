function changeStyle(el, bgColor, bColor) {
  el.style.backgroundColor = bgColor;
  el.style.borderColor = bColor;
}

function doReq(url, data) {
  return $.ajax({
    url: url,
      type: 'POST',
      dataType: 'json',
      data: data,
      async: false,
    })
}

btn = document.querySelector(".mybtn");

btn.addEventListener("click", (e) => {
  const login = document.querySelector(".login");
  const pass = document.querySelector(".pass");
  const repass = document.querySelector(".repass");
  const team = document.querySelector(".team");
  const participants = document.getElementsByClassName("participant");

  let fail = false // Какое-то поле не удовлетворяет требованиям

  if (document.querySelector(".msg")) {
    document
      .querySelector(".msg")
      .parentNode.removeChild(document.querySelector(".msg"));
  }


  if (login.value.length < 3) {
    changeStyle(login, "#DCDCDC", "red")

    const msg = '<p class="msg">Логин должен быть длиннее 3 символов! ;)</p>';
    document.querySelector("form").insertAdjacentHTML("beforeend", msg);
  } else if (login.style.backgroundColor != "white" && login.style.borderColor != "#e3e3e3") {
    
    data = {
      login: login.value
    }

    doReq('vendor/checkLogin.php', data)
    .done(function(answer){
      if(answer == 1) {
        fail = true

        if(!login.getAttribute('style')) {
          changeStyle(login, "#DCDCDC", "red")
        }

        if (!document.querySelector(".msg")) {
          const msg = '<p class="msg">Такой логин уже существует >.<</p>';
          document.querySelector("form").insertAdjacentHTML("beforeend", msg);
        }
      } else {
        login.removeAttribute('style')
      }
    }).fail(function(answer) {
      console.log(answer, 'Не удалось выполнить запрос к бд')
    })
  }


  if (pass.value.length < 3) {
    fail = true
    changeStyle(pass, "#DCDCDC", "red")

    if (!document.querySelector(".msg")) {
      const msg =
        '<p class="msg">Пароль не может быть короче 3-х символов! >.<</p>';
      document.querySelector("form").insertAdjacentHTML("beforeend", msg);
    }
  } else if (pass.style.backgroundColor != "white" && pass.style.borderColor != "#e3e3e3") {
    pass.removeAttribute('style')
  }


  if (repass.value != pass.value || repass.value == '') {
    // e.preventDefault();
    fail = true

    changeStyle(repass, "#DCDCDC", "red")

    if (!document.querySelector(".msg")) {
      const msg = '<p class="msg">Пароли не совпадают</p>';
      document.querySelector("form").insertAdjacentHTML("beforeend", msg);
    }
  } else if (repass.style.backgroundColor != "white" && repass.style.borderColor != "#e3e3e3") {
    repass.removeAttribute('style')
  }


  if (team.value.length < 3) {
    // e.preventDefault();
    fail = true

    changeStyle(team, "#DCDCDC", "red")

    if (!document.querySelector(".msg")) {
      const msg = '<p class="msg">Вероятно, Вы не ввели название команды!</p>';
      document.querySelector("form").insertAdjacentHTML("beforeend", msg);
    }
  } else if (team.style.backgroundColor != "white" && team.style.borderColor != "#e3e3e3") {
    data = {
      teamName: team.value
    }

    doReq('vendor/checkTeamName.php', data)
    .done(function(answer){
      if(answer == 1) {
        fail = true

        if(!team.getAttribute('style')) {
          changeStyle(team, "#DCDCDC", "red")
        }

        if (!document.querySelector(".msg")) {
          const msg = '<p class="msg">Такое название команды уже существует >.<</p>';
          document.querySelector("form").insertAdjacentHTML("beforeend", msg);
        }
      } else {
        team.removeAttribute('style')
      }
    }).fail(function(answer) {
      console.log(answer, 'Не удалось выполнить запрос к бд')
    })
  }


  let allEmpty = true
  // console.log(participants)
  for(let i = 0; i < participants.length; i++) {
    if(participants[i].value != '') {
      allEmpty = false
    }
  }

  if(allEmpty) {
    // e.preventDefault();
    fail = true

    for(let i = 0; i < participants.length; i++) {
      changeStyle(participants[i], "#DCDCDC", "red")
    }

    if (!document.querySelector(".msg")) {
      const msg = '<p class="msg">Нужен хотя бы 1 участник в команде ;)</p>';
      document.querySelector("form").insertAdjacentHTML("beforeend", msg);
    }
  } else {
    for(let i = 0; i < participants.length; i++) {
      if(participants[i].style.backgroundColor != "white" && participants[i].style.borderColor != "#e3e3e3") {
        participants[i].removeAttribute('style')        
      }
    }
  }

  if(!fail) {
    document.querySelector('form').submit()
  } else {
    console.log('fail = ', fail)
  }
});
