<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mars Tourism - Pilot Application</title>
    <link rel="stylesheet" href="Style.css">

</head>
<body>
    <header>
        <?php include "menu.php"; ?>
        <h1>
            Mars Tourism - Pilot Application
        </h1>
    </header>

    <main>
        <h2>
            Apply Here! Please fill out application to be considered 
            for the next class of pilots!
        </h2>

        <div id="divMessage" class="error"></div>

        <form method="post" id="frmApp" name="frmApp" action="App.php"
        onsubmit="return validateForm();">
            <!-- 5 form elements -->
        
            <label for="txtFullName"> Full Name:</label>
            <input type="text" id="txtFullName" name="txtFullName" 
            placeholder="Your Full Name">
<br>
            <label for="txtAge"> Age:</label>
            <input type="number" id="txtAge" name="txtAge" 
            placeholder="Your Age">
<br>
            <label for="txtExperience"> Years of Pilot Experience:</label>
            <input type="number" id="txtExperience" name="txtExperience" 
            placeholder="Years of Experience">
<br>
            <label for="txtCurrentJob"> Current Job:</label>
            <input type="text" id="txtCurrentJob" name="txtCurrentJob" 
            placeholder="Current Job">
<br>
            <label for="txtFunFact"> Personal Fun Fact:</label>
            <input type="text" id="txtFunFact" name="txtFunFact" 
            placeholder="Fact About Yourself"> 
<br>
            <input type="submit" value="Submit Application">
        </form>
    </main>
</body>

    <script src="Script.js"></script>
</html>