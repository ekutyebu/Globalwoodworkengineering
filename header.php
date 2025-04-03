<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start(); // Ensure the session is started
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pageTitle ?? 'Global woodwork engineering'; ?></title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/Globalwoodworkengineering/assets/css/main.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&family=Pacifico&display=swap" rel="stylesheet">
</head>
<body>
    <header class="header">
        <nav class="nav-container">
            <a href="./index.php" class="logo">
                <img src="/Globalwoodworkengineering/assets/img/logo.jpg" alt="Logo" class="logo-img">
                <span class="logo-text">GWE</span>
            </a>
            <button class="hamburger" aria-label="Toggle menu">
                <i class="fas fa-bars"></i>
            </button>
            <ul class="nav-menu">
                <li class="nav-item"><a href="/Globalwoodworkengineering/index.php" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="/Globalwoodworkengineering/assets/about.php" class="nav-link">About</a></li>
                <li class="nav-item"><a href="/Globalwoodworkengineering/assets/menu.php" class="nav-link">Products</a></li>
                <li class="nav-item"><a href="/Globalwoodworkengineering/assets/contact.php" class="nav-link">Contact</a></li>
                <?php if (isset($_SESSION['user'])): ?>
                    <?php if ($_SESSION['user'] === 'adminuser'): ?> <!-- Show Admin Dashboard only for admin -->
                        <li class="nav-item"><a href="/Globalwoodworkengineering/admin/dashboard.php" class="nav-link">Admin Dashboard</a></li>
                    <?php endif; ?>
                    <li class="nav-item"><a href="/Globalwoodworkengineering/assets/logout.php" class="nav-link">Logout</a></li>
                <?php else: ?>
                    <li class="nav-item"><a href="/Globalwoodworkengineering/assets/login.php" class="nav-link">Login</a></li>
                    <li class="nav-item"><a href="/Globalwoodworkengineering/assets/signup.php" class="nav-link">Sign Up</a></li>
                <?php endif; ?>
                <li class="nav-item">
                    <a href="/Globalwoodworkengineering/assets/cart.php" class="nav-link cart-icon">
                        <i class="fas fa-shopping-cart"></i>
                        <span class="cart-count">0</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div class="nav-overlay"></div>
    </header>
</body>
</html>
