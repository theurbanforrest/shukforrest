<?php
include_once '../php/db/config/mysql-config.php';

echo 'config works';

//include configs, set global vars
        include 'config/mysql-config.php';
        $tbname1 = 'crudtest';


//variables from HTML's input data
        $first_name = $_POST['first_name']; 
        $last_name = $_POST['last_name'];
        $user_city = $_POST['user_city'];

echo "the vars are {$first_name} , {$last_name} , {$user_city} ";

//open connection to mysql db
        $connection = mysqli_connect($servername,$username,$password,$dbname) or die("Error " . mysqli_error($connection));

 
 //SQL query

 		$sql = "insert into {$tbname1} values('{$first_name}','{$last_name}','{$user_city}');";

        echo $sql;


        $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));
        
echo 'query took';

//close the db connection
        mysqli_close($connection);

echo 'connection closed'
?>