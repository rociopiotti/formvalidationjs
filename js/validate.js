window.onload = init;

function init() {
  document.getElementById("send").addEventListener("click", validate, false);
}

function validateName() {
  let element = document.getElementById("name");

  if (!element.checkValidity()) {
    if (element.validity.valueMissing) {
      error(element, "Must introduce a name");
    }
    if (element.validity.patternMismatch) {
      error(element, "The name must have between two or more characters");
    }
    return false;
  }
  return true;
}

function validateAge() {
  let element = document.getElementById("age");

  if (!element.checkValidity()) {
    if (element.validity.valueMissing) {
      error(element, "Must introduce a age");
    }
    if (element.validity.rangeOverflow) {
      error(element, "The value must be less than 100");
    }
    if (element.validity.rangeUnderflow) {
      error(element, "The value must be greater than 18");
    }
    return false;
  }
  return true;
}

function validatePhone() {
  let element = document.getElementById("phone");

  if (!element.checkValidity()) {
    if (element.validity.valueMissing) {
      error(element, "You must introduce a phone number");
    }
    if (element.validity.patternMismatch) {
      error(element, "The name must have nine numbers");
    }
    return false;
  }
  return true;
}

function validate(e) {
  deleteError();
  if (
    validateName() &&
    validateAge() &&
    validatePhone() &&
    confirm("Click acept if you want to send the form")
  ) {
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}

function error(element, message) {
  document.getElementById("errorMessage").innerHTML = message;
  element.className = "error";
  element.focus();
}

function deleteError() {
  let form = document.forms[0];
  for (let i = 0; i < form.elements.length; i++) {
    form.elements[i].className = "";
  }
}
