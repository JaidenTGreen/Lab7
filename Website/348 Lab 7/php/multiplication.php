<html>
<head>
    <title>Multiplication Table</title>
</head>
<body>
    <h1>Multiplication Table</h1>

    <?php
    if (isset($_POST['number'])) {
        $number = intval($_POST['number']);

        echo "<p>Multiplication table for the number $number:</p>";
        echo "<table border='1'>";
        
        // Table header with column indexes
        echo "<tr><th>X</th>";
        for ($i = 1; $i <= $number; $i++) {
            echo "<th>$i</th>";
        }
        echo "</tr>";
        
        // Generate the multiplication table
        for ($i = 1; $i <= $number; $i++) {
            echo "<tr><th>$i</th>";
            for ($j = 1; $j <= $number; $j++) {
                echo "<td>" . ($i * $j) . "</td>";
            }
            echo "</tr>";
        }

        echo "</table>";
    }
    ?>
</body>
</html>