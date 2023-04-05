<?php
$nm= $_POST['nm'];
$eml= $_POST['eml'];
$sub= $_POST['sub'];
$mssg= $_POST['mssg'];

$connection=mysqli_connect("localhost","root","","portfolio");

if(!$connection){
    die("Problem established in the connection");
}

if(isset($_POST['submit'])){
    $insert="INSERT INTO messages(nm,eml,sub,mssg) VALUE ('$nm','$eml','$sub','$mssg')";
    if(mysqli_query($connection,$insert)){
        header("refresh:3,url=index.html");
    }else{
        echo"unable to store data";
    }
}
?>