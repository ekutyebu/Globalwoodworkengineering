<?php
session_start();
if (isset($_SESSION['user'])) {
    header('Location: /Globalwoodworkengineering/index.php');
    exit();
}
$pageTitle = "Sign Up - Global woodwork engineering";
include '../header.php';
?>
<style>
    .signup-section {
        padding-top: 100px; /* Prevent header overlap */
    }
    .error-message {
        color: red;
        margin-bottom: 1rem;
    }
</style>
<section class="signup-section">
    <div class="menu-page-container">
        <h1 class="signup-title">Sign Up</h1>
        <?php if (isset($_GET['error'])): ?>
            <p class="error-message"><?php echo htmlspecialchars($_GET['error']); ?></p>
        <?php endif; ?>
        <form action="process_signup.php" method="POST" class="signup-form">
            <div class="form-group">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="email" name="email" class="form-input" required>
            </div>
            <div class="form-group">
                <label for="username" class="form-label">Username</label>
                <input type="text" id="username" name="username" class="form-input" required>
            </div>
            <div class="form-group">
                <label for="password" class="form-label">Password</label>
                <input type="password" id="password" name="password" class="form-input" required>
            </div>
            <button type="submit" class="cta-button">Sign Up</button>
        </form>
        <p>Already have an account? <a href="login.php">Login</a></p>
    </div>
</section>
<script>
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('.signup-form');
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
            const username = document.getElementById('username').value;
            if (username.length < 6) {
                alert('Username must be at least 6 characters long');
                e.preventDefault();
            }
        });
    });
</script>
<?php include '../footer.php'; ?>
