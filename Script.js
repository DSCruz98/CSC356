// check for valid form inputs
function validateForm() {
  let form = document.frmApp;

  // create shortcut to name box
  let fullName = form.txtFullName.value.trim();
  // create shortcut to age box
  let age = form.txtAge.value.trim();
  // create shortcut to experience box
  let experience = form.txtExperience.value.trim();
  // create shortcut to 4th box
  let currentJob = form.txtCurrentJob.value.trim();
  // create shortcut to 5th box
  let funFact = form.txtFunFact.value.trim();
  // trim removes leading and trailing spaces

  // shortcut to div message
  let message = document.getElementById("divMessage");

  // check Boxes for empty inputs
  if (fullName.length == 0) {
    message.textContent = "Please enter your full name.";
    return false;
  }

  if (age.length == 0) {
    message.textContent = "Please enter your age.";
    return false;
  }

  if (experience.length == 0) {
    message.textContent = "Please enter your years of experience.";
    return false;
  }

  if (currentJob.length == 0) {
    message.textContent = "Please enter your current job.";
    return false;
  }

  if (funFact.length == 0) {
    message.textContent = "Please enter a fact about yourself.";
    return false;
  }

  // if we get here, form was succesful
  return true;
}

function runCountdown(countdownTimer) {
  // variable will use time set in php code and convert into seconds for easier time comparison
  countdownTimer = new Date(countdownTimer).getTime();

  // set interval repeats code at specified interval and returns current ID of interval so it can be stopped
  let intervalId = setInterval(function () {
    // this variable will grab current time
    let currentTime = new Date().getTime();

    //   const wont change - UPPERCASE
    // miliseconds in a second
    const MS_IN_A_SECOND = 1000;
    // miliseconds in a minute
    const MS_IN_A_MINUTE = MS_IN_A_SECOND * 60;
    const MS_IN_AN_HOUR = MS_IN_A_MINUTE * 60;
    const MS_IN_A_DAY = MS_IN_AN_HOUR * 24;

    // get difference between now and launch time
    let timeDiff = countdownTimer - currentTime;

    // countdown calculations
    // days left before launch
    let days = Math.floor(timeDiff / MS_IN_A_DAY);
    // hours left
    let hours = Math.floor((timeDiff % MS_IN_A_DAY) / MS_IN_AN_HOUR);
    // minutes left
    let minutes = Math.floor((timeDiff % MS_IN_AN_HOUR) / MS_IN_A_MINUTE);
    // seconds left
    let seconds = Math.floor((timeDiff % MS_IN_A_MINUTE) / MS_IN_A_SECOND);

    // shortcut to divCountdown
    let divCountdown = document.getElementById("divCountdown");

    // display the time left before launch in div
    divCountdown.textContent =
      days +
      " Days, " +
      hours +
      " Hours, " +
      minutes +
      " Minutes, " +
      seconds +
      " Seconds";

    // shortcut to divCountdownMessage
    let divCountdownMessage = document.getElementById("divCountdownMessage");

    // if/else to give context for launch
    if (timeDiff < 0) {
      clearInterval(intervalId);
      // missed the launch
      divCountdown.textContent = "";
      divCountdownMessage.textContent =
        "Launch has commenced. You may still sign up for future launches on the Application Page.";
    } else if (days < 7) {
      divCountdownMessage.textContent =
        "Less than a week until launch. Time to pack your bags!";
    } else {
      divCountdownMessage.textContent =
        "Launching soon! Sign up on the Application page!";
    }
  }, 1000); // 1000 is the time in miliseconds = 1 second
}
