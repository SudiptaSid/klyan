// Testimonial Slider
$('#testi_slider').owlCarousel({
    margin:20,
    items: 1,
    nav:false,
    dots:false,
    loop:true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
})
// Video Slider
$('#vid_slider').owlCarousel({
    items: 1,
    margin: 0,
    loop: true,
    video: true,
    lazyLoad: true,
    dots: false,
    nav:true,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"], 
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
}); 