
/**
* Function to close the slideout Menu
* Programatically clicks the toggle button to make sure triggers and states are set
*
* @return {void}
*/
function closeMobile() {
  $(".mobile__fade").fadeOut('200');
  $(".mobile__navigation").removeClass("mobile__navigation--active");
  $("body, html").removeClass("overflow");
  $(".mobile__icon").removeClass("mobile__icon--close");
}

/**
* Function to open the slideout Menu
* Programatically clicks the toggle button to make sure triggers and states are set
*
* @return {void}
*/
function openMobile() {
  $(".mobile__fade").fadeIn('200');
  $(".mobile__navigation").addClass('mobile__navigation--active');
  $("body, html").addClass('overflow');
  $(".mobile__icon").addClass("mobile__icon--close");
}

/**
* Function to open the slideout Menu
* Programatically clicks the toggle button to make sure triggers and states are set
*
* @return {void}
*/
function gallery(gal_index, gal_img) {
  var src = gal_img,
  selector = $('*[data-main="' + gal_index + '"]');
  selector.prop("src", src);
}

$(document).ready(function() {
  var getHeight = $(window).height();
  $('section').height(getHeight);
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // hero click goes to order page
  $('#hero').click(function() {
    window.location.href = 'http://www.roadhouseamps.com/order.php';
  });

  // Toggle the mobile menu
    $('.mobile__icon').click(function () {
        var overflow = $('body').hasClass('overflow');
        if (overflow === true) {
            closeMobile();
        } else if (overflow === false)  {
            openMobile();
        }
    });
    // Prevent the scrolling from bubbling up the chain
    $('.mobile__nav--container').on('scroll touchmove mousewheel', function (e) {
        return e.preventDefault();
    });

    $('.mobile__navigation a').click(function() {
        closeMobile();
    });

    $('.gallery--thumb').click(function() {
        var gal_img = $(this).attr("src");
        var gal_index = $(this).closest('[data-index]').attr('data-index');
        gallery(gal_index, gal_img);
    });

    // Find all YouTube videos
    var $allVideos = $("#homevid"),

    // The element that is fluid width
    $fluidEl = $("body");
    // Figure out and save aspect ratio for each video
    $allVideos.each(function() {
      $(this)
        .data('aspectRatio', this.height / this.width)

        // and remove the hard coded width/height
        .removeAttr('height')
        .removeAttr('width');
    });

  // When the window is resized
  $(window).resize(function() {
    var newHeight = $fluidEl.height(),
    newWidth = $fluidEl.width(),
    padWidth;
    if (newWidth < 700) {
      padWidth = newWidth - 60
    } else {
      padWidth = 660;
    }
    // Resize all videos according to their own aspect ratio
    $allVideos.each(function() {
      var $el = $(this);
      $el.width(padWidth).height(padWidth * $el.data('aspectRatio'));
    });
    $('section').height(newHeight);
  // Kick off one resize to fix all videos on page load
  }).resize();

});
