$(function() {

  // Cache the window object
  let $window = $(window);

  // Parallax background effect
  $('section[data-type="background"]').each(function() {
    let $bgobj = $(this); // assinging the object
    $window.scroll(function(){
      // scroll the background at var speed
      // the yPos is a negative value because we're scrolling it up
      let yPos = -($window.scrollTop() / $bgobj.data('speed'));
      // put together our final background psotion
      let coords = '50% ' + yPos + 'px';
      // Move the background
      $bgobj.css({ backgroundPosition: coords });
    }); // end window scroll
  });

});