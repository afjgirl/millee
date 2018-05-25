window.onload = function randomNumbers() {
  var numbers = [];
  var i;
  var rand;
  for (i = 1; i < 17; i++) {
    do {
      rand = Math.floor(Math.random() * 16 + 1);
    } while (jQuery.inArray(rand, numbers) !== -1);
    numbers.push(rand);
    var value = "num" + i;
    document.getElementById(value).style.background-image = "url('projects/mosaic-game/" + rand + ".jpg')";
  }
  check();
};

function swapValues(number) {
  $("#" + number).addClass("is-primary");
  var a = $("temp").css("background-image"); //check temp
  if (a == "") {
    document.getElementById("temp").innerHTML = document.getElementById(number).style.background-image; // get number value
    document.getElementById("temp1").innerHTML = number; // get number location
  } else {
    var store = document.getElementById("temp1").innerHTML; // get number location
    document.getElementById(store).style.background-image = document.getElementById(number).style.background-image; // setting store to number
    document.getElementById(number).style.background-image = document.getElementById("temp").style.background-image; // setting number to temp
    $("#" + number).removeClass("is-primary");
    $("#" + store).removeClass("is-primary");
    document.getElementById("temp").innerHTML = "";
    document.getElementById("temp1").innerHTML = "";
    check();
  }
}

function check() {
  var i = 1;
  var value;
  do {
    value = '"#num' + i + '"';
    var verify = stripJpg(value);
    console.log(verify, " ", i);
    if (verify == i) {
      i++;
    } else {
      break;
    }
  } while (i < 17);
  var progress = ((i - 1) / 16) * 100;
  console.log((i - 1), " ", progress);
  $("#progress").attr("value", progress);
  if (progress == 100) {
    $("#congrats").addClass("is-active");
  }
}

function refreshPage() {
  window.location.reload();
}
function stripJpg(value) {
  var num = document.getElementById(value).style.background-image;
  num = num.replace(".jpg')","");
  num = num.replace("url('","");
  return num;
}
