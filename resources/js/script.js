$(document).ready(function () {
  /*sticky navigation */
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px",
    }
  );

  /*Scroll to plans */
  $(".js--scroll-to-plans").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  /*Scroll to featues */
  $(".js--scroll-to-features").click(function () {
    $("html,body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  /*Navigation Scroll */
  $(function () {
    $("a[href*=\\#]:not([href=\\#])").on("click", function () {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.substr(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
        return false;
      }
    });
  });

  /*Animation on scroll */
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "70%",
    }
  );

  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "70%",
    }
  );

  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    {
      offset: "70%",
    }
  );

  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animated pulse");
    },
    {
      offset: "70%",
    }
  );

  /*Mobile nav menu */
  $(".js--nav-icon").click(function () {
    const nav = $(".js--main-nav");
    const icon = $(".js--nav-icon ion-icon");

    nav.slideToggle(200);

    if (icon[0].name == "menu-outline") {
      icon[0].name = "close-outline";
    } else if (icon[0].name == "close-outline") {
      icon[0].name = "menu-outline";
    }
  });
});
