<?php

        //include configs, set global vars
        include '../php/db/config/mysql-config.php';
        $tbname1 = 'users';

        //get data
        $timestamp = $_POST['timestamp']; 
        $pic_UUID = $_POST['pic_UUID'];
        $place_google_id = $_POST['place_google_id'];
        $place_google_name = $_POST['place_google_name'];
        $blurb = $_POST['blurb'];

        echo "got the data: {$timestamp} , {$pic_UUID} , {$place_google_id} , {$place_google_name} , {$blurb}";

        //open connection to mysql db
        $connection = mysqli_connect($servername,$username,$password,$dbname) or die("Error " . mysqli_error($connection));

/*START HERE - need to update this sql query and also create the table itself
        //fetch table rows from mysql db
        $sql = "insert into {$tbname1} values ('{$id}','{$name}','{$gender}','{$points}');";



        echo $sql;


        $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

        //create an array
        $emparray = array();
        while($row =mysqli_fetch_assoc($result))
        {
            $emparray[] = $row;
        }
        echo json_encode($emparray);
*/
        //close the db connection

        echo "connection closed";
        mysqli_close($connection);
?>