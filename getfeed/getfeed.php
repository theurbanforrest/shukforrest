<?php

        //include configs, set global vars
        include '../php/db/config/mysql-config.php';
        $tbname1 = 'fineuploader';


        //open connection to mysql db
        $connection = mysqli_connect($servername,$username,$password,$dbname) or die("Error " . mysqli_error($connection));


        //run SQL query
        $sql = "select * from fineuploader where pic_name LIKE '%(medium)%' ORDER BY timestamp DESC";

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