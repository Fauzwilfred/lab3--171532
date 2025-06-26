document.getElementById("joinForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value;
  const dob = document.getElementById("dob").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const account = document.getElementById("account").value;

  // Validate name (only alphabets)
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(name)) {
    alert("Name should contain only alphabets and spaces.");
    return;
  }

  // Validate DOB (age >= 18)
  const birthDate = new Date(dob);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  if (age < 18) {
    alert("You must be at least 18 years old to join.");
    return;
  }

  // Validate strong password
  const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%*?&]).{8,}$/;
  if (!passwordRegex.test(password)) {
    alert("Password must have at least 8 characters including uppercase, lowercase, number, and special character.");
    return;
  }

  // Confirm password match
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // Final success message
  alert(You, ${name}, have successfully registered as a ${account}.);
  // Optionally: this.submit(); // Uncomment if you'd like to proceed with actual form submission
});