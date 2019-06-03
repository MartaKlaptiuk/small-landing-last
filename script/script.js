$(window).load(function() {
  var theWindow = $(window),
    $bg = $("#bg"),
    aspectRatio = $bg.width() / $bg.height();
  function resizeBg() {
    if (theWindow.width() / theWindow.height() < aspectRatio) {
      $bg.removeClass().addClass("bgheight");
    } else {
      $bg.removeClass().addClass("bgwidth");
    }
  }
  theWindow
    .resize(function() {
      resizeBg();
    })
    .trigger("resize");
});

$(window).load(function() {
  var theWindow = $(window),
    $bggame = $("#bg-game"),
    aspectRatio = $bggame.width() / $bggame.height();
  function resizeBg() {
    if (theWindow.width() / theWindow.height() < aspectRatio) {
      $bggame.removeClass().addClass("bgheight");
    } else {
      $bggame.removeClass().addClass("bgwidth");
    }
  }
  theWindow
    .resize(function() {
      resizeBg();
    })
    .trigger("resize");
});
