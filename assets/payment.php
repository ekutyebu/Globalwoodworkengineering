<?php $pageTitle = "Payment - Global woodwork engineering"; ?>
<?php include '../header.php'; ?>
<link rel="stylesheet" href="/Globalwoodworkengineering/assets/css/main.css"> <!-- Corrected path -->
<!-- WhatsApp Section -->
<section class="payment-section">
    <div class="menu-page-container">
        <h1 class="payment-title">Contact Us on WhatsApp</h1>
        <div id="whatsapp-link-container" style="margin-top: 20px;">
            <!-- WhatsApp link will be dynamically generated here -->
        </div>
    </div>
</section>

<script>
    document.addEventListener('DOMContentLoaded', function () {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const websiteLink = window.location.origin + '/Globalwoodworkengineering';
        const whatsappLinkContainer = document.getElementById('whatsapp-link-container');

        if (cart.length > 0) {
            let message = `Hello, I would like to purchase the following items from your website:\n\n`;
            cart.forEach(item => {
                message += `- ${item.title}: ${item.quantity} x ${item.price} FCFA = ${item.quantity * item.price} FCFA\n`;
            });
            const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            message += `\nTotal: ${total} FCFA\n\nWebsite: ${websiteLink}`;

            // Replace <YOUR_PHONE_NUMBER> with the actual phone number
            const whatsappLink = `https://wa.me/237 683434305?text=${encodeURIComponent(message)}`;
            whatsappLinkContainer.innerHTML = `
                <a href="${whatsappLink}" target="_blank" class="cta-button">Contact Us on WhatsApp</a>
            `;
        } else {
            whatsappLinkContainer.innerHTML = `<p>Your cart is empty. Add items to generate a WhatsApp message.</p>`;
        }
    });
</script>
<?php include '../footer.php'; ?>
