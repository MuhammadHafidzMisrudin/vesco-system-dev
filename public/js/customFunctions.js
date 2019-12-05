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
    // popup initialization. 
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open.
        type: 'image',
        gallery: { 
            enabled: true 
        }
    });
});
