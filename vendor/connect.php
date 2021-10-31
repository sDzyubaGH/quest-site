<?php

    $connect = mysqli_connect('89.108.70.59', 'root', 'execute_quest', 'Quest', '3306');

    if (mysqli_connect_errno()) {
        printf("Не удалось подключиться: %s\n", mysqli_connect_error());
        exit();
    }