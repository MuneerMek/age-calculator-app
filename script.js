const form = document.querySelector("#age-calc");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true; // Reset validity on each submit

  const day = document.querySelector(`input[name="day"]`).value.trim();
  const month = document.querySelector(`input[name="month"]`).value.trim();
  const year = document.querySelector(`input[name="year"]`).value.trim();

  // Validate day
  if (day === "") {
    isValid = false;
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
  if (month === "") {
    isValid = false;
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
  if (month === "") {
    isValid = false;
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

  if (isValid) {
    form.reset(); // Reset form fields
  }
});
