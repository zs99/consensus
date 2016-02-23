 //icon-blocks show-hide
 $(document).ready(function() {
     //Hide your Input Parameter Div here
$('#icon-block-1-bottom').hide();
     //Diplay div on mouseover
$('#icon-block-1').mouseenter(function() {
$('#icon-block-2-bottom-active').hide();
$('#icon-block-3-bottom-active').hide();
$('#icon-block-1-bottom').show();
     });
$('#icon-block-1-bottom').mouseenter(function() {
$('#icon-block-2-bottom-active').hide();
$('#icon-block-3-bottom-active').hide();
$('#icon-block-1-bottom').show();
     });
     //Hide div on mouseover
$('#icon-block-1').mouseleave(function() {
         //Check if mouse is over second div 
if ($('#icon-block-1').is(':hover')) {
             //If so then show the second div
$('#icon-block-1-bottom').show();
         } else {
$('#icon-block-1-bottom').hide();
$('#icon-block-2-bottom-active').show();
$('#icon-block-3-bottom-active').show();
         }
     });
     //Hide div on mouseover from second div
$('#icon-block-1-bottom').mouseleave(function() {

$('#icon-block-1-bottom').hide();
$('#icon-block-2-bottom-active').show();
$('#icon-block-3-bottom-active').show();
     });
 });

$(document).ready(function() {
     //Hide your Input Parameter Div here
$('#icon-block-2-bottom').hide();
     //Diplay div on mouseover
$('#icon-block-2').mouseenter(function() {
$('#icon-block-1-bottom-active').hide();
$('#icon-block-3-bottom-active').hide();
$('#icon-block-2-bottom').show();
     });
$('#icon-block-2-bottom').mouseenter(function() {
$('#icon-block-1-bottom-active').hide();
$('#icon-block-3-bottom-active').hide();
$('#icon-block-2-bottom').show();
     });
     //Hide div on mouseover
$('#icon-block-2').mouseleave(function() {
         //Check if mouse is over second div 
if ($('#icon-block-2').is(':hover')) {
             //If so then show the second div
$('#icon-block-2-bottom').show();
         } else {
$('#icon-block-2-bottom').hide();
$('#icon-block-1-bottom-active').show();
$('#icon-block-3-bottom-active').show();
         }
     });
     //Hide div on mouseover from second div
$('#icon-block-2-bottom').mouseleave(function() {
$('#icon-block-2-bottom').hide();
$('#icon-block-1-bottom-active').show();
$('#icon-block-3-bottom-active').show();
     });

 });

$(document).ready(function() {
     //Hide your Input Parameter Div here
$('#icon-block-3-bottom').hide();
     //Diplay div on mouseover
$('#icon-block-3').mouseenter(function() {
$('#icon-block-1-bottom-active').hide();
$('#icon-block-2-bottom-active').hide();
$('#icon-block-3-bottom').show();
     });
$('#icon-block-3-bottom').mouseenter(function() {
$('#icon-block-1-bottom-active').hide();
$('#icon-block-2-bottom-active').hide();
$('#icon-block-3-bottom').show();
     });
     //Hide div on mouseout
$('#icon-block-3').mouseleave(function() {
         //Check if mouse is over second div 
if ($('#icon-block-3').is(':hover')) {
             //If so then show the second div
$('#icon-block-3-bottom').show();
         } else {
$('#icon-block-3-bottom').hide();
$('#icon-block-1-bottom-active').show();
$('#icon-block-2-bottom-active').show();
         }
    });
     //Hide div on mouseover from second div
$('#icon-block-3-bottom').mouseleave(function() {
$('#icon-block-3-bottom').hide();
$('#icon-block-1-bottom-active').show();
$('#icon-block-2-bottom-active').show();
     });
 });



//sticky submenu
 // Create a clone of the menu, right next to original.
 $('.header-subnav').addClass('original').clone().insertAfter('.header-subnav').addClass('cloned').css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '500').removeClass('original').hide();
 $('.header-subnav-1').addClass('original').clone().insertAfter('.header-subnav-1').addClass('cloned').css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '500').css('background-color', '#fff').removeClass('original').hide();
 $('.header-subnav-2').addClass('original').clone().insertAfter('.header-subnav-2').addClass('cloned').css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '500').css('background-color', '#fff').removeClass('original').hide();
 $('.header-subnav-3').addClass('original').clone().insertAfter('.header-subnav-3').addClass('cloned').css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '500').css('background-color', '#fff').removeClass('original').hide();

 scrollIntervalID = setInterval(stickIt, 10);

 function stickIt() {
var nav = $('.original');
if (nav.length) {
     var orgElementPos = $('.original').offset();
     orgElementTop = orgElementPos.top;

     if ($(window).scrollTop() >= (orgElementTop)) {
         // scrolled past the original position; now only show the cloned, sticky element.

         // Cloned element should always have same left position and width as original element.     
         orgElement = $('.original');
         coordsOrgElement = orgElement.offset();
         leftOrgElement = coordsOrgElement.left;
         widthOrgElement = orgElement.css('width');
         $('.cloned').css('left', leftOrgElement + 'px').css('top', 0).css('width', widthOrgElement).show();
         $('.original').css('visibility', 'hidden');
     } else {
         // not scrolled past the menu; only show the original menu.
         $('.cloned').hide();
         $('.original').css('visibility', 'visible');
     }
     }
 }