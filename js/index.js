$(document).ready(function() {
  function changeCss1() {
    const rgba1 = "rgba(0,0,0,0)";
    const rgba2 = "rgba(0,0,0,0.2)";
    const element1 = document.querySelector("nav");
    const element2 = document.querySelector("#projects");
    const position = element2.getBoundingClientRect();
    if (position.y < 100 && position.y > -position.height + 50) {
      element1.style.background = rgba2;
    } else {
      element1.style.background = rgba1;
    }
    //   ? (element1.style.background = rgba2)
    //   : (element1.style.background = rgba1);
  }

  window.addEventListener("scroll", changeCss1, false);

  $(document).on("click", "#will", function() {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".container").offset().top
      },
      800
    );
  });

  $(document).on("click", "#about-link", function() {
    event.preventDefault();

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#about").offset().top
      },
      800
    );
  });

  $(document).on("click", "#projects-link", function() {
    event.preventDefault();

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#projects").offset().top
      },
      800
    );
  });

  $(document).on("click", "#contact-link", function() {
    event.preventDefault();

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#contact").offset().top
      },
      800
    );
  });

  $(document).on("click", "#footer-link", function() {
    event.preventDefault();

    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $(".container").offset().top
      },
      1400
    );
  });
});
