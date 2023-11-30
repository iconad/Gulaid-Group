// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {
  // wait until images, links, fonts, stylesheets, and js is loaded
  window.addEventListener(
    "load",
    function (e) {

      // function showpanel() {   
      
// }

// // use setTimeout() to execute
// setTimeout(showpanel, 5000)
      // Init AOS
      AOS.init();

      // GSAP Config
      gsap.config({
        nullTargetWarn: false,
      });

      // Regist GSAP Plugins
      gsap.registerPlugin(
        ScrollTrigger,
        ScrollSmoother,
        SplitText,
        ScrollToPlugin
      );

      // Scroll Smoother
      const $wrapper = document.getElementById("main-wrapper");
      const $content = document.getElementById("main-content");

      const $smoother = ScrollSmoother.create({
        wrapper: $wrapper,
        content: $content,
        smooth: 1.5,
        effects: true,
        smoothTouch: 0,
        preventDefault: true,
        normalizeScroll: { allowNestedScroll: true },
        ignoreMobileResize: true,
        onUpdate: (self) => {},
      });

      $smoother.effects(".parallax", { speed: "auto" });

      /* ###################################### */
      /* ######## JS Animations Start ######## */
      /* #################################### */


      

      /* #################################### */
      /* ######## JS Animations End ######## */
      /* ################################## */
    },
    false
  );

  $( ".enquire-now-popup").on( "click", function() {
    $("body").addClass("popup-active");
    if ($("#mobile-menu-btn").hasClass("active")){
      $( "#site-navigation" ).slideUp( "slow", function () {
        $("#header, #mobile-menu-btn").removeClass("active");
        $( ".mobile-menu-overlay" ).hide();
      });
    }
  });
  $( ".close-popup").on( "click", function() {
    $("body").removeClass("popup-active");
  });


  //jobs popup
  // $( ".job-popup-1").on( "click", function() {
  //   $("body").addClass("job-popup-1-active");
  // });


  $( "#mobile-menu-btn").on( "click", function() {
    if ($(this).hasClass("active")){
      $( "#site-navigation" ).slideUp( "slow", function () {
        $("#header, #mobile-menu-btn").removeClass("active");
        $( ".mobile-menu-overlay" ).hide();
      });
    } else{
      $( "#site-navigation" ).slideDown( "slow");
      $("#header, #mobile-menu-btn").addClass("active");
      $( ".mobile-menu-overlay" ).fadeIn( "slow");
    }
  });
  $(".btn").on('mouseenter', function(e) {
    x = e.pageX - $(this).offset().left;
    y = e.pageY - $(this).offset().top;
    $(this).find("span").css({
      top: y,
      left: x
    });
  });
  $(".btn").on('mouseout', function(e) {
    x = e.pageX - $(this).offset().left;
    y = e.pageY - $(this).offset().top;
    $(this).find("span").css({
      top: y,
      left: x
    });
  });
  // container width
  var offset = $(".footer .container").offset();
  //console.log(offset);
  $(".padding-left").css("padding-left", offset.left);
  $(".padding-right").css("padding-right", offset.left);
  //console.log(offset.left);
});


