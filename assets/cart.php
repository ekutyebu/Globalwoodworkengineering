<?php $pageTitle = "Cart - Global woodwork engineering"; ?>
<?php include '../header.php'; ?>
 <!-- Cart Section -->
 <section class="cart-section">
        <div class="menu-page-container">
            <h1 class="cart-title">Your Cart</h1>
            <div id="cart-items"></div>
            <div class="cart-total">
                <h3>Total: <span id="cart-total">0 FCFA</span></h3>
                <a href="payment.html" class="cta-button" id="checkout-btn">Checkout</a>
            </div>
        </div>
    </section>

    <script src="js/main.js"></script>
    <script src="assets/js/firebase.js"></script>

<?php include '../footer.php'; ?>
