//toggle accord icons
$("#projects").on("hide.bs.collapse show.bs.collapse", e => {
    $(e.target)
      .prev()
      .find("i:last-child")
      .toggleClass("fa-minus fa-plus");
  });
//animate accord
  $("#projects").on("shown.bs.collapse", e => {
    $("html, body").animate(
      {
        scrollTop: $(e.target)
          .prev()
          .offset().top
      },
      400
    );
  });