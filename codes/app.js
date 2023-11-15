// Example function for form validation
function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
  }
  