<?php
error_reporting(E_ALL);
ini_set("display errors", 1);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mars Countdown</title>
    <link rel="stylesheet" href="Style.css">
</head>
<body>
    <header>
        <?php include "menu.php"; ?>
        <h1>
            Mars Tourism - Launch Countdown
        </h1>
        <h2>
            Next Launch In:
        </h2>
    </header>

    <main>
        <div id="divCountdown"></div>
        <div id="divCountdownMessage"></div>
    </main>

    <?php
    // variable to hold launch time
        $launchDateTime = strtotime("December 1, 2025 12:00:00");
    // format the date into js friendly format
        $jsDateTime = date("F d, Y H:i:s", $launchDateTime);
    ?>

<script src="Script.js"></script>
<script>
runCountdown('<?php echo $jsDateTime; ?>');
</script>
</body>
</html>