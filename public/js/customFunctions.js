/* 
=============================================
           SERVICES AND SOLUTIONS
=============================================
*/
// make functions available after page is empty.
$(() => {
    // animate on scrolling.
    new WOW().init();
});

/* 
=============================================
           PORTFOLIOS & WORK
=============================================
*/
// make functions available after page is empty.
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
// make functions available after page is empty.
$(() => {
    // call the owl initializer function.
    $("#team-members-wrapper.owl-carousel").owlCarousel({
        items: 3,
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