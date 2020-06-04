<?
    include_once $_SERVER['DOCUMENT_ROOT']."/inc/db.php";

    $typeCheck = $_GET['typeCheck'];

    switch($typeCheck){
        case "questionMail": questionMainInsert(); break;
        case "commentAdd": commentInsert(); break;
        default: break;
    }

    function questionMainInsert()
    {
        $name = $_GET['name'];
        $email = $_GET['email'];
        $title = $_GET['title'];
        $content = $_GET['content'];

        $query = "INSERT INTO question_mail(
            name, email, title, content
            ) values (
            '$name', '$email', '$title', '$content'
            )";

        $result = mq($query); // 쿼리명령문 실행
        
        echo $result;
            // echo "<script>alert(\"시간 내주셔서 감사합니다. 빠른 시일내에 답변 드리겠습니다.\");</script>";
            // pageLocation('../html/aboutContact.php?contact');
    }

    function commentInsert()
    {
        $name = $_GET['name'];
        $password = $_GET['password'];
        $content = $_GET['content'];

        $query = "INSERT INTO comments(
            name, password, content
            ) values (
            '$name', '$password', '$content'
            )";

        $result = mq($query); // 쿼리명령문 실행
       
        echo $result;
    }

    function commentRepliesInsert($name, $password, $content)
    {
        $idx = $_GET['idx'];
        $query = "INSERT INTO comments_replies(
            name, password, content, comments_idx
            ) values (
            '$name', '$password', '$content', '$idx'
            )";

        $result = mq($query); // 쿼리명령문 실행
       
        echo $result;
    }
?>