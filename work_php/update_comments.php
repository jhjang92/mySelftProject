<?
    include_once $_SERVER['DOCUMENT_ROOT']."/inc/db.php";

    $idx = $_GET['idx'];
    $content = $_GET['content'];

    commentUpdate($idx, $content);

    function commentUpdate($idx, $content){
        $query = "UPDATE comments
                     SET content = '$content'
                   WHERE idx = '$idx'
                 ";
        $result = mq($query); // 쿼리명령문 실행
        if($result){
            echo "true";
        }else{
            echo "false";
        }
    }
?>