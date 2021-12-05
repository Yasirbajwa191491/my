
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <select name="items" id="items">
        <option value="0">Select an item</option>
       
        <?php
        include "connection.php";
        $sql1="Select * from cities";
        $data1=mysqli_query($conn,$sql1);
        while($row=mysqli_fetch_assoc($data1)){
           $sid=$row['sid'];
           $scity=$row['city'];
           echo "<option value=".$sid.">".$scity."</option>"; 
        }
        ?>
    </select>
</body>
</html>
