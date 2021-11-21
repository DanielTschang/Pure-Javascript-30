function debounce(func, wait = 5, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  
  
  
  function checkSlide(){
    SliderImages.forEach(SliderImage => {
      //half way through the image
      const slideInAt = (window.scrollY + window.innerHeight) - SliderImage.height/2;
      // bottom of the image
      const imageBottom = SliderImage.offsetTop + SliderImage.height;

      //
      const isHalfShown = slideInAt > SliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if(isHalfShown && isNotScrolledPast){
        SliderImage.classList.add('active')
      }
      else{
        SliderImage.classList.remove('active')
      }
    })
  };
  const SliderImages = document.querySelectorAll('.slide-in');
  window.addEventListener('scroll', debounce(checkSlide));
