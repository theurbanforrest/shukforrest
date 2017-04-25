<?php

        //include configs, set global vars
        include '../php/db/config/mysql-config.php';

        $tbname1 = 'wedding_playlist';

        $artist = $_POST['artist'];
        $song = $_POST['song'];


        //open connection to mysql db
        $connection = mysqli_connect($servername,$username,$password,$dbname) or die("Error " . mysqli_error($connection));


        //run SQL query
        $sql = "DELETE FROM {$tbname1} WHERE artist = '{$artist}' AND song = '{$song}' ;";

        $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

        echo "Removed {$artist} - {$song} successfully."


        //close the db connection
        mysqli_close($connection);

?>