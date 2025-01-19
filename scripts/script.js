document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    var usernameValid = /^[a-zA-Z0-9]{5,}$/.test(username); // Username should be at least 5 characters long and contain only letters and numbers
    var emailValid = /^[^@]+@\w+(\.\w+)+\w$/.test(email); // Simple email pattern check

    document.getElementById("usernameFeedback").style.display = usernameValid
      ? "none"
      : "block";
    document.getElementById("emailFeedback").style.display = emailValid
      ? "none"
      : "block";

    document.getElementById("usernameFeedback").textContent = usernameValid
      ? ""
      : "Username should be at least 5 characters long and contain only letters and numbers.";
    document.getElementById("emailFeedback").textContent = emailValid
      ? ""
      : "Please enter a valid email address.";

    var formValid = usernameValid && emailValid;

    if (formValid) {
      document.getElementById("registrationFeedback").textContent =
        "It was submitted!";
      document.getElementById("registrationFeedback").style.display = "block";
      // Here you can also handle the form submission, e.g. send data to the server
    } else {
      document.getElementById("registrationFeedback").textContent = "";
      document.getElementById("registrationFeedback").style.display = "none";
    }
  });
