// Function to save registration info to local storage with hashed and salted password
function saveRegistrationInfo() {
    var firstName = document.getElementById('regFirstName').value;
    var email = document.getElementById('regEmail').value;
    var password = document.getElementById('regPassword').value;

    // Hash and salt the password before storing it
    var salt = bcrypt.genSaltSync(10);
    var hashedPassword = bcrypt.hashSync(password, salt);

    // Check if email already exists in local storage
    var existingRegistrationInfoJSON = localStorage.getItem('registrationInfo');
    if (existingRegistrationInfoJSON) {
        var existingRegistrationInfo = JSON.parse(existingRegistrationInfoJSON);
        if (existingRegistrationInfo.email === email) {
            alert('Email already registered. Please use a different email.');
            return; // Stop registration process
        }
    }

    var registrationInfo = {
        firstName: firstName,
        email: email,
        password: hashedPassword, // Store the hashed and salted password
        salt: salt // Store the salt used for hashing
    };

    var registrationInfoJSON = JSON.stringify(registrationInfo);
    localStorage.setItem('registrationInfo', registrationInfoJSON);

    // Redirect to another page after saving registration info
    window.location.href = 'lms-dashboard.html?firstName=' + encodeURIComponent(firstName); // Pass firstName as a query parameter
}

// Function to save login info to local storage and redirect to another page if registration info exists
function saveLoginInfo() {
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    // Check if registration info exists in local storage
    var registrationInfoJSON = localStorage.getItem('registrationInfo');
    var registrationInfo = JSON.parse(registrationInfoJSON);

    if (registrationInfo && registrationInfo.email === email && bcrypt.compareSync(password, registrationInfo.password)) {
        // Save login info to local storage
        var loginInfo = {
            email: email,
            firstName: registrationInfo.firstName // Include first name in login info
        };

        var loginInfoJSON = JSON.stringify(loginInfo);
        localStorage.setItem('loginInfo', loginInfoJSON);

        // Redirect to login successful page
        window.location.href = 'lms-dashboard.html';
    } else {
        // Handle the situation where registration info doesn't exist or password doesn't match
        alert('Invalid email or password. Please try again.');
        // You can also redirect to a registration page or handle it in a different way
    }
}

function validateRegistration() {
    var firstName = document.getElementById('regFirstName').value;
    var email = document.getElementById('regEmail').value;
    var password = document.getElementById('regPassword').value;

    // Password complexity regex pattern
    var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (passwordPattern.test(password)) {
        // Password meets complexity requirements, proceed with registration
        saveRegistrationInfo();
    } else {
        // Password does not meet complexity requirements
        alert('Password must be at least 8 characters long and contain at least one letter, one number, and one special character.');
    }
}