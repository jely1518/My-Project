$( function() {
var defaultPos = -0, offsetPos=43, bgpos;
$(".dropdown-li").hover( 
  function() {
    bgpos = $(this).children("a").attr('rev');
    bgpos = bgpos * offsetPos;
    bgpos = defaultPos - bgpos;
    $(this).parent('ul').css('background-position', '-0px ' + bgpos + 'px');
    $(this).children(".submenu-container").css({'visibility': 'visible'});
  }, function() {
    $(this).children(".submenu-container").css("visibility", "hidden");
    $(this).parent('ul').css('background-position', '-0px -0px');
  }
);

});