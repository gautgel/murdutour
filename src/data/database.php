<php
$user = "elodie";
$pass="Tqdcefsape@";
try {
    $dbh = new PDO('mysql:host=localhost;dbname=CyclistesFirst', $id, $name,$url);
}
$sql =  'SELECT * FROM Cycliste';
$sqlbis =  'SELECT * FROM FicheCyclistes';
?>