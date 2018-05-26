var date;
var day;
var month;
var year;
var mystery;
var error;
function whatIsIt() {
  var user = document.getElementById("prompt").value;
  date = user.split("-");
  day = date[2];
  month = date[1];
  year = date[0];
  //mystery = true;
  var lastDay;
  error = false;
  switch(month) {
    case 04:
    case 06:
    case 09:
    case 11:
      lastDay = 30;
      break;
    case 01:
    case 03:
    case 05:
    case 08:
    case 10:
    case 12:
      lastDay = 31;
      break;
    case 02:
      checkMystery();
      if (mystery) {
        lastDay = 29;
      } else {
        lastDay = 28;
      }
      break;
    default:
      error = true;
      break;
  }
  console.log(day, " ", month, " ", year, " ", lastDay, " ", mystery);
  if (error === false) {
    if ((day < 1) && (day > lastDay)) {
      error = true;
    }
  displayResults();
  }
};
function checkMystery() {
  mystery = false;
  var quotient = year/400;
  console.log(quotient);
  var remainder = year-(400*quotient);
  console.log(remainder, " 1");
  if (remainder === 0) {
    mystery = false;
  } else {
    quotient = year/100;
    remainder = year-(100*quotient);
    console.log(remainder, " 1");
    if (remainder >= 0) {
      quotient = year/4;
      remainder = year - (4*quotient);
      console.log(remainder, " 1");
      if (remainder === 0) {
        mystery = false;
      }
    }
  }
}
function displayResults() {
  document.getElementById("mystery").innerHTML = mystery;
  document.getElementById("error").innerHTML = error;
}
