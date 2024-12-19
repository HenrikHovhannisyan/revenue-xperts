<?php include 'includes/header.php'; ?>
<div class="banner_section">
    <?php include 'includes/navbar.php'; ?>
    <main>
        <div class="container-fluid mb-5 mt-5">
            <div class="row contact">
                <div class="col-lg-5 info">
                    <h3>Contact</h3>
                    <h3>Information</h3>

                    <ul class="nav flex-column">
                        <li class="nav-item mb-2 d-flex align-items-center gap-2">
                            <img src="./assets/images/icons/call.png" class="img-fluid">
                            <a href="tel:(123)456789000" class="nav-link p-0 text-white">(123) 456789000</a>
                        </li>
                        <li class="nav-item mb-2 d-flex align-items-center gap-2">
                            <img src="./assets/images/icons/email.png" class="img-fluid">
                            <a href="mailto:info@bellrings.com" class="nav-link p-0 text-white">info@bellrings.com</a>
                        </li>
                        <li class="nav-item mb-2 d-flex align-items-center gap-2">
                            <img src="./assets/images/icons/location.png" class="img-fluid">
                            <p class="text-white mb-0">
                                1498w Fluton ste, STE <br>
                                2D Chicgo, IL 63867.
                            </p>
                        </li>
                    </ul>

                    <div class="social">
                        <a href="">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands fa-x-twitter"></i>
                        </a>
                        <a href="">
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
                <div class="col-lg-7 message">
                    <h3>Send us a message</h3>
                    <hr>
                    <form>
                        <div class="row">
                            <div class="mb-3 col-md-6">
                                <label for="name" class="form-label">Name*</label>
                                <input type="text" class="form-control border-0 border-bottom" id="name" required>
                            </div>
                            <div class="mb-3 col-md-6">
                                <label for="email" class="form-label">Email*</label>
                                <input type="email" class="form-control border-0 border-bottom" id="email">
                            </div>
                        </div>
                        <div class="row">
                            <div class="mb-3 col-md-6">
                                <label for="phone" class="form-label">Phone Number*</label>
                                <input type="text" class="form-control border-0 border-bottom" id="phone" required>
                            </div>
                            <div class="mb-3 col-md-6">
                                <label for="subject" class="form-label">Subject*</label>
                                <input type="text" class="form-control border-0 border-bottom" id="subject">
                            </div>
                        </div>
                        <div class="row">
                            <div class="mb-3 col">
                                <label for="message" class="form-label">Your Message*</label>
                                <textarea class="form-control border-0 border-bottom" rows="3" id="message" required></textarea>
                            </div>
                        </div>
                        <div class="col-12 text-end">
                            <button type="submit" class="btn btn-chat">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
</div>
<?php include 'includes/footer.php'; ?>
