var bars = document.getElementById("bar-icon");
var menu = document.getElementById("menu");
function disableScroll() {
    // Get the current page scroll position
    scrollTop = 
      window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = 
      window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};
}

bars.addEventListener("click", function () {
  menu.classList.toggle('display-show');
  if(menu.classList.contains('display-show')){
    disableScroll();
    bars.classList.remove('fa-bars');
    bars.classList.add('fa-times');
  } else{
    enableScroll();
    bars.classList.remove('fa-times');
    bars.classList.add('fa-bars');
  }
});