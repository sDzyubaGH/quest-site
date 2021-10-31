<?php
    session_start();
    require_once 'connect.php';

    function sendSQLReq($connection, $answer, $taskNum) {
        if(!mysqli_query($connection, "UPDATE `Score` SET `$taskNum` = '".$answer."' WHERE `Score`.`ID` = ".$_SESSION['user']['id'])) {
            die ("\nПри запросе к БД произошла ошибка");
        }
        else {
            print "\nДанные успешно записаны";
        }
    }
    
    $taskNumber = $_POST['taskNum'];
    $taskAnswer = $_POST['taskAnswer'];

    $taskNum = 'Task'.$taskNumber;

    sendSQLReq($connect, $taskAnswer, $taskNum);


    $connect->close();
?>