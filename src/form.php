<?php
//var_dump('dfghj');
$message='';
foreach($_POST as $k=>$v){
 $message.=$k.':'.$v."\r\n";
}
$headerFields = array(
    "Content-Type: text/html;charset=utf-8"
);
$r=mail('anastasiya.razumeyko@gmail.com','Site message',$message ,implode("\r\n",$headerFields)
);
$errorMessage = error_get_last();
//var_dump($errorMessage);
if($r){
 echo 'OK';
}else{
 echo 'FAIL';
}
