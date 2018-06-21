$(document).ready(function() {
  $(".toggle").click(function() {
    $(this).toggleClass("load-complete");
    $(this).children(".checkmark").toggle();

    if ($(this).hasClass("load-complete")) {
      $(this).children("input").attr("checked", true);
    } else {
      $(this).children("input").attr("checked", false);
    }
  });

  $("#check-all").click(function() {
    $(this).toggleClass("load-complete");
    $(this).children(".checkmark").toggle();

    if ($(this).hasClass("load-complete")) {
      $('.toggle').removeClass("load-complete");
      $(".checkmark").hide();
      $(".toggle input").attr("checked", false);
    } else {
      $('.toggle').addClass("load-complete");
      $(".checkmark").show();
      $(".toggle input").attr("checked", true);
    }
  });
});
