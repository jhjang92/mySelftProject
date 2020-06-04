<?
    include_once $_SERVER['DOCUMENT_ROOT']."/inc/db.php";

    $idx = $_GET['idx'];
    $password = $_GET['password'];

    commentSelect();
    function commentSelect(){
        global $idx;
        global $password;

        $query = "SELECT *
                    FROM comments
                   WHERE idx = '$idx'
                 ";
            $result = mq($query);
            
            while($row = mysqli_fetch_array($result)){
             
                $sqlPassword = $row['password'];

                if($password === $sqlPassword){
                   echo "true";
                }else{
                   echo "false";
                }
            }
    }

?>