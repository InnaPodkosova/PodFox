<!doctype html>
<html>
<head>
   <meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
   <title>Ваше сообщение успешно отправлено</title>
</head>

<body>

<?php
   $back = "<p><a href=\"javascript: history.back()\">Вернуться назад</a></p>";

   if(!empty($_POST['name']) and !empty($_POST['phone']) and !empty($_POST['mail'])
   and !empty($_POST['message'])){
      $name = trim(strip_tags($_POST['name']));
      $phone = trim(strip_tags($_POST['phone']));
      $mail = trim(strip_tags($_POST['mail']));
      $message = trim(strip_tags($_POST['message']));

      mail('podfox.events@gmail.com', 'podfox-events.com',
      'Вам написал: '.$name.'<br />Его номер: '.$phone.'<br />Его почта: '.$mail.'<br />
      Дата Ивента: '.$dataevents,"Content-type:text/html;charset=windows-1251");

      echo "Ваше сообщение успешно отправлено!<Br> Мы перезвоним  в
      ближайшее время<Br> $back";

      exit;
   }
?>
</body>
</html>