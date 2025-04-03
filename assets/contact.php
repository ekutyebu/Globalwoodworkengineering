<?php $pageTitle = "Contact Us - Global woodwork engineering"; ?>
<?php include '../header.php'; ?>
<!-- Contact Hero Section -->
<section class="contact-hero">
        <h1 class="contact-hero-title">Contact Us</h1>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
        <div class="contact-container">
            <div class="contact-info">
                <h3>Get in Touch</h3>
                <div class="contact-detail">
                    <i class="fas fa-map-marker-alt contact-icon"></i>
                    <p>ARI<br>Douala, Cameroon</p>
                </div>
                <div class="contact-detail">
                    <i class="fas fa-phone contact-icon"></i>
                    <p>677658626 and 694859376</p>
                </div>
                <div class="contact-detail">
                    <i class="fas fa-envelope contact-icon"></i>
                    <p>cheuassafrançois@gmail.com</p>
                </div>
                <div class="contact-detail">
                    <i class="fas fa-clock contact-icon"></i>
                    <p>We are working 24/6</p>
                </div>
            </div>
            <div class="contact-form">
                <h3>Send Us a Message</h3>
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Your Email" required>
                    </div>
                    <div class="form-group">
                        <input type="tel" class="form-control" placeholder="Phone Number">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Subject">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" class="submit-button">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
        <div class="map-container">
            <div class="map-placeholder">
                <img src="./img/map.png" alt="XQRM+M98, Unnamed Road, Douala" class="map-img">
            </div>
        </div>
    </section>


    <script src="js/main.js"></script>
    <script src="assets/js/firebase.js"></script>
    
<?php include '../footer.php'; ?>
