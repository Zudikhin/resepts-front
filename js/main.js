$(document).ready(function () {
  $(".header__mobile_content_btn").click(function () {
    $(this).toggleClass("active");
    $(".header__mobile_nav").toggleClass("active");
  });

  $(".header__mobile_content_btn-desk").click(function () {
    $(".header__mobile_nav").removeClass("active");
    $(".header__mobile_content_btn").removeClass("active");
  });

  $(".main__slider__content").slick({
    prevArrow: $(".main__slider_btns_left"),
    nextArrow: $(".main__slider_btns_right"),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".popular__main_slider").slick({
    dots: true,
    infinite: false,
    arrows: false,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    customPaging: function (slider, i) {
      return '<a class="popular__dot" href="#"></a>';
    },
  });

  $(".main__list").mCustomScrollbar();

  $(".popular__list").mCustomScrollbar({
    axis: "x", // horizontal scrollbar
  });
});
