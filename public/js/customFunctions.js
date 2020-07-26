/* 
    Author: Muhammad Hafidz Misrudin
    Description: Proprietary (no permission for copy or use or redistribution)
    Date written: 18/11/2019
    Date last updated: 26/07/2020
*/

/* 
=============================================
           SERVICES AND SOLUTIONS
=============================================
*/
// make functions available after page is empty/rendered.
$(() => {
    // initialise wow animation effect.
    // animate on scrolling.
    new WOW().init();
});

/* 
=============================================
           PORTFOLIOS & WORK
=============================================
*/
// make functions available after page is empty/rendered.
$(() => {
    // magnific popup initialization. 
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open.
        type: 'image',
        gallery: { 
            enabled: true 
        }
    });
});

/* 
=============================================
                    TEAM
=============================================
*/
// make functions available after page is empty/rendered.
$(() => {
    // call the owl initializer function.
    $("#team-members-wrapper.owl-carousel").owlCarousel({
        items: 3, // to display 3 items at a time in slider.
        autoplay: true,
        loop: true,
        autoplayTimeout:2000,
        smartSpeed: 500,
        autoplayHoverPause: true
    });
});

/* 
=============================================
                TESTIMONIALS
=============================================
*/
// make functions available after page is empty/rendered.
$(() => {
    // call the owl initializer function.
    $("#customer-testimonials.owl-carousel").owlCarousel({
        items: 1, // to display 1 item at a time in slider.
        autoplay: true,
        loop: true,
        autoplayTimeout:3000,
        smartSpeed: 700,
        autoplayHoverPause: true
    });
});

/* 
=============================================
                STATISTICS/STATS
=============================================
*/
// make functions available after page is empty/rendered.
$(() => {
    // call the counterup function to activate the counter effect.
    // disable temporarily.
    // selector class should be add $(".stats-item .counter")to activate it.
    $(".disable").counterUp({
        delay: 10,
        time: 3000
    });
});

/* 
=============================================
                 CLIENTS
=============================================
*/
// make functions available after page is empty/rendered.
$(() => {
    // call the owl initializer function.
    $("#clients-list.owl-carousel").owlCarousel({
        items: 6,
        autoplay: true,
        loop: true,
        smartSpeed: 700,
        autoplayHoverPause: true
    });
});