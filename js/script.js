/**
 * Created by dong on 16/4/16.
 */
$(document).ready(function () {
    $('a.blogBtn').click(function () {
        if ($('.panel').hasClass('panelCollapse')) return;
        currentWidth = $('.panel').width();
        $('.panel ').addClass('panelCollapse');
        $('.panel').css('max-width', currentWidth);
        $('.panel').animate({'max-width': '530px', 'width': '30%'}, 500);


    });

    if (window.location.hash && window.location.hash == '#blog') {
        $('.panel').addClass('panelCollapse ');
    }

    if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
        $('.panel').addClass('panelCollapse');
    }
});