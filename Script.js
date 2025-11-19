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
