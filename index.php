<?php
session_start();
$pageTitle = "Global woodwork engineering";
include 'header.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- ...existing code... -->
</head>
<body>
    <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Welcome to <span class="brand-name">Global woodwork engineering</span></h1>
            <p class="hero-subtitle">Experience woodwork at its finest</p>
            <a href="/Globalwoodworkengineering/assets/menu.php" class="cta-button">Get Products</a>
        </div>
    </section>
    <!-- About Section -->
    <section id="about" class="about">
        <div class="section-container">
            <h2 class="section-title">Our Story</h2>
            <div class="about-content">
                <img src="./assets/img/sofers/poe.jpg" alt="Restaurant interior" class="about-image">
                <div class="about-text">
                    <p>Welcome to <span class="brand-name">Global woodwork engineering</span>, where timeless craftsmanship meets elegant design. Our passionate team of artisans creates exceptional pieces using the finest materials, bringing you an unforgettable home experience.<p>
                    <p>Since our establishment in 2015, we have been committed to delivering outstanding service and innovative furniture that celebrates both traditional and contemporary styles.<p>
                </div>
            </div>
        </div>
    </section>
    <section id="menu" class="menu">
    <div class="section-container">
        <h2 class="section-title">Our Funitures</h2>
        <div class="menu-grid" id="home-menu-grid"></div>
        <div class="see-more-container">
            <a href="/Globalwoodworkengineering/assets/menu.php" class="cta-button see-more-btn">See More</a>
        </div>
    </div>
</section>

<script src="assets/js/main.js"></script>
<script src="assets/js/firebase.js"></script>
</body>
</html>
<?php include 'footer.php'; ?>
