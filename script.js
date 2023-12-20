$("document").ready(() => {
  $("#ig").css("margin-right", "12px");
  $("#ig").css("cursor", "pointer");
  $("#ig").mouseenter(() => {
    $("#ig path").css("fill", "#fff");
  });
  $("#ig").mouseleave(() => {
    $("#ig").css("fill", "black");
  });
  $("#ig").click(() => {
    let igURL = "https://www.instagram.com/seedinfotechltd/";
    window.open(igURL, "_blank");
  });

  $("#fb").css("cursor", "pointer");
  $("#fb").css("margin-right", "12px");
  $("#fb").mouseenter(() => {
    $("#fb").css("fill", "#fff");
  });
  $("#fb").mouseleave(() => {
    $("#fb").css("fill", "black");
  });
  $("#fb").click(() => {
    let fbURL = "https://www.facebook.com/SEEDInfotechOfficial/";
    window.open(fbURL, "_blank");
  });

  $("#ln").css("cursor", "pointer");
  $("#ln").css("margin-right", "12px");
  $("#ig").mouseenter(() => {
    $("#ig").css("fill", "#fff");
  });
  $("#ig").mouseleave(() => {
    $("#ig").css("fill", "black");
  });
  $("#ln").click(() => {
    let lnURL = "https://in.linkedin.com/company/seed-infotech";
    window.open(lnURL, "_blank");
  });

  $("#play").click(() => {
    var audio = $(".song")[0];
    audio.play();
    $(".bannar").addClass("bannar-come");
    $(".bannar").setTimeout(() => {
      $(".bannar").fadeOut(6000).delay(5000);
    }, 15000);
  });
});
