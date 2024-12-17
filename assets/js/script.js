$(document).ready(function () {
  const videoSlider = $(".video-slider");
  const testimonialSlider = $(".testimonial-slider");

  const videos = [
    { url: "https://www.youtube.com/embed/ReY-dIlZYgE" },
    { url: "https://www.youtube.com/embed/m6SOJlkN1zU" },
    { url: "https://www.youtube.com/embed/-5R-aLmZ9Ps" },
    { url: "https://www.youtube.com/embed/-sZqtdT-GVw" },
  ];

  const testimonials = [
    {
      name: "Azra Syed",
      position: "Sales Executive",
      text: "I was coached by Mo a few years ago and continue to take elements of his GTM playbook to help the various tech startups that I've consulted with since. With so many sales methodologies & GTM strategy frameworks available, I haven't come across anyone who understands the core B2B SaaS sales as well as Mo. One aspect of my team's sales performance that has significantly improved is the ability to produce accurate sales forecasts. This ensures we can make timely business decisions with the Board's full confidence.",
      image: "./assets/images/avatar.png",
    },
    {
      name: "Azra Syed",
      position: "Sales Executive",
      text: "I was coached by Mo a few years ago and continue to take elements of his GTM playbook to help the various tech startups that I've consulted with since. With so many sales methodologies & GTM strategy frameworks available, I haven't come across anyone who understands the core B2B SaaS sales as well as Mo. One aspect of my team's sales performance that has significantly improved is the ability to produce accurate sales forecasts. This ensures we can make timely business decisions with the Board's full confidence.",
      image: "./assets/images/avatar.png",
    },
    {
      name: "Azra Syed",
      position: "Sales Executive",
      text: "I was coached by Mo a few years ago and continue to take elements of his GTM playbook to help the various tech startups that I've consulted with since. With so many sales methodologies & GTM strategy frameworks available, I haven't come across anyone who understands the core B2B SaaS sales as well as Mo. One aspect of my team's sales performance that has significantly improved is the ability to produce accurate sales forecasts. This ensures we can make timely business decisions with the Board's full confidence.",
      image: "./assets/images/avatar.png",
    },
    {
      name: "Azra Syed",
      position: "Sales Executive",
      text: "I was coached by Mo a few years ago and continue to take elements of his GTM playbook to help the various tech startups that I've consulted with since. With so many sales methodologies & GTM strategy frameworks available, I haven't come across anyone who understands the core B2B SaaS sales as well as Mo. One aspect of my team's sales performance that has significantly improved is the ability to produce accurate sales forecasts. This ensures we can make timely business decisions with the Board's full confidence.",
      image: "./assets/images/avatar.png",
    },
  ];

  videos.forEach((video, index) => {
    const videoItem = `
        <div class="item">
          <div class="video-container">
            <iframe
              id="video-${index}"
              src="${video.url}?enablejsapi=1&rel=0&showinfo=0"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
            <div class="custom-play-btn" data-video-id="video-${index}">
              <img src="./assets/images/icons/play.png" alt="Play">
            </div>
          </div>
        </div>
      `;
    videoSlider.append(videoItem);
  });

  testimonials.forEach((testimonial) => {
    const testimonialItem = `
        <div class="item">
          <div class="testimonial-container">
              <p>"${testimonial.text}</p>
            <div class="testimonial-text">
              <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
              <div>
                  <h4>${testimonial.name}</h4>
                  <h5>${testimonial.position}</h5>
              </div>
            </div>
          </div>
        </div>
      `;
    testimonialSlider.append(testimonialItem);
  });

  videoSlider.owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });

  testimonialSlider.owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });

  $(".video-slider").on("click", ".custom-play-btn", function () {
    const iframeId = $(this).data("video-id");
    const iframe = document.getElementById(iframeId).contentWindow;

    iframe.postMessage('{"event":"command","func":"playVideo","args":""}', "*");

    $(this).fadeOut();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".nav-link");
  const activeSrc = "./assets/images/icons/left.png";
  const inactiveSrc = "./assets/images/icons/left-black.png";

  function updateTabIcons() {
    tabs.forEach((tab) => {
      const img = tab.querySelector("img");
      if (img) {
        if (tab.classList.contains("active")) {
          img.src = activeSrc;
        } else {
          img.src = inactiveSrc;
        }
      }
    });
  }

  updateTabIcons();

  tabs.forEach((tab) => {
    tab.addEventListener("shown.bs.tab", updateTabIcons);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".step");

  steps.forEach((step, index) => {
    step.addEventListener("click", () => {
      if (index === 0 || steps[index - 1].classList.contains("active")) {
        step.classList.add("active");
      }
    });
  });
});
