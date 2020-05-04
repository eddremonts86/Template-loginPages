function sendInfo() {

  let number = Math.floor(Math.random() * 10);
  console.log(number)
  console.log(number % 2)
  if (number % 2 == 0) {
    window.location.replace("/versions/v1/general/thanks.html");
  } else {
    window.location.replace("/versions/v1/general/error.html");
  }

}

function validation() {
  const email = document.getElementById("email").value;
  const countries = document.getElementById("countries").value;
  const lang = document.getElementById("lang").value;
  const terms = document.getElementById("styled-checkbox-1").checked;
  if (email && emailValidation(email) && countries && lang && terms) {
    document.getElementById("formButton").disabled = false;
    return true;
  } else {
    document.getElementById("formButton").disabled = true;
    return false;
  }
}

function validationVoucher() {
  const email = document.getElementById("email").value;
  const campaign = document.getElementById("campaign").value;
  const terms = document.getElementById("styled-checkbox-1").checked;
  if (email && emailValidation(email) && campaign && terms) {
    document.getElementById("formButton").disabled = false;
    return true;
  } else {
    document.getElementById("formButton").disabled = true;
    return false;
  }
}

function validationNotifiedCaptcha() {
  const email = document.getElementById("email").value;
  const countries = document.getElementById("countries").value;
  const lang = document.getElementById("lang").value;
  const terms = document.getElementById("styled-checkbox-1").checked;
  if (
    email &&
    emailValidation(email) &&
    countries &&
    lang &&
    terms &&
    this.captchaValidation()
  ) {
    document.getElementById("formButton").disabled = false;
    return true;
  } else {
    document.getElementById("formButton").disabled = true;
    return false;
  }
}

function validationVoucherCaptcha() {
  console.log("dsd");
  const email = document.getElementById("email").value;
  const campaign = document.getElementById("campaign").value;
  const terms = document.getElementById("styled-checkbox-1").checked;
  if (
    email &&
    emailValidation(email) &&
    campaign &&
    terms &&
    this.captchaValidation()
  ) {
    document.getElementById("formButton").disabled = false;
    return true;
  } else {
    document.getElementById("formButton").disabled = true;
    return false;
  }
}

function emailValidation(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    document.getElementById("notice").innerHTML = "";
    return true;
  }
  document.getElementById("notice").innerHTML =
    "You have entered an invalid email address!";
  return false;
}

function captchaValidation() {
  var response = grecaptcha.getResponse();
  if (response.length == 0) {
    return false;
  } else {
    return true;
  }
}

function backend_API_challenge() {
  var response = grecaptcha.getResponse();
  $.ajax({
    type: "POST",
    url: "https://www.google.com/recaptcha/api/siteverify",
    data: {
      secret: "6LdLCvAUAAAAAD7W7XW1ZoZIEV_Q_WLyvBJgKQBk",
      response: response,
      remoteip: "localhost",
    },
    contentType: "application/x-www-form-urlencoded",
    success: function (data) {},
  });
}