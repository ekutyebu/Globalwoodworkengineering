<?php
session_start();
if (!isset($_SESSION['user'])) {
    header('Location: login.php');
    exit();
}
$pageTitle = "Cart - Global woodwork engineering";
include '../header.php';
?>
<section class="cart-section">
    <div class="menu-page-container">
        <h1 class="cart-title">Your Cart</h1>
        <div id="cart-items"></div>
        <div class="cart-total">
            <h3>Total: <span id="cart-total">0 FCFA</span></h3>
            <a href="payment.php" class="cta-button" id="checkout-btn">Place Order</a>
        </div>
    </div>
</section>
<script src="js/main.js"></script>
<?php include '../footer.php'; ?>
