<?php

        //include configs, set global vars
        include '../php/db/config/mysql-config.php';
        $tbname1 = 'wedding_playlist';


        //open connection to mysql db
        $connection = mysqli_connect($servername,$username,$password,$dbname) or die("Error " . mysqli_error($connection));


        //run SQL query
        $sql = "select * from wedding_playlist";

        $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));


        //turn result into an array
        $emparray = array();
        while($row =mysqli_fetch_assoc($result))
        {
            $emparray[] = $row;
        }
        echo json_encode($emparray);


        //close the db connection
        mysqli_close($connection);

?>