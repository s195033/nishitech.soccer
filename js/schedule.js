$(function () {
  $("#schedule__tabnav li").click(function () {
    var index = $(this).index();
    $(this).siblings().removeClass("active").end().addClass("active");
    $("#schedule__content .list_group").hide().eq(index).stop().fadeIn(200);
  });

  function setMont() {
    var montHead = "";
    $("#schedule__tabnav .schedule_day_item").each(function () {
      var $m = $(this).find(".year_mont_in");

      var mont = $m.text().replace(/(^\s+)|(\s+$)/g, "");
      if (montHead != mont) {
        $m.fadeTo(1, 1);
        montHead = mont;
      }
    });

    $(".schedule_day_item").eq(0).addClass("active");
  }
  setMont();
});
