
function validateForm() {
  let email = document.forms["myform"]["phonenum"].value.trim();
  let password = document.forms["myform"]["pass"].value.trim();

  if (email === "") {
    alert("Email must be filled out.");
    return false;
  }

  if (password === "") {
    alert("Password must be filled out.");
    return false;
  }

  if (!ValidateEmail(email)) {
    alert("Invalid Email format!");
    return false;
  }

  if (password.length < 7 ) {
    alert("The password must 7 character long.");
    return false;
  }

  alert("Responses submitted successfuly!");
  return true;
}
  function ValidateEmail(email) {
    const emailregex = /^[a-zA-Z]+[0-9]+@gmail\.com$/;
    return emailregex.test(email);
  }
