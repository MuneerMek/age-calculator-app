const form = document.querySelector("#age-calc");
let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1; // adjust for zero-based indexing
const currentDay = currentDate.getDate();
// Calculate numbers relative to present day, and insert them into following elements
const yearsLived = document.querySelector("#years-lived");
const monthsLived = document.querySelector("#months-lived");
const daysLived = document.querySelector("#days-lived");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Reset validity on each submit
  let isValid = true;

  // Obtain input values
  let day = document.querySelector(`input[name="day"]`).value.trim();
  let month = document.querySelector(`input[name="month"]`).value.trim();
  let year = document.querySelector(`input[name="year"]`).value.trim();

  // Check for leap year and add February 29th
  if (year % 4 === 0) {
    daysInMonth[1] = 29;
  } else {
    daysInMonth[1] = 28;
  }

  // Validate day
  if (
    day === "" ||
    Math.floor(day) > daysInMonth[Math.floor(month) - 1] ||
    Math.floor(day) > 31
  ) {
    isValid = false;
    // Checks if the input day exceeds the input month's total days, OR exceeds 31 in general
    if (
      Math.floor(day) > daysInMonth[Math.floor(month) - 1] ||
      Math.floor(day) > 31
    ) {
      document.querySelector(`#day + .error-msg`).innerHTML =
        "Must be a valid day";
    } else {
      document.querySelector(`#day + .error-msg`).innerHTML =
        "This field is required";
    }
    // Reveal error msg
    document.querySelector(`#day + .error-msg`).removeAttribute("hidden");
    // Set border & outline color on input field to red
    document.querySelector(`label[for="day"] + input`).style.outlineColor =
      "hsl(var(--light-red))";
    document.querySelector(`label[for="day"] + input`).style.borderColor =
      "hsl(var(--light-red))";
    // Set label text color to red
    document.querySelector(`label[for="day"]`).style.color =
      "hsl(var(--light-red))";
  } else {
    // Hide error msg
    document.querySelector(`#day + .error-msg`).setAttribute("hidden", "");
    // Set border & outline color on input field to default
    document.querySelector(`label[for="day"] + input`).style.outlineColor =
      "hsl(var(--purple))";
    document.querySelector(`label[for="day"] + input`).style.borderColor =
      "hsl(var(--light-grey))";
    // Set label text color to default
    document.querySelector(`label[for="day"]`).style.color =
      "hsl(var(--smokey-grey))";
  }

  // Validate month
  if (month === "" || Math.floor(month) > 12) {
    isValid = false;
    if (Math.floor(month) > 12) {
      document.querySelector(`#month + .error-msg`).innerHTML =
        "Must be a valid month";
    } else {
      document.querySelector(`#month + .error-msg`).innerHTML =
        "This field is required";
    }
    // Reveal error msg
    document.querySelector(`#month + .error-msg`).removeAttribute("hidden");
    // Set border & outline color on input field to red
    document.querySelector(`label[for="month"] + input`).style.outlineColor =
      "hsl(var(--light-red))";
    document.querySelector(`label[for="month"] + input`).style.borderColor =
      "hsl(var(--light-red))";
    // Set label text color to red
    document.querySelector(`label[for="month"]`).style.color =
      "hsl(var(--light-red))";
  } else {
    // Hide error msg
    document.querySelector(`#month + .error-msg`).setAttribute("hidden", "");
    // Set border & outline color on input field to default
    document.querySelector(`label[for="month"] + input`).style.outlineColor =
      "hsl(var(--purple))";
    document.querySelector(`label[for="month"] + input`).style.borderColor =
      "hsl(var(--light-grey))";
    // Set label text color to default
    document.querySelector(`label[for="month"]`).style.color =
      "hsl(var(--smokey-grey))";
  }

  // Validate year
  if (year === "" || year > currentYear) {
    isValid = false;
    // Compares the input year to current date, input cannot exceed current year
    if (year > currentYear) {
      document.querySelector(`#year + .error-msg`).innerHTML =
        "Must be in the past";
    } else {
      document.querySelector(`#year + .error-msg`).innerHTML =
        "This field is required";
    }
    // Reveal error msg
    document.querySelector(`#year + .error-msg`).removeAttribute("hidden");
    // Set border & outline color on input field to red
    document.querySelector(`label[for="year"] + input`).style.outlineColor =
      "hsl(var(--light-red))";
    document.querySelector(`label[for="year"] + input`).style.borderColor =
      "hsl(var(--light-red))";
    // Set label text color to red
    document.querySelector(`label[for="year"]`).style.color =
      "hsl(var(--light-red))";
  } else {
    // Hide error msg
    document.querySelector(`#year + .error-msg`).setAttribute("hidden", "");
    // Set border & outline color on input field to default
    document.querySelector(`label[for="year"] + input`).style.outlineColor =
      "hsl(var(--purple))";
    document.querySelector(`label[for="year"] + input`).style.borderColor =
      "hsl(var(--light-grey))";
    // Set label text color to default
    document.querySelector(`label[for="year"]`).style.color =
      "hsl(var(--smokey-grey))";
  }
  // Insert elements into HTML, rollback month and/or year if necessary
  if (isValid) {
    let remainingDays = currentDay - day;
    let remainingMonths = currentMonth - month;
    let remainingYears = currentYear - year;

    if (remainingDays < 0) {
      remainingMonths--;
      remainingDays += daysInMonth[currentMonth - 2]; // Adjust for zero-based indexing
    }

    if (remainingMonths < 0) {
      remainingYears--;
      remainingMonths += 12;
    }

    daysLived.innerHTML = `${remainingDays}`;
    monthsLived.innerHTML = `${remainingMonths}`;
    yearsLived.innerHTML = `${remainingYears}`;
  }
});
