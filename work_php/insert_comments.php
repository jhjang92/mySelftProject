<?
    include_once $_SERVER['DOCUMENT_ROOT']."/mySelftProject/inc/db.php";

    $name = $_GET['name'];
    $password = $_GET['password'];
    $content = $_GET['content'];

    // 2종류 인설트 분기해야함.
    commentInsert($name, $password, $content);

    function commentInsert($name, $password, $content)
    {
        $query = "INSERT INTO comments(
            name, password, content
            ) values (
            '$name', '$password', '$content'
            )";

        $result = mq($query); // 쿼리명령문 실행
       
        echo $result;
    }
?>