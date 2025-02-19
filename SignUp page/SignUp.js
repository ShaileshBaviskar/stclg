document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.querySelector('form');
    const loginCheckbox = document.querySelector('.login-text input[type="checkbox"]');
    const loginLink = document.querySelector('.login-text a');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const rememberMeCheckbox = document.querySelector('.flex.items-center input[type="checkbox"]');
    const signupButton = document.querySelector('.signup-btn');
    const forgotPasswordLink = document.querySelector('.flex.items-center a');

    // Check if user is already logged in
    if (localStorage.getItem('loggedInUser')) {
        alert('You are already logged in!');
        window.location.href = 'dashboard.html'; // Redirect to dashboard or home page
    }

    // Toggle between Sign Up and Login forms
    loginCheckbox.addEventListener('change', function () {
        if (this.checked) {
            signupButton.textContent = 'Login';
            document.querySelector('.login-text span').textContent = "Don't have an account?";
            loginLink.textContent = 'Sign Up';
        } else {
            signupButton.textContent = 'Sign Up';
            document.querySelector('.login-text span').textContent = 'Already have an account?';
            loginLink.textContent = 'Login';
        }
    });

    // Handle form submission
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        if (loginCheckbox.checked) {
            // Login logic
            const user = JSON.parse(localStorage.getItem(email));
            if (user && user.password === password) {
                alert('Login successful!');
                if (rememberMeCheckbox.checked) {
                    localStorage.setItem('loggedInUser', email);
                }
                window.location.href = 'dashboard.html'; // Redirect to dashboard or home page
            } else {
                alert('Invalid email or password!');
            }
        } else {
            // Signup logic
            if (localStorage.getItem(email)) {
                alert('User already exists!');
            } else {
                const user = { email, password };
                localStorage.setItem(email, JSON.stringify(user));
                alert('Signup successful! Please login.');
                loginCheckbox.checked = true;
                signupButton.textContent = 'Login';
                document.querySelector('.login-text span').textContent = "Don't have an account?";
                loginLink.textContent = 'Sign Up';
            }
        }
    });

    // Forgot password logic
    forgotPasswordLink.addEventListener('click', function (e) {
        e.preventDefault();
        const email = prompt('Please enter your email address:');
        if (email) {
            const user = JSON.parse(localStorage.getItem(email));
            if (user) {
                alert(`Your password is: ${user.password}`);
            } else {
                alert('No user found with that email address!');
            }
        }
    });
    
});