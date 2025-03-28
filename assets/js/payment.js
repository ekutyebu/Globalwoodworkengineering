document.addEventListener('DOMContentLoaded', function () {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const paymentSummary = document.getElementById('payment-summary');
    const paymentForm = document.getElementById('payment-form');
    const successMessage = document.getElementById('success-message');

    // Render Payment Summary
    function renderSummary() {
        paymentSummary.innerHTML = '<h3>Order Summary</h3>';
        if (cart.length === 0) {
            paymentSummary.innerHTML += '<p>Your cart is empty.</p>';
        } else {
            cart.forEach(item => {
                paymentSummary.innerHTML += `
                    <p>${item.title} x ${item.quantity} - ${item.price * item.quantity} FCFA</p>
                `;
            });
            const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            paymentSummary.innerHTML += `<h4>Total: ${total} FCFA</h4>`;
        }
    }

    // Simulate Email Sending (Client-side only, no real email)
    function sendEmail(email, cartItems) {
        console.log(`Simulated email sent to ${email}: Payment successful for items:`, cartItems);
        // In a real app, you'd use a server-side API like EmailJS or a backend service
        // Example with EmailJS (requires setup):
        // emailjs.send('service_id', 'template_id', { to_email: email, items: JSON.stringify(cartItems) });
    }

    // Handle Payment Form Submission
    paymentForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (cart.length === 0) {
            alert('Your cart is empty. Add items before checking out.');
            return;
        }

        const email = document.getElementById('email').value;
        const purchasedItems = [...cart]; // Save cart before clearing

        // Simulate payment processing (2-second delay)
        paymentForm.style.display = 'none';
        paymentSummary.innerHTML = '<p>Processing payment...</p>';
        setTimeout(() => {
            // Clear cart
            localStorage.setItem('cart', JSON.stringify([]));
            cart.length = 0; // Update local cart array

            // Show success message
            successMessage.style.display = 'block';
            paymentSummary.style.display = 'none';

            // Simulate email
            sendEmail(email, purchasedItems);

            // Redirect to cart page after 3 seconds
            setTimeout(() => {
                window.location.href = 'cart.html';
            }, 3000);
        }, 2000);
    });

    // Update cart count in header
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    renderSummary();
});