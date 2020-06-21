<!doctype html>
<html>
<head>
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
   <title>Ваше сообщение успешно отправлено</title>
</head>

<body>

<?php
   $back = "<p><a href=\"javascript: history.back()\">Вернуться назад</a></p>";

   if(!empty($_POST['name']) and !empty($_POST['phone']) and !empty($_POST['email'])
   and !empty($_POST['dataevents'])){
      $name = trim(strip_tags($_POST['name']));
      $phone = trim(strip_tags($_POST['phone']));
      $mail = trim(strip_tags($_POST['email']));
      $message = trim(strip_tags($_POST['dataevents']));

      mail('podfox.events@gmail.com', 'podfox-events.com',
      'Вам написал: '.$name.'<br />Его номер: '.$phone.'<br />Его почта: '.$mail.'<br />
      Дата Ивента: '.$data,"Content-type:text/html;charset=utf-8");

      echo "Ваше сообщение успешно отправлено!<Br> Мы перезвоним  в
      ближайшее время<Br> $back";

      $back = "<img src="images/w-logo.svg" alt="PodFox - EVENT AGENCY">";

      exit;
   }
?>
<style>

body{
    font-size: 16px;
    display: block;
    text-align: center;
    width: 100%;
    height: 100%;
    background-image: url(images/test3.jpg);
}
a{
    outline: none;
    text-decoration: none;
    color: #F44336;
    text-transform: uppercase;
}


</style>
</body>
</html>