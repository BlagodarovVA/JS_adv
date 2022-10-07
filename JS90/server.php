<?php
$_POST = json_decode(file_get_contents("php://input"), true);        // для работы с JSON
echo var_dump($_POST);              // используется для записи данных с формы