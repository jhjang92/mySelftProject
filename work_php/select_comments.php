<?
    include_once $_SERVER['DOCUMENT_ROOT']."/mySelftProject/inc/db.php";

    commentSelect();
    function commentSelect(){
        $query = "SELECT *
                    FROM comments
                    order by idx asc
                 ";
            $result = mq($query);
            while($row = mysqli_fetch_array($result)){
                echo json_encode($row['name'], JSON_UNESCAPED_UNICODE);
                echo json_encode($row['password'], JSON_UNESCAPED_UNICODE);
                echo json_encode($row['content'], JSON_UNESCAPED_UNICODE);
            }
    }

    function repliesSelect(){

    }
?>