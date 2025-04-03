<?php
session_start();
if (isset($_SESSION['user'])) {
    header('Location: /Globalwoodworkengineering/index.php');
    exit();
}
$pageTitle = "Login - Global woodwork engineering";
include '../header.php';
?>
<style>
    .login-section {
        padding-top: 100px; /* Prevent header overlap */
    }
</style>
<section class="login-section">
    <div class="menu-page-container">
        <h1 class="login-title">Login</h1>
        <form action="process_login.php" method="POST" class="login-form">
            <div class="form-group">
                <label for="identifier" class="form-label">Email or Username</label>
                <input type="text" id="identifier" name="identifier" class="form-input" required>
            </div>
            <div class="form-group">
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" name="password" class="form-input" required>
            </div>
            <button type="submit" class="cta-button">Login</button>
        </form>
        <p>Don't have an account? <a href="signup.php">Sign up</a></p>
    </div>
</section>
<script>
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('.login-form');
        const passwordInput = document.getElementById('password');
        const passwordFeedback = document.createElement('p');
        passwordFeedback.style.color = 'red';
        passwordInput.parentNode.appendChild(passwordFeedback);

        passwordInput.addEventListener('input', function () {
            const password = passwordInput.value;
            if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(password)) {
                passwordFeedback.textContent = 'Strong password';
                passwordFeedback.style.color = 'green';
            } else {
                passwordFeedback.textContent = 'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a special character';
                passwordFeedback.style.color = 'red';
            }
        });

        form.addEventListener('submit', function (e) {
            const password = passwordInput.value;
            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(password)) {
                alert('Password is not strong enough');
                e.preventDefault();
            }
        });
    });
</script>
<?php include '../footer.php'; ?>
