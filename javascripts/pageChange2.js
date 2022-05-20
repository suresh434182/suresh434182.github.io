$(document).ready(function (e) {
  function showView(viewName) {
    $(".views").hide();
    $("#" + viewName).show();
  }

  $("[data-launch-views]").click(function (e) {
    e.preventDefault();
    var viewName = $(this).attr("data-launch-views");
    showView(viewName);
  });
});
