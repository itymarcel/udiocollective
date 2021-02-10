$(function() {

  var image_slideshow_countdown_seconds = 5;
  var header_image_container = $('.header-image-container');
  var image_count = header_image_container.children().length;
  var current_image = 0;


  var switch_image = function(){
    current_image++;
    if(current_image > image_count - 1) {
      current_image = 0;
    }
    header_image_container.css('left', -current_image * 100 + "%");
    setTimeout(switch_image, image_slideshow_countdown_seconds*1000);
  };
  setTimeout(switch_image, image_slideshow_countdown_seconds*1000);


  /* cube shit */
  var scene = $('.scene');
  var cube = $(".cube");
  var cube_top = parseInt(cube.css('top'));
  var cube_top_percentage = cube_top/window.innerHeight*100;
  var cube_new_top = 0;

  var scene_perspective_initial = parseInt(scene.css('perspective'));
  var add_perspective = 0;
  var scene_perspective = 0;
  document.addEventListener('scroll', (evt) => {
    var windowOffset = Math.abs(window.pageYOffset);
    add_perspective = windowOffset / (windowOffset + 200) * (scene_perspective_initial-10);
    scene_perspective = scene_perspective_initial - add_perspective;
    scene.css('perspective', scene_perspective + "px");

    cube_new_top = cube_top_percentage + (windowOffset / (windowOffset + 1000) * 18);
    //cube.css('top', cube_new_top+"%");
  }, {
    capture: true,
    passive: true
  });


  $('.release').on('touchend', function(e) {
    if($(e.target).hasClass('release-link')) {
      console.log('return true');
      return;
    }
    $(this).toggleClass('touched');
  });

});