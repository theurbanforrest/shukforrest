<?php

        //include configs, set global vars
        include '../php/db/config/mysql-config.php';
        $tbname1 = 'fineuploader';

        //get data
        $timestamp = $_POST['timestamp'];
        $pic_UUID = $_POST['pic_UUID'];
        $pic_name = $_POST['pic_name'];
        $place_google_id = $_POST['place_google_id'];
        $place_google_name = $_POST['place_google_name'];
        $blurb = $_POST['blurb'];
        $tags = $_POST['tags'];

        echo "got the data: {$timestamp} , {$pic_UUID} , {$pic_name} , {$place_google_id} , {$place_google_name} , {$blurb}";

        //open connection to mysql db
        $connection = mysqli_connect($servername,$username,$password,$dbname) or die("Error " . mysqli_error($connection));


        //run SQL query
        $sql = "insert into {$tbname1} values ('{$timestamp}','{$pic_UUID}','{$pic_name}','{$place_google_id}' , '{$place_google_name}' , '{$blurb}' , '{$tags}' );";


        echo $sql;


        $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

    /* NOT USING - only for getting contents from database
        //create an array
        $emparray = array();
        while($row =mysqli_fetch_assoc($result))
        {
            $emparray[] = $row;
        }
        echo json_encode($emparray);
    */
        //close the db connection

        mysqli_close($connection);

        //Send alert back to the client
        $message = "Uploaded successfully.";
        echo "<script type='text/javascript'>alert('$message');</script>";
?>