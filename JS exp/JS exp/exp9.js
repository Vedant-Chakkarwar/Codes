function handleSubmit() {
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();
    const gender = document.getElementById("gender").value;
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();

    let errorMessages = "";

    // Regular expression for name (only allows letters and spaces)
    const namePattern = /^[a-zA-Z\s]+$/;

    // Validate name
    if (!name) {
        errorMessages += "Please enter a valid name.\n";
    } else if (!namePattern.test(name)) {
        errorMessages += "Name cannot contain special characters or numbers.\n";
    }

    // Validate address
    if (!address) {
        errorMessages += "Please enter an address.\n";
    }

    // Validate city
    if (!city) {
        errorMessages += "Please enter a city.\n";
    }

    // Validate state
    if (!state) {
        errorMessages += "Please enter a state.\n";
    }

    // Validate gender
    if (!gender) {
        errorMessages += "Please select a gender.\n";
    }

    // Validate mobile number
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobile) {
        errorMessages += "Please enter a mobile number.\n";
    } else if (!mobilePattern.test(mobile)) {
        errorMessages += "Invalid mobile number. It should contain exactly 10 digits.\n";
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errorMessages += "Please enter an email address.\n";
    } else if (!emailPattern.test(email)) {
        errorMessages += "Invalid email address.\nExample address: example@xyz.com\n";
    }

    // Display error messages if any
    if (errorMessages) {
        document.getElementById("result").textContent = errorMessages;
        document.getElementById("result").style.color = "red";
        return false;
    }

    // If no errors, store the data in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("address", address);
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
    localStorage.setItem("gender", gender);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("email", email);

    // Redirect to the display.html page
    window.location.href = "display.html";

    return false;
}
