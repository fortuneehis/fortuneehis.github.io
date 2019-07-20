     $(document).ready(function(){
        $('.menu').click(function(){
           $('.menu').toggleClass('active');
            $('.init').toggleClass('active');
        })
        $('.btn').click(function(){
           $('.social-links').toggleClass('active');
        })

         $('.li').click(function(){
            $(this).addClass('li-active').siblings().removeClass('li-active').siblings();
         })
          $('.icon').click(function(){
           $('.icon').toggleClass('active');
        })
       
        

      })
     window.addEventListener("load", function(){
    const loader = document.querySelector(".loader");
    loader.className+=" load-active";
});
    var animateHTML = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight/1.3;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          'hidden',
          'fade-in-element'
        );
        //another one
      }
    }
  }
  return {
    init: init
  };
};

window.onscroll = function() {
  var d = document.documentElement;
  var offset = d.scrollTop;

  if (offset >= 150) {
    $('.light').addClass('scroll');
  }else{
     $('.light').removeClass('scroll');
  }

};
