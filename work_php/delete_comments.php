<?
    include_once $_SERVER['DOCUMENT_ROOT']."/inc/db.php";

    $idx = $_GET['idx'];
    $query = " DELETE
                 FROM comments 
                WHERE idx = '$idx'
             ";

    $result = mq($query);
    
    if($result){
        echo "true";
    }else{
        echo "false";
    }
?>
