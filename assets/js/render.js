const tasks = [];

function splitString(stringToSplit, separator) {
  let arrayOfStrings = stringToSplit.split(separator);

  return arrayOfStrings;
}

const servRequest = function (url, data, method = "POST") {
  $.ajax({
    url: url,
    method: method,
    data: data,
    success(data) {
      console.log("Данные отправленны успешно");
    },
  });
};

const checkAnswer = function (answer) {
  if (answer == "") {
    if (!confirm("Вы уверены? Поле не заполнено.")) {
      return 1;
    }
  } else {
    if (!confirm("Вы уверены? Ответ нельзя будет изменить.")) {
      return 1;
    }
  }
};

const tasksTexts = {
  1: {
    text:
      "Воронцовская, 19Б. Сколько человечков на табличке во дворе на детской площадке?",
    value: 1,
  },
  2: {
    text:
      "Автор памятника изобразил композитора в зрелые годы, сидящим на лавочке. Не Чайковский. Не Рахманинов. Процитируйте первую строчку, которая выгравирована на лавочке.",
    value: 2,
  },
  3: {
    text:
      "Эти переулки – пятерняшки. Вам в 5-й из них. Внимательно смотря по сторонам, заметьте старинный дворик. Какого цвета обложка книги дедушки, сидящего рядом с бабушкой на скамеечке?",
    value: 3,
  },
  4: {
    text:
      "На северной стене ТЦ «Звёздочка» разыщите табличку «Место для курения». Обратите внимание на стикер со словом «Кринж». Какое слово было изменено на слово «Кринж»?",
    value: 2,
  },
  5: {
    text:
      "Посмотрите видео. Найдите в загаданном дворе надписи ZNC365 и MOSTW02 и сделайте с ними фотографию. Фото необходимо опубликовать в сторис Instagram с отметкой @msk_in_motion (ваш профиль должен быть открытым до конца дня).",
    value: 3,
  },
  6: {
    text:
      "Pskovskaya, Vshivaya, Ivanovskaya – and that’s not all! Найдя по этой загадке здание, посмотрите на въездные ворота напротив. Что они иллюстрируют?",
    value: 4,
  },
  7: {
    text:
      "Вспомните детскую загадку и попробуйте отгадать это: ССОПОНТОВДТННТП. Сколько деревьев растет на платформе во внутреннем дворе?",
    value: 3,
  },
  8: {
    text:
      "Чтобы понять, куда идти, нужно одним словом назвать место, где стоит, волнуясь, герой известной песни Иона С., после чего добавить номер, который состоит из первых трёх степеней двойки (счёт начинать с единицы). К востоку от здания находится дорожка из плиток. Пройдитесь по ним и заодно посчитайте их количество",
    value: 3,
  },
  9: {
    text:
      "Вам на улицу, где находится, организация, которая по последним данным не любит птиц и самолёты. Прогуляйтесь по угаданной улице и найдите конструкцию на земле с изображением фигур, имеющих одно общее свойство с птицами и самолётами (думай прямо). Внимательно изучите конструкцию и сосчитайте количество этих фигур на ней.",
    value: 4,
  },
  10: {
    text:
      "Рогожский Вал, 13к2, двор. Один из членов команды должен сфотографироваться в скафандре, остальные также должны быть в кадре. Просим быть предельно осторожными! Фото необходимо опубликовать в сторис Instagram с отметкой @msk_in_motion (ваш профиль должен быть открытым до конца дня).",
    value: 1,
  },
  11: {
    text:
      "ФИНИШ – Таганский детский парк. Сделайте фото всей командой на водной интерактивной площадке или у цветомузыкального фонтана. Фото необходимо опубликовать в сторис Instagram с отметками @msk_in_motion и @moy_raion (ваш профиль должен быть открытым до конца дня).",
    value: 5,
  },
}

function generateTasks() {
  for (let i = 0; i < 11; i++) {
    // Шаблоны с картинками
    // if (i == 1 || i == 11 || i == 12) {
    //   tasks.push(
    //     `
    //             <div class="task">
    //                 <form action="#">
    //                     <h2>Задание №${i + 1}</h2>
    //                     <p></p>
    //                     <div class="picrture">
    //                         <details>
    //                             <summary>Развернуть картинку</summary>
    //                             <img src="assets/img/z${
    //                               i + 1
    //                             }.png" height=300 wdith=300></img>
    //                         </details>
    //                     </div>
    //                     <div class="interactive">
    //                         <textarea class="data${
    //                           i + 1
    //                         }" wrap="soft" placeholder="Введите свой ответ"></textarea>
    //                         <button type="submit" id="id_${
    //                           i + 1
    //                         }" class="btn btn-dark submBtn">Подтвердить</button>
    //                     </div>
    //                 </form>
    //             </div>
    //         `
    //   );
    //   continue;
    // }

    //Шаблон с ссылкой на Youtube-видео
    if (i == 4) {
      tasks.push(
        `
                    <div class="task">
                        <form action="#">
                            <h2>Задание №${i + 1}</h2>
                            <p></p>
                            <details>
                                <summary>Посмотри видео</summary>
                                <video class="vid" controls="controls">
                                  <source src="assets/vid/video.mp4" type="video/mp4" codecs="avc1.42E01E, mp4a.40.2"'>
                                </video>
                            </details>
                            <div class="interactive">
                                <textarea class="data${
                                  i + 1
                                }" wrap="soft" placeholder="Вставьте ссылку на инстаграм аккаунт" height=30></textarea>
                                <button type="submit" id="id_${
                                  i + 1
                                }" class="btn btn-dark submBtn">Подтвердить</button>
                            </div>
                        </form>
                    </div>
                `
      );
      continue;
    }

    if (i == 9 || i == 10) {
      tasks.push(
        `
                <div class="task">
                    <form action="#">
                        <h2>Задание №${i + 1}</h2>
                        <p></p>
                        <div class="interactive">
                            <textarea class="data${
                              i + 1
                            }" wrap="soft" placeholder="Вставьте ссылку на инстаграм-аккаунт"></textarea>
                            <button type="submit" id="id_${
                              i + 1
                            }" class="btn btn-dark submBtn">Подтвердить</button>
                        </div>
                    </form>
                </div>
            `
      );
      continue;
    }

    // Шаблоны с текстом
    tasks.push(
      `
            <div class="task">
                <form action="#">
                    <h2>Задание №${i + 1}</h2>
                    <p></p>
                    <div class="interactive">   
                        <textarea class="data${
                          i + 1
                        }" wrap="soft" placeholder="Введите свой ответ"></textarea>
                        <button type="submit" id="id_${
                          i + 1
                        }" class="btn btn-primary submBtn">Подтвердить</button>
                    </div>
                </form>
            </div>
        `
    );
  }
}

function doAjax() {
  //Создать элемент, который будет показывать загрузку страницы

  $.ajax({
    url: "vendor/getTasks.php",
    dataType: "json",
    method: "GET",
    success(data) {
      // console.log(data, 'asdadaadasdasdasdasd');
    },
  }).done(function (Answers) {
    //Преобразование строковой последовательности, взятой из базы данных, в числовой массив
    const sequence = splitString(Answers["Sequence"], " ");
    let indexes = sequence.map(Number);
    // console.log(indexes)

    //добавление элементов в DOM-дерево
    const cont = document.querySelector(".container");
    const tLength = tasks.length;
    for (let i = 0; i < tLength - 1; i++) {
      cont.insertAdjacentHTML("beforeend", tasks[indexes[i]]);
      document.body.appendChild(cont);
    }
    cont.insertAdjacentHTML("beforeend", tasks[10]);
    document.body.appendChild(cont);

    const tasksEls = document.getElementsByClassName("task");
    console.log(tasksEls)

    //Заполнение элементов DOM-дерева контентом
    for (let i = 0; i < tasksEls.length - 1; i++) {
      el = tasksEls[i];

      let value = "";
      if (tasksTexts[indexes[i] + 1]["value"] == 1) {
        value = "балл";
      } else {
        value = "балла";
      }
      el.querySelector("h2").textContent = `Задание № ${i + 1} (${
        tasksTexts[indexes[i] + 1]["value"]
      } ${value})`;

      el.querySelector("p").textContent = tasksTexts[indexes[i] + 1]["text"];

      if (Answers[`Task${indexes[i] + 1}`] != null) {
        document.querySelector(`#id_${indexes[i] + 1}`).disabled = true;
        document.querySelector(`.data${indexes[i] + 1}`).disabled = true;
        document.querySelector(`.data${indexes[i] + 1}`).placeholder =
          "Нет ответа";
        el.querySelector("textarea").textContent =
          Answers[`Task${indexes[i] + 1}`];
        el.querySelector("textarea").style.color = 'gray';
      }
    }

    // Обработка задания №30 (финиш)
    el = tasksEls[10];
    el.querySelector("h2").textContent = `Задание № ${11} (${
      tasksTexts[11]["value"]
    } баллов)`;
    el.querySelector("p").textContent = tasksTexts[11]["text"];
    if (Answers[`Task${11}`] != null) {
      document.querySelector(`#id_${11}`).disabled = true;
      document.querySelector(`.data${11}`).disabled = true;
      document.querySelector(`.data${11}`).placeholder = "Нет ответа";
      el.querySelector("textarea").textContent = Answers[`Task${11}`];
      el.querySelector("textarea").style.color = 'gray';
    }

    //Отправка данных на сервер
    $(".submBtn").click(function (e) {
      //Чтобы страница не обновлялась
      e.preventDefault();

      //Получение id таска
      const id = Number(splitString(e.currentTarget.id, "_")[1]);

      const taskAnswer = document.querySelector(`.data${id}`).value;

      // Окончательный ли ответ
      console.log(id);
      if (id != 11 && checkAnswer(taskAnswer) == 1) return 1;

      // ФИНИШ
      if (id == 11) {
        const finish = confirm(
          "ЭТО ФИНИШ!\nВы уверены, что хотите закончить квест?\n" +
            "Вы больше не сможете вернуться к вопросам!"
        );

        if (!finish) {
          return;
        }
      }

      servRequest(
        "vendor/tasksHandler.php",
        (data = {
          taskNum: id,
          taskAnswer: taskAnswer,
        })
      );

      if (id == 11) {
        document.location.replace("vendor/setStopTime.php");
      }

      document.querySelector(`#id_${id}`).disabled = true;

      let txtarea = document.querySelector(`.data${id}`);
      txtarea.disabled = true;
      txtarea.placeholder = "Нет ответа";
      txtarea.style.color = 'gray'
    });
  });
}

generateTasks();

doAjax();
