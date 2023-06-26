$(document).ready(function() {
    var owl = $('.sponsors');
        owl.owlCarousel({
        items: 5,
        loop: true,
        margin: 20,
        autoplay: true,
        nav: false,
        // navText : ["<img src='assets/images/arrow-left.png' class='arrows'/ >","<img src='assets/images/arrow-right.png' class='arrows'/ >"],
        responsive: {
            0: {
               items: 1,
            },
            414: {
               items: 2,
            },
            580: {
               items: 2,
            },
            800: {
               items: 4,
            }
        }
    });
});