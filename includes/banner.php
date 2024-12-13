<div class="container-fluid mt-5">
    <div class="row">
        <div class="col-12 col-lg-6" id="banner">
            <div class="banner_container">
                <h2>
                    Fractional <br>
                    GTM Leadership For SaaS Firms
                </h2>
                <p>
                    Unlock your SaaS Hypergrowth Potential Propelling from Launch to $1M ARR Scaling Predictably to $30M ARR
                </p>
                <div class="banner_btns">
                    <button class="btn blue">
                        Take a FREE Assesment
                    </button>
                    <button class="btn">
                        Learn More
                    </button>
                </div>
                <div class="owl-carousel banner-carousel">
                    <div class="item"><img src="../assets/images/banner_slider/1.png" alt="Image 1"></div>
                    <div class="item"><img src="../assets/images/banner_slider/2.png" alt="Image 2"></div>
                    <div class="item"><img src="../assets/images/banner_slider/3.png" alt="Image 3"></div>
                    <div class="item"><img src="../assets/images/banner_slider/4.png" alt="Image 4"></div>
                    <div class="item"><img src="../assets/images/banner_slider/5.png" alt="Image 5"></div>
                    <div class="item"><img src="../assets/images/banner_slider/6.png" alt="Image 6"></div>
                    <div class="item"><img src="../assets/images/banner_slider/7.png" alt="Image 7"></div>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-6">
            <canvas id="bannerChart" width="728" height="545"></canvas>
        </div>
    </div>
</div>

<script>
$(document).ready(function(){
    $(".banner-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('bannerChart').getContext('2d');

    const bannerChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Early Stage', '3-months', '6-months'],
            datasets: [{
                label: 'Volatility',
                data: [12, 19, 3, 5, 2, 3,],
                backgroundColor: 'rgba(39, 87, 255, 0.2)',
                borderColor: '#2757FF',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1000,
                easing: 'easeInOutBounce'
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

</script>

