// Function to close the modal window for navigation.  
function closeMobile() {
  // Hide overlay
  $(".mobile__fade").fadeOut('200');
  // remove the active class from the mobile nav
  $(".mobile__navigation").removeClass("mobile__navigation--active");
  // remove the overflow restrictions from the website
  $("body, html").removeClass("overflow");
  // Swap the close icon for the regualr menu icon. 
  $(".mobile__icon").removeClass("mobile__icon--close");
}

// Function to open the modal window
function openMobile() {
  // Show overlay
  $(".mobile__fade").fadeIn('200');
  // add the active class from the mobile nav
  $(".mobile__navigation").addClass('mobile__navigation--active');
  // add the overflow restrictions from the website
  $("body, html").addClass('overflow');
  // Swap the menu icon for the close icon. 
  $(".mobile__icon").addClass("mobile__icon--close");
}

// GALLERY
var gallerySelect = function(parent) {
  var parentid = $('[data-parentid=' + parent + ']');
  selectedCal = $('[data-galid=' + parent + ']');

  // add active class to gallery poster to show which one is selected
  $('.item__gallery--poster').removeClass('active');
  parentid.addClass('active');
  // hide all
  $('.item__gallery').fadeOut(200);
// show siblings of selecte poster
  selectedCal.fadeIn(200);
}


// Show the hidden main navigation
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

var homeElementPer = function(percent, pos) {
  var per = (percent/100) * pos;
  return per;
}

var homeElementWidth = function(el, per, winWidth) {
  // set element width based on 35% of the window width
  $(el).css('width', homeElementPer(per, winWidth));
}

var homeElementHeight = function(el, per) {
  var width = $(el).width(),
      newHeight =  homeElementPer(per, width);
  // set element width based on 35% of the window width
  $(el).css('height', newHeight);
}

var homeElementBottom = function(el, per, winHeight) {
  $(el).css('bottom', homeElementPer(per, winHeight)); 
}

var homeElementSize = function(winWidth, winHeight) {
  // set woodFloor element width based on 35% of the window width
  homeElementWidth('#woodFloor', 52, winWidth);
  // set wood element to be 4% from bottom of window
  homeElementBottom("#woodFloor", 0, winHeight);
  // set height of element
  homeElementHeight("#woodFloor", 23);
  // set shade element width based on 15% of the window width
  homeElementWidth("#shade", 30, winWidth);
  // set shade to 24% from the bottom and 5% from the left
  homeElementBottom("#shade", 24, winHeight);
  // set height of element
  homeElementHeight("#shade", 56);
  // set tent element width based on 20% of window width
  homeElementWidth("#tent", 35, winWidth);
  // set tent to 20% from the bottom and 30% from the right
  homeElementBottom("#tent", 20, winHeight);
  // set height of element
  homeElementHeight("#tent", 47);
  // set booth element to be 40% of window width
  homeElementWidth("#booth", 48, winWidth);
  // set booth element to 0& from right and 1% from bottom of window
  homeElementBottom("#booth", 1, winHeight);
  // set height of element
  homeElementHeight("#booth", 39);
 }

// load different page content on click
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

var productFilter = function(value, currentFilters) {
  // conditional to determine of currentFilters is empty or not
  if (currentFilters) {
    currentFilters = currentFilters.push(value);
  }
  // Filter product categories
  // Show all products
  // On click, create an object with the categories selected
  // Add current clicked 
  // Print filter as link when added
  // When filter clicked, it removes it from the object and removes the producs associated with them.

}

$(document).ready(function() {

  TweenMax.to("article", 1, {minHeight: 800});
  var windowState = $(window).width(),
  windowHeight = $(window).height(),
  currentFilters = {}; 
  $('#hero').height(windowHeight,windowHeight);
  homeElementSize(windowState, windowHeight);

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

  // Slider for Gallery page
  $('.gallery__container').slick({
    centerMode: true,
    slidesToShow: 5,
    arrows: true,
    prevArrow: '<button type="button" class="btn-prev"></button>',
    nextArrow: '<button type="button" class="btn-next"></button>',
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });

  // Select individual gallery
  $('.item__gallery--poster').click(function() {
    var parentId = $(this).data('parentid');
    console.log('parentId', parentId);
    gallerySelect(parentId);
  })

  $('.home-page .logo').click(function() {
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

  // gallery
  
  $('div.item__gallery').featherlightGallery({
      previousIcon: '&#9664;',     /* Code that is used as previous icon */
      nextIcon: '&#9654;',         /* Code that is used as next icon */
      galleryFadeIn: 100,          /* fadeIn speed when slide is loaded */
      galleryFadeOut: 300          /* fadeOut speed before slide is loaded */
  });

});

$( window ).resize(function() {
  var windowState = $(window).width(),
  windowHeight = $(window).height();

  homeElementSize(windowState, windowHeight);
});
