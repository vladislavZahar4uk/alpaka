
import $ from 'jquery';

window.$ = $;


$(function() {
    $(document).on('click', '.js-category-trigger', function() {
        $(this).closest('.js-category').toggleClass('is-open');
    });
});

