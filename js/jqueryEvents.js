$(document).ready(function () {
  $("#countries").change(function () {
    const countryValue = $("#countries").children("option:selected").val();
    select_option('#lang > option.' + countryValue);
    hiddenOptions(countryValue)
  });

  $("#lang").change(function () {
    let langValue = $("#lang").children("option:selected").val();
    if (langValue == 'serbian' || langValue == 'croatian') {
      langValue = 'bosnia_Herzegovina';
    }
    select_option('#countries > option.' + langValue);
  });

});

function select_option(value) {
  $(value).prop("selected", true);
}

function hiddenOptions(cssClass) {
  $("#lang").children("option").css("display", "none");
  $("#lang").find("option." + cssClass).css("display", "inline-block");
}