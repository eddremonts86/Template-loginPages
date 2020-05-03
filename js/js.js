function sendInfo() {

}

function validation() {
    const email = document.getElementById("email").value
    const countries = document.getElementById("countries").value
    const lang = document.getElementById("lang").value
    const terms = document.getElementById("styled-checkbox-1").checked
    if (email && emailValidation(email) && countries && lang && terms) {
        document.getElementById("formButton").disabled = false
        return true
    } else {
        document.getElementById("formButton").disabled = true
        return false
    }
}

function validationVoucher() {
    const email = document.getElementById("email").value
    const campaign = document.getElementById("campaign").value
    const terms = document.getElementById("styled-checkbox-1").checked
    if (email && emailValidation(email) && campaign && terms) {
        document.getElementById("formButton").disabled = false
        return true
    } else {
        document.getElementById("formButton").disabled = true
        return false
    }
}

function emailValidation(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        document.getElementById("notice").innerHTML = ""
        return (true)
    }
    document.getElementById("notice").innerHTML = "You have entered an invalid email address!"
    return (false)

}

function checkRecaptcha() {
    console.log("ajkbdoldknm ")
    /*
    var response = grecaptcha.getResponse();
    console.log(response)
    if (response.length == 0) {
        //reCaptcha not verified
        alert("no pass");
    } else {
        //reCaptch verified
        alert("pass");
    }*/
}
// implement on the backend
function backend_API_challenge() {
    var response = grecaptcha.getResponse();
    $.ajax({
        type: "POST",
        url: 'https://www.google.com/recaptcha/api/siteverify',
        data: {
            "secret": "6LdLCvAUAAAAAD7W7XW1ZoZIEV_Q_WLyvBJgKQBk",
            "response": response,
            "remoteip": "localhost"
        },
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) {
            console.log(data);
        }
    });
}