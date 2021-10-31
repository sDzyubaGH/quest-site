<?php
    session_start();
    require_once './connect.php';
    $data = [];
    if($dbData = mysqli_query($connect, "SELECT * FROM Score WHERE ID = ".$_SESSION['user']['id'])) {
        $data = $dbData->fetch_assoc();
        // $data['sequence'] = $_SESSION['sequence'];

        echo(json_encode($data));
        
        $connect->close();
    }
    else {
        printf("Connect Error: getTasks.php не получил данные из бд");
    }
?>