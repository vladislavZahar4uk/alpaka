import $ from 'jquery';
import 'slick-carousel';

window.$ = $;

$(function() {
    $(".js-main-banner").slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<div class="main-slider__arrow left"> <span class="icon icon-arrow-left"></span> </div>',
        nextArrow: '<div class="main-slider__arrow right"> <span class="icon icon-arrow-right"></span> </div>'
    });
});