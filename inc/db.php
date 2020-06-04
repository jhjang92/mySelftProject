<?
    // $host = 'localhost';
    // $db_user = 'root';
    // $db_password = '';
    // $db_name = 'myself_portfolio';

    $host = 'localhost';
    $db_user = 'hyogi';
    $db_password = 'wogur7812#';
    $db_name = 'hyogi'; //user DB

    $dbConn = new mysqli($host, $db_user, $db_password, $db_name);

    function mq($sql)
    {
        global $dbConn;
        return $dbConn->query($sql);
    }

    function pageLocation($url){
        echo "<script>location.href=\"$url\";</script>";
    }
?>
<meta charset="UTF-8" />