
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

function showMenu() {
    var logo = $('.logo a span');
    logo.toggleClass('hover');
    if ($(".desktop").is(":visible")) {
      $(".desktop.left").hide("slide", { direction: "right" }, 1000);
      $(".desktop.right").hide("slide", { direction: "left" }, 1000);
    } else {
      $(".desktop.left").show("slide", { direction: "right" }, 1000);
      $(".desktop.right").show("slide", { direction: "left" }, 1000);
    }
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

function pages(e, name, state) {
  // prevent default link functionality
  e.preventDefault;
  // variables for the nav link and the section
  var newState = !state,
      navLink = $('.' + name),
      articleName = $('article#' + name);
  // set the current items visibility to true and set all other section visibility to false
  $('article').data('visible', false);
  articleName.data('visible', true);
  // scroll if the state is true, scroll up if state is false
  if (!state) {
    console.log('state = false', state);
    $('article').removeClass('active');
    $('article#' + name).addClass('active');
    $('article#' + name).slideDown("slow");
  } else {
    console.log('state = true', state);
    $('article').removeClass('active');
    articleName.slideUp("slow");
  }
  // set the current nav click to selected
  $('.desktop a').removeClass('selected');
  navLink.addClass('selected');
}

$(document).ready(function() {
  var windowState = $(window).width();
  var windowHeight = $(window).height();
  $('#hero').height(windowHeight);

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

  $('.logo').click(function() {
    if (windowState > 900) {
      showMenu();
    }
  });

  $('.desktop li a').click(function(e) {
    var navName = $(this).prop('name'),
        artState = $('article#' + navName).data('visible');
    // function to set scroll down state
    pages(e, navName, artState);

  })

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

});
