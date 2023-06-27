/************************************
 *    Global variables              *
 ************************************/
const currentDate = new Date();

const dayInput = document.getElementById("birth-day");
const monthInput = document.getElementById("birth-month");
const yearInput = document.getElementById("birth-year");

const invalidDay = document.getElementById("invalid-day");
const invalidMonth = document.getElementById("invalid-month");
const invalidYear = document.getElementById("invalid-year");

let dayOutput = document.getElementById("age-days");
let monthOutput = document.getElementById("age-months");
let yearOutput = document.getElementById("age-years");

const submitButton = document.getElementById("calculate-age");

/************************************
 *    Validate inputs               *
 ************************************/
function maxDaysInMonth() {
  let maxDay = 31;

  // for April, June, September, and November
  if ([4, 6, 9, 11].includes(Number(monthInput.value))) {
    maxDay = 30;
  }

  // for February & leap year
  else if (Number(monthInput.value) === 2) {
    maxDay = Number(yearInput.value) % 4 === 0 ? 29 : 28;
  }

  return maxDay;
}

function validateDayInput() {
  const dayRegex = /^(0?[1-9]|[12]\d|3[01])$/;
  const maxDay = maxDaysInMonth();

  if ((dayRegex.test(dayInput.value) && dayInput.value <= maxDay) || dayInput.value === "") {
    // Day is valid
    invalidDay.innerHTML = "";
    document.getElementById("day").classList.remove("error");

    return true;
  } else {
    // Day is invalid
    invalidDay.innerHTML = "Must be a valid day";
    document.getElementById("day").classList.add("error");

    return false;
  }
}

function validateMonthInput() {
  const monthRegex = /^(0?[1-9]|1[0-2])$/;

  if (monthRegex.test(monthInput.value) || monthInput.value === "") {
    // Month is valid
    invalidMonth.innerHTML = "";
    document.getElementById("month").classList.remove("error");

    return true;
  } else {
    // Month is invalid
    invalidMonth.innerHTML = "Must be a valid month";
    document.getElementById("month").classList.add("error");

    return false;
  }
}

function validateYearInput() {
  const yearRegex = /^\d{4}$/;

  if (yearInput.value > currentDate.getFullYear()) {
    // Year is in the future
    invalidYear.innerHTML = "Must be in the past";
    document.getElementById("year").classList.add("error");

    return false;
  } else if (yearRegex.test(yearInput.value) || yearInput.value === "") {
    // Year is valid
    invalidYear.innerHTML = "";
    document.getElementById("year").classList.remove("error");

    return true;
  } else {
    // Year is invalid
    invalidYear.innerHTML = "Must be a valid year";
    document.getElementById("year").classList.add("error");

    return false;
  }
}

function validateForm() {
  const validateDay = validateDayInput();
  const validateMonth = validateMonthInput();
  const validateYear = validateYearInput();

  if (validateDay && validateMonth && validateYear && dayInput.value && monthInput.value && yearInput.value) {
    // Everything is valid
    submitButton.disabled = false;
    
  } else if (dayInput.value === "" && monthInput.value === "" && yearInput.value === "") {
    // Inputs are empty
    submitButton.disabled = true;
    
  } else if ((!validateDay || !validateMonth || !validateYear) && dayInput.value && monthInput.value && yearInput.value) {
    // Input is an invalid date
    submitButton.disabled = true;

    invalidDay.innerHTML = "Must be a valid date";
    document.getElementById("day").classList.add("error");
    document.getElementById("month").classList.add("error");
    document.getElementById("year").classList.add("error");
  }
}

/************************************
 *    Calculate age                 *
 ************************************/
function calculateAge() {
  const inputDate = new Date(yearInput.value, monthInput.value - 1, dayInput.value);

  let  totalYears = currentDate.getFullYear() - inputDate.getFullYear();
  let  totalMonths = currentDate.getMonth() - inputDate.getMonth();
  let  totalDays = currentDate.getDate() - inputDate.getDate();

  // Adjust age if the current date is before the birthdate
  if (totalMonths < 0 || (totalMonths === 0 && totalDays < 0)) {
    totalYears--;
    totalMonths += 12;
  }

  // Adjust age if the current date's day is earlier in the month
  if (totalDays < 0) {
    const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
    totalMonths--;
      totalDays += lastMonthDate.getDate();
  }

  yearOutput.innerHTML = totalYears;
  monthOutput.innerHTML = totalMonths;
  dayOutput.innerHTML = totalDays;

  animateNumbers("age-years", 0, totalYears, 1000);
  animateNumbers("age-months", 0, totalMonths, 1000);
  animateNumbers("age-days", 0, totalDays, 1500);
  
  if (submitButton.disabled) {
    console.log("Button clicked while disabled!");
  }
}

function animateNumbers(id, start, end, duration) {
  if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

/************************************
 *    Event listeners               *
 ************************************/
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", validateForm);
});

submitButton.addEventListener("click", calculateAge);

/************************************
 *    Call functions                *
 ************************************/
validateDayInput();
validateMonthInput();
validateYearInput();
validateForm();