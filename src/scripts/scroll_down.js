jQuery(function ($) {
  // scroll reset
  $.scrollTo(0);
  $("#link1").click(function () {
    $.scrollTo($("#simple"), 400);
  });
  $("#link2").click(function () {
    $.scrollTo($("#continous"), 400);
  });
  $("#link3").click(function () {
    $.scrollTo($("#perfect"), 400);
  });
  $("#link4").click(function () {
    $.scrollTo($("#perfect_continous"), 400);
  });
  $(".scroll_Up").click(function () {
    $.scrollTo($("body")), 400;
  });
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $(".scroll_Up").fadeIn();
  } else {
    $(".scroll_Up").fadeOut();
  }
});
