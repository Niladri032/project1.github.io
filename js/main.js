// navbar sticky
window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};


// nav menu active //
const currentLocation = location.href;
const menuItem = document.querySelectorAll('.navbar-collapse .nav-link');
const menuLength = menuItem.length;

for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = 'nav-link current';
    }
}



// Banner slider open
var swiper = new Swiper(".mySwiperBanner", {
    spaceBetween: 10,
    centeredSlides: true,
    effect: "fade",
    speed: 800,
    loop: true,
    autoplay: {
        delay: 4000,
        // disableOnInteraction: false,
        // pauseOnMouseEnter: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});
// Banner slider close


// slider our team
$('.slider-2').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        768: {
            items: 3
        },
        1440: {
            items: 4
        }
    }
})