$(document).ready(function () {
  $(".navbar-nav li a").click(function (e) {
    $(".navbar-nav li a.active").removeClass("active");
    $(this).addClass("active");
    // e.preventDefault();
  });

  $(".portfolio button").click(function (e) {
    $(".portfolio button.activeBtn").removeClass("activeBtn");
    $(this).addClass("activeBtn");
    // e.preventDefault();
  });

  $(".blogs button").click(function (e) {
    $(".blogs button.blogActiveBtn").removeClass("blogActiveBtn");
    $(this).addClass("blogActiveBtn");
    e.preventDefault();
  });
});
