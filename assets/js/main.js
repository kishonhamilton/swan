/* ----------------------------------
	@ Peachy
	@ Version: 1.0
	@ Author: DynamicWebLab
	@Email:
-------------------------------------*/
"use strict";

//Make sure jQuery has been loaded before main.js
if (typeof jQuery === "undefined") {
  throw new Error("Peachy requires jQuery to work on!");
}

/* peachyObj
 *
 * @type Object
 * @description $.peachyObj Will hold options and functions.
 */
$.peachyObj = {};

/* ---------------------
 * /// Peachy Options ///
 * ---------------------
 * You can enable disable functions here
 */
$.peachyObj.options = {

};


/* topMenu()
 * ==========
 * Adds Menu functionality.
 *
 * @type Function
 * @usage: $.peachyObj.topMenu()
 */
$.peachyObj.TopMenu = function() {

  var $dropdown = $(".dropdown-button");
  var $nav = $(".button-collapse");
  //sidenav for mobile
  if ($nav.length) {
    $nav.sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) {},
      onClose: function(el) {},
    });

  }
  //dropdown activate
  if ($dropdown.length) {
    $dropdown.dropdown();
  }

  // grab the initial top offset of the navigation
    var stickyNavTop = $('.header-nav-section').offset().top;

    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function(){

      var scrollTop = $(window).scrollTop(); // our current vertical position from the top

      // if we've scrolled more than the navigation, change its position to fixed to stick to top,
      // otherwise change it back to relative
      if (scrollTop > stickyNavTop) {
          $('.header-nav-section').addClass('sticky');
      } else {
          $('.header-nav-section').removeClass('sticky');
      }
  };

  stickyNav();
  // and run it again every time you scroll
  $(window).scroll(function() {
    stickyNav();
  });


};


/* TestimonialCarousel()
 * ==========
 * Adds Carousel functionality for testimonial.
 *
 * @type Function
 * @usage: $.peachyObj.TestimonialCarousel('#testimonial-carousel')
 */
$.peachyObj.TestimonialCarousel = function(selector) {

  if ($(selector).length) {
    $(selector).owlCarousel({
      dots: false,
      nav: true,
      loop: true,
      smartSpeed: 700,
      items: 2,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
          },
          600:{
              items:1,
          },
          800:{
              items:2,
          }
      },
      navText: ['<span class="btn-floating waves-effect waves-light z-depth-2"><i class="material-icons">chevron_left</i></span>', '<span class="btn-floating waves-effect waves-light z-depth-2"><i class="material-icons">chevron_right</i></span>']
    });
  }


};


/* HeroSlider()
 * ==========
 * Adds Carousel functionality for testimonial.
 *
 * @type Function
 * @usage: $.peachyObj.HeroSlider(selector)
 */
$.peachyObj.HeroSlider = function(selector) {

  if ($(selector).length) {

    $(selector).owlCarousel({
      dots: false,
      nav: false,
      loop: true,
      smartSpeed: 700,
      items: 1,
      autoplay: true,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      lazyLoad: true
    });
  }


};


/* LogoCarousel()
 * ==========
 * Adds Carousel functionality for logos.
 *
 * @type Function
 * @usage: $.peachyObj.LogoCarousel(selector)
 */
$.peachyObj.LogoCarousel = function(selector) {

  if ($(selector).length) {
    var owl = $(selector);
    owl.owlCarousel({
        items:5,
        dots:false,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
          0:{
              items:2,
          },
          600:{
              items:4,
          },
          1000:{
              items:5,
          }
        }
    });
    }


};


/* TeamCarousel()
 * ==========
 * Adds Carousel functionality for team.
 *
 * @type Function
 * @usage: $.peachyObj.TeamCarousel(selector)
 */
$.peachyObj.TeamCarousel = function(selector) {

  if ($(selector).length) {
    var owl = $(selector);
    owl.owlCarousel({
        items:3,
        dots:false,
        nav: true,
        loop:true,
        margin:0,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
          0:{
              items:1,
          },
          600:{
              items:2,
          },
          1000:{
              items:3,
          }
        },
        navText: ['<span class="btn-floating waves-effect waves-light z-depth-2"><i class="material-icons">chevron_left</i></span>', '<span class="btn-floating waves-effect waves-light z-depth-2"><i class="material-icons">chevron_right</i></span>']
    });
    }


};

/* BgImage()
 * ==========
 * Add Background Image for hero section
 *
 * @type Function
 * @usage: $.peachyObj.BgImage(selector)
 */
$.peachyObj.BgImage = function(selector) {

  if ($(selector).length) {

    $(selector).each(function() {

      var image = $(this).data('bg');

      if(image){
        $(this).css({
          'background-image': 'url(' + image + ')',
          'background-size': 'cover',
          'background-repeat': 'no-repeat',
          'background-position': 'center center'
        });
      }

    });
  }


};


/* VideoBg()
 * ==========
 * Add Youtube background for hero section
 * https://github.com/pupunzi/jquery.mb.YTPlayer
 * @type Function
 * @usage: $.peachyObj.VideoBg(selector,videoid)
 */
$.peachyObj.VideoBg = function(selector,videoid) {

  if ($(selector).length) {

    $(selector).YTPlayer({
      fitToBackground: true,
      videoId: videoid //Set Your Youtube Video ID
    });
  }


};


/* SkillBar()
 * ==========
 * Animated Skill bar
 *
 * @type Function
 * @usage: $.peachyObj.SkillBar(selector)
 */
$.peachyObj.SkillBar = function(selector) {

  if ($(selector).length) {

    $(window).on('scroll', function () {
        $(selector).each(function () {
            var bottom_of_object =
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window =
            $(window).scrollTop() + $(window).height();
            var percent = $(this).attr('data-percent');
            if(bottom_of_window > bottom_of_object) {
                $(this).find('.skillbar-bar').css({
                  width : percent
                });
            }
        });
    });

  }

};



/* Portfolio()
 * ==========
 * Isotop filter for Portfolio
 *
 * @type Function
 * @usage: $.peachyObj.Portfolio(selector)
 */
$.peachyObj.Portfolio = function(selector) {

  if ($(selector).length) {

    var $container = $('.isotope_items');

    $container.imagesLoaded().progress( function() {
      $container.isotope();
    });

    $('.portfolio-filter li').on("click", function() {
      $(".portfolio-filter li").removeClass("active");
      $(this).addClass("active");
      var selector = $(this).attr('data-filter');
      $(".isotope_items").isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        }
      });
      return false;
    });

  }

};

/* MagnificPopup()
 * ==========
 * Magnific Popup for image, video and inline
 *
 * @type Function
 * @usage: $.peachyObj.MagnificPopup(selector)
 */
$.peachyObj.MagnificPopup = function() {

  $('.default-popup').magnificPopup({
    type: 'image',
    removalDelay: 400,
    zoom: {
      enabled: true,
      duration: 300
    }
  });

};
/* counter()
 * ==========
 * counterUp for Fun Fact
 *
 * @type selector
 * @usage: $.peachyObj.counter(selector)
 */
$.peachyObj.Counter = function(selector) {


if ($(selector).length) {
   $(selector).counterUp({
      time: 3000,
    });
}
};


/* Particles()
 * ==========
 * Particles animation library
 *
 * @type Function
 * @usage: $.peachyObj.Particles(selector)
 */
$.peachyObj.Particles = function(selector) {

  if ($(selector).length) {

    particlesJS('particles',

      {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1.5,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true,
        "config_demo": {
          "hide_card": false,
          "background_color": "#b61924",
          "background_image": "",
          "background_position": "50% 50%",
          "background_repeat": "no-repeat",
          "background_size": "cover"
        }
      }

    );
  }

};


/* Typed()
 * ==========
 * Typed animation
 *
 * @type Function
 * @usage: $.peachyObj.Typed(selector)
 */
$.peachyObj.Typed = function(selector) {

  if ($(selector).length) {
    var typewritter = $(selector).data("typewritter"); console.log(typewritter);
    $(selector).typed({
      strings: typewritter,
      typeSpeed: 10,
      loop: true,
      backDelay: 2000
    });


  }

};



/* ContactForm()
 * ==========
 * Ajax Contact Form
 *
 * @type Function
 * @usage: $.peachyObj.ContactForm(selector)
 */
$.peachyObj.ContactForm = function(selector) {

  if ($(selector).length) {

    var $selector = $(selector);

    // init the validator
    $selector.validate({
      rules: {
          name: {
              required: true,
          },
          email: {
              required: true,
              email: true
          },
          message: {
              required: true,
          }
      },
      submitHandler: function(form) {

        $.ajax({
            type: "POST",
            dataType: "json",
            url: 'mail.php',
            data: $(form).serialize(),
            success: function (data){

              if(data.status == "1") {
                $selector.find(".result").empty().html('<span class="alert alert-success">'+data.msg+'</span>');
                $selector[0].reset();
              }else{

                $selector.find(".result").empty().html('<span class="alert alert-danger">'+data.msg+'</span>');

              }

            }
        });

      }
    });

  }

};


/* scrollSpy()
 * ==========
 * Will add smooth scroll on anchor links
 *
 * @type Function
 * @usage: $.peachyObj.scrollSpy(selector,offset)
 */
$.peachyObj.scrollSpy = function(selector,offset) {

    if ($(selector).length) {

      $(selector).scrollSpy({
        scrollOffset: offset,
      });

    }


};

/* blogMasonry()
 * ==========
 * Masonry for blog posts
 *
 * @type Function
 * @usage: $.peachyObj.blogMasonry(selector)
 */
$.peachyObj.blogMasonry = function(selector) {

  if ($(selector).length) {

    var $grid = $(selector).masonry({
      itemSelector: '.single-blog-area',
      percentPosition: true
    });

    $grid.imagesLoaded().progress( function() {
      $grid.masonry('layout');
    });

    $(window).resize(function () {
        setTimeout(function(){
          $grid.masonry('reloadItems')
         }, 10);

    });

  }

};

/* contactSidemenu()
 * ==========
 * Show contact form on sidebar
 *
 * @type Function
 * @usage: $.peachyObj.contactSidemenu(selector)
 */
$.peachyObj.contactSidemenu = function(selector) {

  if ($(selector).length) {
    $(selector).sideNav({
         menuWidth: 300, // Default is 300
         edge: 'right', // Choose the horizontal origin
         draggable: true, // Choose whether you can drag to open on touch screens,
       }
     );
  }

};

/* instaFeed()
 * ==========
 * Show instragram feed with api
 *
 * @type Function
 * @usage: $.peachyObj.instaFeed(selector,userId,limit,clientId)
 */
$.peachyObj.instaFeed = function(selector,userId,limit,accessToken) {

  if ($(selector).length) {

    new Instafeed({
     get: "user",
     userId: userId,
     limit: limit,
     resolution: "standard_resolution",
     accessToken: accessToken,
     template: '<div class="item"><img src="{{image}}" /></div>',
     target: 'instafeed',
     after: function() {
      $(selector).imagesLoaded().then(function() {
        $(selector).owlCarousel({
          items:6,
          loop:true,
          margin:0,
          nav: false,
          dots:false,
          autoplay:true,
          responsiveClass:true,
          responsive:{
              0:{
                  items:1,
              },
              600:{
                  items:4,
              },
              1000:{
                  items:6,
              }
          }
       	});
      })
     }
    }).run()

  }

};

/* GalleryCarousel()
 * ==========
 * Gallery post format
 *
 * @type Function
 * @usage: $.peachyObj.GalleryCarousel('.owl-gallery')
 */
$.peachyObj.GalleryCarousel = function(selector) {

  if ($(selector).length) {
    $(selector).owlCarousel({
        dots: true,
        items: 1,
        margin: 0,
        autoHeight: false,
        autoplay: true,
        autoplayHoverPause: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
    });
  }


};

$(function() {


  //Activate top Menu
  $.peachyObj.TopMenu();

  //Activate scrollSpy
  $.peachyObj.scrollSpy('section.scrollspy',0);

  //Activate Testimonial Carousel
  $.peachyObj.TestimonialCarousel('#testimonial-carousel');


  //Activate LogoCarousel Carousel
  $.peachyObj.LogoCarousel('.owl-carousel');


  //Activate hero-slider
  $.peachyObj.HeroSlider('.hero-slider');


  //Activate BG IMAGE
  $.peachyObj.BgImage('.overlay-image');


  //Activate YOUTUBE BG
  $.peachyObj.VideoBg('#video-bg','d25Px5F7N1U');


  //Activate SKILL BAR
  $.peachyObj.SkillBar('.skillbar')

  //Activate Portfolio
  $.peachyObj.Portfolio('.isotope_items');


  //Activate MagnificPopup
  $.peachyObj.MagnificPopup();

  //Activate Counter
  $.peachyObj.Counter('.counter');

  //Activate Typed
  $.peachyObj.Typed('.element');


  //Activate particles
  $.peachyObj.Particles('#particles');


  //Activate contact
  $.peachyObj.ContactForm('#contact-form');


  //Activate sidebar contact
  $.peachyObj.contactSidemenu('#contact-toggle');

  //Activate sidabr contact form
  $.peachyObj.ContactForm('#side-contact-form');

  //Activate blog-carousel
  $.peachyObj.GalleryCarousel('.blog-carousel');

  //Activate Team-carousel
  $.peachyObj.TeamCarousel('.team-owl-carousel');

  //AOS revail animation on scroll
  AOS.init({
    once: true,
    easing: 'ease-in-sine',
  });

  //Activate blog masonary layout
  $.peachyObj.blogMasonry('.blog-content-area');

  //Activate instragram feed
  $.peachyObj.instaFeed('#instafeed','6882372188',10,'6882372188.1677ed0.98515374afdd4561b0078ff2c724007f');


});


$(window).on('load', function() {
  /*------------------
  	Preloder
  --------------------*/

  $("#preloder").fadeOut("slow");
  //$("#preloder").delay(200).fadeOut("slow");


  /*------------------
  	ONLY FOR DEMO
  --------------------*/

  $('.cswitch').on('click', function(e) {
    $('.colour-switch').toggleClass('active');

    $('.colour-switch span').on('click', function(e) {
      $('.colour-switch span').removeClass('active');
      $(this).addClass('active');
      var colourID = $(this).data("color");
      $('.template-skins').load().attr('href', 'assets/css/skins/' + colourID + '.css');
      e.preventDefault();
    });
    e.preventDefault();
  });

});
