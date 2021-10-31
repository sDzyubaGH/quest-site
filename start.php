<?php

session_start();

if (!isset($_SESSION['user'])) {
    header('Location: ./index.php');
    exit;
}

if(isset($_SESSION['startTime'])) {
    header('Location: ./tasks.php');
    exit;
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="./assets/css/start.css">

    <title>Start quest</title>
</head>

<body>
    <div class="container">
        <form action="vendor/setStartTime.php">
            <div class="instruction">
                <h2>Инструкция</h2>
                    <p>Приветствуем вас, дамы и господа, любители ломать голову, качать мозг и 
                    икроножные мышцы, дышать свежим воздухом и исследовать красивые уголки столицы!</p>
                    <p>Добро пожаловать на квест «Опасные переулки MARATHON EDITION». В отличии от классической версии квеста 
здесь гораздо меньше район игры и временные рамки, поэтому к игре добавляется тактическая компонента.</p>
                    <p>Игра закрывается в 17:30 (ответы, отправленные после этого времени не учитываются).</p>
                    <p>Правила игры:</p>
                    <ul>
                        <li>Все загаданные точки располагаются внутри отмеченного контура на карте (<a href="https://yandex.ru/maps/-/CCU4QMt1KB" target="_blank">https://yandex.ru/maps/-/CCU4QMt1KB</a>).</li>
                        <li>Передвижение осуществляется только на ногах или на альтернативном транспорте. Другие участники имеют право фиксировать факт нарушения этого пункта и предоставлять организаторам через личное сообщение <a href="https://vk.com/pharmurai" target="_blank">https://vk.com/pharmurai</a> и с указанием нарушающей правила команды. В случае убедительного доказательства обвиняемая команда будет дисквалифицирована.</li>
                        <li>Внимательно читайте условия публикации сторис в заданиях, где нужно это сделать. В случае невыполнения условий задание не засчитывается.</li>
                        <li>Всё, что не запрещено правилами, разрешено.</li>
                    </ul>
                    <p>Используйте свои мозги и интернет по-максимуму. Желаем приятной игры и увидимся на финише, где вас будут ждать наши организаторы! Вы их узнаете по атрибутике «Москвы в движении».</p>
                    <p>В случае технических проблем с сайтом писать сюда – <a href="https://vk.com/thekrapov" target="_blank">https://vk.com/thekrapov</a>.<br>В случае иных проблем писать сюда – <a href="https://vk.com/pharmurai" target="_blank">https://vk.com/pharmurai</a>.
<br>Организаторы подсказок не дают.</p>
            </div>
            <button type="submit" class="btn btn-primary btn-lg startBtn">Старт!</button>
        </form>
    </div>
</body>

</html>