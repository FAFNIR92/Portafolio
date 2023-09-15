$(document).ready(function() {
    let containerNavbar = $(".container-navbar");
    let headerHeight = $(".header-cv").height();

    $(window).scroll(function() {
        if ($(this).scrollTop() > headerHeight) {
            containerNavbar.addClass("fixed");
        } else {
            containerNavbar.removeClass("fixed");
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
