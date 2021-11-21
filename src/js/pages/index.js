import $ from 'jquery';
import 'slick-carousel';

window.$ = $;


$(function() {
    $('.js-main-banner').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<div class="main-slider__arrow left"> <span class="icon icon-arrow-left"></span> </div>',
        nextArrow: '<div class="main-slider__arrow right"> <span class="icon icon-arrow-right"></span> </div>'
    });

    $('.js-products-new').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        appendArrows: $('.js-products-new-arrows'),
        prevArrow: '<div class="slider-arrow left"> <span class="icon icon-arr-left"></span> </div>',
        nextArrow: '<div class="slider-arrow right"> <span class="icon icon-arr-right"></span> </div>'
    });

    $('.js-categories-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        appendArrows: $('.js-categories-arrows'),
        prevArrow: '<div class="slider-arrow left"> <span class="icon icon-arr-left"></span> </div>',
        nextArrow: '<div class="slider-arrow right"> <span class="icon icon-arr-right"></span> </div>'
    });

    $('.js-products-popular').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        appendArrows: $('.js-products-popular-arrows'),
        prevArrow: '<div class="slider-arrow left"> <span class="icon icon-arr-left"></span> </div>',
        nextArrow: '<div class="slider-arrow right"> <span class="icon icon-arr-right"></span> </div>'
    });

    $('.js-review-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        appendArrows: $('.js-review-arrows'),
        prevArrow: '<div class="slider-arrow left"> <span class="icon icon-arr-left"></span> </div>',
        nextArrow: '<div class="slider-arrow right"> <span class="icon icon-arr-right"></span> </div>'
    });
});

