<!doctype html>
<html>
<head>
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <title>Ваше сообщение успешно отправлено</title>
   <link rel="stylesheet" href="mail.css?v3">
</head>

<body>

<img src="images/b-logo.svg" alt="PodFox - EVENT AGENCY">

<?php

   $back = "<p><a href=\"javascript: history.back()\">Вернуться назад</a></p>";

   if(!empty($_POST['name']) and !empty($_POST['phone']) and !empty($_POST['email'])
   and !empty($_POST['data'])){
      $name = trim(strip_tags($_POST['name']));
      $phone = trim(strip_tags($_POST['phone']));
      $mail = trim(strip_tags($_POST['email']));

      mail('podfox.events@gmail.com', 'podfox-events.com',
      'Вам написал: '.$name.'<br />Его номер: '.$phone.'<br />Его почта: '.$mail.
      ,"Content-type:text/html;charset=utf-8");

      echo "Ваше сообщение успешно отправлено!<Br> Мы перезвоним  в
      ближайшее время<Br> $back";

      exit;
   }
?>

</body>
</html>