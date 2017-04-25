<?php

        //include configs, set global vars
        include '../php/db/config/mysql-config.php';

        $tbname1 = 'wedding_playlist';

        $oldartist = $_POST['oldartist'];
        $oldsong = $_POST['oldsong'];
        $newartist = $_POST['newartist'];
        $newsong = $_POST['newsong'];


        //open connection to mysql db
        $connection = mysqli_connect($servername,$username,$password,$dbname) or die("Error " . mysqli_error($connection));


        //run SQL query
        $sql = "UPDATE {$tbname1} SET 'artist' = '{$newartist}','song' = '{$newsong}' WHERE 'artist' = '{$oldartist}' AND '{$oldsong}' ";

        $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

        echo "Deleted {$oldartist} - {$oldsong} successfully.  Created {$newartist} - {$newsong}.";


        //close the db connection
        mysqli_close($connection);

?>