
<?php
if (isset($_POST["numbers"])) {
    $numbers = explode(",", $_POST["numbers"]);
    $table = "<table>";
    foreach ($numbers as $number) {
        $table .= "<tr><td>" . $number . "</td><td>" . ($number * $number) . "</td></tr>";
    }
    $table .= "</table>";
    echo $table;
}
?>



