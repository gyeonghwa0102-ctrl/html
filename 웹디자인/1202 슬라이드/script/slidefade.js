$(function () {
  $(".slide li:gt(0)").fadeOut();
  function nextani() {
    $(".slide li:first")
      .fadeOut(500)
      .next()
      .fadeIn(500)
      .end()
      .attendTo(".slide");
  }
  setInterval(function () {
    nextani();
  }, 2000);
});
