// const cursorRounded = document.querySelector('.Cursor');



// const moveCursor = (e)=> {
//   const mouseY = e.clientY;
//   const mouseX = e.clientX;
   
//   cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
// }

// window.addEventListener('mousemove', moveCursor)

$(document).ready(function(){
 var cursor = $('.cursor');


  window.onmouseup = (function(_this) {
    return function(event) {
      var _event;
      _event = event;
      return (timer = setTimeout(function() {
        return clickElement(_event);
      }, 1));
    };
  })(this);



 $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

$(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

$(window)
        .mouseleave(function() {
            cursor.css({
                opacity: "0"
            });
        })
        .mouseenter(function() {
            cursor.css({
                opacity: "1"
            });
        });

    $('.video')
        .mouseleave(function() {
          cursor.css({
            transform: "scale(1)"
          });
        })
        .mouseenter(function() {
          cursor.css({
            transform: "scale(0)"
          });
        })

    $('.HC')
        .mouseleave(function() {
          cursor.css({
            transform: "scale(1)"
          });
        })
        .mouseenter(function() {
          cursor.css({
            transform: "scale(0)"
          });
        })
});