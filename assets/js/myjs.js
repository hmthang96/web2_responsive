$(document).ready(function(){
    $('.nar-bar').on('click', function (e) {
        $('.header-navbar').addClass('js-active');        
    });

    $('.header-navbar').on('click', function(e)
    {
        if ($(e.target).closest('.header-navbar ul').length <= 0) {
            $('.header-navbar').removeClass('js-active');
        }
    })

    $('.product-tab a').on('click',function(e){
        const tab_target = $(this).attr('tab-target');
        // alert(tab_target);
        $('.product-tab a').removeClass('js-active');
        $('.product-list').removeClass('js-show');
        $(this).addClass('js-active');
        // $(tab_target).addClass('js-active');
        // $(this).addClass('js-hidden');
        // Lay attribute cua tab-target -> Thuoc tinh ID
        $(tab_target).addClass('js-show');

    })

    $('.client-slick').slick({
        dots: true,
        arrows: false,
    });


    $('.site-footer-nav_heading').on('click',function(e){
        const footer_list = $('.site_footer-nav_heading').next();
        footer_list.removeClass('js-unhide');
        const this_list = $(this).next();
        this_list.addClass('js-unhide');
    });


});
