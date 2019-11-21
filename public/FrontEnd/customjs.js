$(document).ready(function(){

/*************** Checkbox script ***************/
var inputs = document.getElementsByTagName('input');
for (a = 0; a < inputs.length; a++) {
if (inputs[a].type == "checkbox") {
var id = inputs[a].getAttribute("id");
if (id==null){
id=  "checkbox" +a;
}
inputs[a].setAttribute("id",id);
var container = document.createElement('div');
container.setAttribute("class", "ttr_checkbox");
var label = document.createElement('label');
label.setAttribute("for", id);
$(inputs[a]).wrap(container).after(label);
}
}

/*************** Radiobutton script ***************/
var inputs = document.getElementsByTagName('input');
for (a = 0; a < inputs.length; a++) {
if (inputs[a].type == "radio") {
var id = inputs[a].getAttribute("id");
if (id==null){
 id=  "radio" +a;
}
inputs[a].setAttribute("id",id);
var container = document.createElement('div');
container.setAttribute("class", "ttr_radio");
var label = document.createElement('label');
label.setAttribute("for", id);
$(inputs[a]).wrap(container).after(label);
}
}

/*************** Staticfooter script ***************/
var window_height =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var body_height = $(document.body).height();
var content = $("div[id$='content_margin']");
if(body_height < window_height){
differ = (window_height - body_height);
content_height = content.height() + differ;
$("div[id*='content_margin']").css({"min-height":content_height+"px"});
}

/* Slideshow Function Call */

if(jQuery('#ttr_slideshow_inner').length){
jQuery('#ttr_slideshow_inner').TTSlider({
stopTransition:false,slideShowSpeed:2000, begintime:1000,cssPrefix: 'ttr_'
});
}

/*************** Hamburgermenu slideleft script ***************/
$('#nav-expander').on('click',function(e){
e.preventDefault();
$('body').toggleClass('nav-expanded');
});

/*************** Menu click script ***************/
$('ul.ttr_menu_items.nav li [data-toggle=dropdown]').on('click', function() {
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
if(window_width > 1025 && $(this).attr('href')){
window.location.href = $(this).attr('href');
}
else{
if($(this).parent().hasClass('open')){
location.assign($(this).attr('href'));
}
}
});

/*************** Sidebarmenu click script ***************/
$('ul.ttr_vmenu_items.nav li [data-toggle=dropdown]').on('click', function() {
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
if(window_width > 1025 && $(this).attr('href')){
window.location.href = $(this).attr('href');
}
else{
if($(this).parent().hasClass('open')){
location.assign($(this).attr('href'));
}
}
});

/*************** Tab menu click script ***************/
$('.ttr_menu_items ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if(window_width < 1025){
event.preventDefault();
event.stopPropagation();
$(this).parent().siblings().removeClass('open');
$(this).parent().toggleClass(function() {
if ($(this).is(".open") ) {
window.location.href = $(this).children("[data-toggle=dropdown]").attr('href');
return "";
} else {
return "open";
}
});
}
});

/*************** Tab-Sidebarmenu script ***************/
$('.ttr_vmenu_items ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if(window_width < 1025){
event.preventDefault();
event.stopPropagation();
$(this).parent().siblings().removeClass('open');
$(this).parent().toggleClass(function() {
if ($(this).is(".open") ) {
window.location.href = $(this).children("[data-toggle=dropdown]").attr('href');
return "";
} else {
return "open";
}
});
}
});
WebFontConfig = {
google: { families: [ 'Crimson+Text:600','Crimson+Text','Fjord+One'] }
};
(function() {
var wf = document.createElement('script');
wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.0.31/webfont.js';
wf.type = 'text/javascript';
wf.async = 'true';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(wf, s);
})();
/*************** Html video script ***************/
var objects = ['iframe[src*="youtube.com"]','iframe[src*="youtu.be"]', '.html_content video','object'];
for(var i = 0 ; i < objects.length ; i++){
if ($(objects[i]).length > 0 ) {
$(objects[i]).wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );
$(objects[i]).addClass('embed-responsive-item');
}
}
});
/* The JS code written in this window will append within the customjs.js file. */

/** set att href Go Back and Print Page **/
$(window).load(function(){



});
/** end set att href Go Back and Print Page **/

/** slide cho phan gan cuoi footer, dang nghien cuu tren trang our-commitmeny.
class mySlides display:none **/

/** end slide cho phan gan cuoi footer, dang nghien cuu tren trang our-commitmeny.**/

$(document).ready(function() {


// monitor 768px - 5120
var options = {
   ovalWidth: 400,
   ovalHeight: 100,
   offsetX: -350,
   offsetY: 500,
   angle: 0,
   activeItem: 0,
   duration: 350,
   className: 'ttr_image'
  }
 /* tablet view start */
/*@media only screen
and (min-width : 768px)
and (max-width : 1024px)  */
/* mobile view, landscape*/
/*@media  only screen and (min-width: 481px) and (max-width: 767px)*/

var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
     if(window_width > 768 && window_width < 1280){// tablet  600 - 2736

 // alert ('tablet width: ' + window_width);
 options = {
     ovalWidth: 200,
     ovalHeight: 50,
     offsetX: -350,
     offsetY: 350,
     angle: 0,
     activeItem: 0,
     duration: 350,
     className: 'ttr_image'
  }

} else {
 if (window_width > 395 && window_width < 767 ) { // mobile  320px - 2960px

  // alert ('mobile width: ' + window_width);
  options = {
     ovalWidth: 150,
     ovalHeight: 50,
     offsetX: -350,
     offsetY: 180,
     angle: 0,
     activeItem: 0,
     duration: 350,
     className: 'ttr_image'
  }
 }
}


  var carousel = $('.footercellcolumn1 .html_content').CircularCarousel(options);


  /* Previous button
  $('.controls .previous').click(function(e) {
   carousel.cycleActive('previous');
   e.preventDefault();
  });

  /* Next button
  $('.controls .next').click(function(e) {
   carousel.cycleActive('next');
   e.preventDefault();
  });*/

   /*Manaully click an item anywhere in the carousel */
  $('.footercellcolumn1 span.ttr_image').click(function(e) {
   var index = $(this).index('.footercellcolumn1 span.ttr_image');
   carousel.cycleActiveTo(index);
   e.preventDefault();
  });
setInterval(function(){ carousel.cycleActive('next'); }, 3000);
//alert('The element exists in the page.');
 });






  /*
    Construct, do first draw.
  */

  $.fn.CircularCarousel = function (options) {

    var $ele = $(this),
        ovalWidth = options.ovalWidth,
        ovalHeight = options.ovalHeight,
        activeItem = options.activeItem,
        offsetX = options.offsetX,
        offsetY = options.offsetY,
        angle = options.angle,
        $items = $ele.find('.' + options.className),
        cycleMax = $items.length,
        itemHeights = [],
        cycleDuration = options.duration,
        previousActiveElement = activeItem;

    /*
       Original Source of this function: Addy Osmani's jquery.shapelib from 2010. Updated, tweaked by @samuelgbrown.
       Positions the items using margins, relative to an ellipse.

       @params
       x: the left offset of all points on the ellipse
       y: the top offset of all points on the ellipse
       angle: the angle of the ellipse
       activeItem: used to influence which element is considered active
       callback: a callback
    */
    function positionItems (x, y, angle) {

      var i = 0,
          n = 0,
          beta = -angle * (Math.PI / 180),
          sinbeta = Math.sin(beta),
          cosbeta = Math.cos(beta),
          offsetElement = activeItem,
          offsetNextElement = activeItem + 1;

      itemHeights = [];

      $items.eq(activeItem).addClass('active');

      while (n < cycleMax) {
        i+= (360/cycleMax);
        var alpha = i * (Math.PI / 180);

        var sinalpha = Math.sin(alpha);
        var cosalpha = Math.cos(alpha);

        var X = x + (ovalHeight * cosalpha * cosbeta - ovalWidth * sinalpha * sinbeta);
        var Y = y + (ovalHeight * cosalpha * sinbeta + ovalWidth * sinalpha * cosbeta);

        X = Math.floor(X);
        Y = Math.floor(Y);

        // To update the positions, we just need to change the order and make it loop at either end.
        offsetElement++;
        if (offsetElement < 0) {
          offsetElement = cycleMax-1;
        } else if (offsetElement === cycleMax) {
          offsetElement = 0;
        }

        // used by layering hack
        offsetNextElement++;
        if (offsetNextElement < 0) {
          offsetNextElement = cycleMax-1;
        } else if (offsetNextElement >= cycleMax) {
          offsetNextElement = 0;
        }

        $items.eq(offsetElement).css('margin-top', X + 'px');
        $items.eq(offsetElement).css('margin-left', Y + 'px');

        var itemMeta = { 'top' : $items.eq(offsetNextElement).offset().top, 'index' : offsetNextElement };
        itemHeights.push(itemMeta);

        n++;
      }

      // Fire events
      var activeElement = $items.eq(activeItem),
        prevActiveElement = $items.eq(previousActiveElement);

      $ele.trigger('itemBeforeActive', activeElement);
      $ele.trigger('itemBeforeDeactivate', prevActiveElement);

      var afterTimeout = setTimeout(function() {
        $ele.trigger('itemActive', activeElement);
        $ele.trigger('itemAfterDeactivate', prevActiveElement);
      }, cycleDuration);

      // Run the layering hack (see method below)
      layerHack(activeItem);
    };

    /*
      Cycles through items 1 by 1, doing a redraw of positions each time.
      direction = 1 / 0 (1 = right, 0 = left)

      TODO: Improve quality/DRYness here
    */
    function doSteppedCycle (steps, direction, stepDuration) {

      var i = 0;

      if (direction === 1) {

        while (i < steps) {

          var timeout = setTimeout(function() {
            var activeElement = $items.eq(activeItem);
            activeElement.removeClass('active');
            previousActiveElement = activeItem;
            activeItem++;
            // activeItem changed, validate
            validateActiveItem();
            positionItems(offsetX, offsetY, angle, null);
          }, i * stepDuration);

          i++;
        }

      } else {

        i = steps;
        var k = 0;
        while (i > 0) {

          var timeout = setTimeout(function() {
            var activeElement = $items.eq(activeItem);
            activeElement.removeClass('active');
            previousActiveElement = activeItem;
            activeItem--;
            // activeItem changed, validate
            validateActiveItem();
            positionItems(offsetX, offsetY, angle, null);
          }, k * stepDuration);

          k++;
          i--;
        }

      }

    };

    /*
      Often we want to enumerate the activeItem. This utility ensures it doesn't go over the bounds when we're doing so.
    */
    function validateActiveItem () {
      if (activeItem < 0) {
        activeItem = cycleMax-1;
      } else if (activeItem >= cycleMax) {
        activeItem = 0;
      }
    };


    /*
      A custom hack that prevents layering issues at either side of carousel.
      This just numerates z-indexes from the further back items to the furthest front.
      To do this, we check the offset().top values of each item, therefore a flat carousel doesn't work here.
    */
    function layerHack (oldActiveItem) {


      // NOTE: heights recorded before the css transition took place.

      // Sort the items by offset().top values
      var sortedItems = itemHeights.sort(function(a, b) {
        return a.top - b.top;
      });

      // Loop through and set z-indexes by top-to-bottom offset().top's.
      var i = 0;
      while (i < sortedItems.length) {
        if (sortedItems[i].index === oldActiveItem) {
          $items.eq(sortedItems[i].index - 1).css({'z-index': sortedItems.length - 1});
          $items.eq(sortedItems[i].index).css({'z-index': sortedItems.length - 1});
        }
        $items.eq(sortedItems[i].index).css('z-index', i);

        i++;
      }

      // Small hack: the old active item when going back/left seems to get a low z-index. This works.
      var buggedItem = activeItem + 1;
      if (buggedItem < 0) {
        buggedItem = cycleMax-1;
      } else if (buggedItem >= cycleMax) {
        buggedItem = 0;
      }
      $items.eq(buggedItem).css('z-index', cycleMax);

      // Strongest z-index on the active item.
      $items.eq(activeItem).css('z-index', cycleMax + 1);

    };


    /*
      Calculates the shorted route through the items array (forwards OR backwards)

      @params
      array: array of carousel items
        start: route start position
        end: route end position

        @returns
        Object: { direction (int), steps (int) }

        Credit @marcusehaslam for help here!
     */
    function findBestRoute (array, start, end){

      var left = 0, right = 0;

      var index = start;
      while(index !== end){
        right++;
        index = (index === array.length-1) ? 0 : index + 1;
      }

      index = start;
      while(index !== end){
        left++;
        index = (index === 0) ? array.length-1 : index - 1;
      }

      return (left > right) ? { 'direction' : 1, 'steps' : right } : { 'direction' : 0, 'steps' : left };
    };

    /*
      Position items for first time
    */
    positionItems(offsetX, offsetY, angle);

    /*
      Apply transition class only after a brief delay (browser internals mean the transitions happen before we want otherwise)
      Also then set duration of transitions
    */
    var transitionsDelay = setTimeout(function() {
      $items.addClass('transition');
      var inSeconds = options.duration / 1000 + 's';
      $items.css('transition-duration', inSeconds);
    }, 10);


    var methods = {

      /*
        Cycles the carousel to the next or previous item. Relies on CSS transition support.

        @params
        direction (int) 1/0. 1 = right/forward, 0 = left/backward.
      */

      cycleActive: function (direction) {

        // Remove old active classes.
        var activeElement = $items.eq(activeItem);
        activeElement.removeClass('active');

        // Update activeItem & keep within the array limit.
        previousActiveElement = activeItem;
        activeItem = ((direction === 'previous') ? activeItem - 1 : activeItem + 1);
        validateActiveItem();

        // Add new active class, reposition items with positionItems.
        positionItems(offsetX, offsetY, angle, null);

      },

      /*
        Cycles the carousel to a specific item. Relies on CSS transition support.

        @params
        index = item you want to cycle to.
      */

      cycleActiveTo: function (index) {

        // Remove old active classes.
        var activeElement = $items.eq(activeItem);
        activeElement.removeClass('active');

        //If user clicks more than 2 items away, numerate (over time) the drawing to protect the animation from layering glitches.
        var difference = Math.abs(index - activeItem);

        // Do either an instant transition, or a stepped animation if user skips more than 2 items at once.
        if (difference >= 2) {

          var direction = 1;
          var route = findBestRoute($items, activeItem, index);
          doSteppedCycle(route.steps, route.direction, cycleDuration - 100);

        } else {

          previousActiveElement = activeItem;
          activeItem = index;

          // activeItem changed, validate
          validateActiveItem();

          // Add new active class, reposition items with positionItems.
          positionItems(offsetX, offsetY, angle, null);

        }

      },

      /* Proxy binding events */
      on: function(e, fn) {
        $ele.on(e, fn);
      }
    };

    return methods;

  };


