<?php
session_start();
session_destroy();
header('Location: /Globalwoodworkengineering/index.php');
exit();
?>
