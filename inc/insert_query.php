<?
    function commentInsert($name, $password, $content)
    {

        $query = "INSERT INTO comments(
            name, password, content
            ) values (
            '$name', '$password', '$content'
            )";

        $result = mq($query); // 쿼리명령문 실행

        return $result;
    }
?>