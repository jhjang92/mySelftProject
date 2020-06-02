<?
    include_once $_SERVER['DOCUMENT_ROOT']."/mySelftProject/inc/db.php";

    commentSelect();
    function commentSelect(){

        $query = "SELECT *
                    FROM comments
                    order by idx desc
                 ";
            $result = mq($query);
            $json = array();
            $arr = [];
            
            while($row = mysqli_fetch_array($result)){
             
                $idx = $row['idx'];
                $name = $row['name'];
                $password = $row['password'];
                $content = $row['content'];
                $reg_time = $row['reg_time'];
                array_push($arr, array('idx'=> $idx, 'name'=> $name , 'password'=> $password , 'content'=> $content, 'reg_time'=> $reg_time));
            }
            $resultArray = json_encode($arr, JSON_UNESCAPED_UNICODE);
            echo $resultArray;
    }

    function repliesSelect(){

    }
?>