$(document).ready(function(){
    /*** Side bar menu ****/
    $(".header__menu").click(function(){
      $("body").toggleClass("openmenu");
    });

    $(".sidebar__close").click(function(){
      $("body").removeClass("openmenu");
    });

    /**  Home Swiper Slider  **/
    if($('.main-slider').length) {
      var swiper = new Swiper('.main-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
    
    /**  Featured Products Swiper  **/
    if($('.featured-poducts-container').length) {
      var swiper = new Swiper('.featured-poducts-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {          
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
          }
        }
      });
    }

/** changes password */
    $(".pwd-box").click(function(){
      $(".change-password").toggleClass("show");
    });

    $(".pwd-changes").click(function(){
      $(".change-password").removeClass("show");
    });

/** file upload ******/
    if($('.browse-btn').length) {
    const uploadButton = document.querySelector('.browse-btn');
      const fileInfo = document.querySelector('.file-info');
      const realInput = document.getElementById('real-input');

      uploadButton.addEventListener('click', (e) => {
        realInput.click();
      });

      realInput.addEventListener('change', () => {
        const name = realInput.value.split(/\\|\//).pop();
        const truncated = name.length > 20 
          ? name.substr(name.length - 20) 
          : name;
        
        fileInfo.innerHTML = truncated;
      });
    }
    
/**  Product detail Slider  **/
    if($('.product-detail__slider').length) {
      var swiper = new Swiper('.product-detail__slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false,
        // },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }

/**  Product detail like unlike  **/

$('.favorite').click( function(){
  if ( $(this).hasClass('active') ) {
      $(this).removeClass('active');
  } else {
      $('.favorite.active').removeClass('active');
      $(this).addClass('active');    
  }
});
 
/*****  Product Quantity ******/

  if($('.quantity-box').length) {
      $('.add-plus').click(function () {
        if ($(this).prev().val() < 10) {
          $(this).prev().val(+$(this).prev().val() + 1);
        }
      });
      $('.sub-mini').click(function () {
        if ($(this).next().val() > 1) {
          if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
      });
  }

  /*****  Product div Remove ******/
  // if($('.remove-product').length) {
  //   $( ".remove-product" ).click(function() {
  //     $( ".cart__box" ).remove();
  //   });
  // }

});
