window.onload = function() {
    alert("Bem-vindo ao site de Robert Oppenheimer!");
};

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function animateOnScroll() {
    var elements = document.querySelectorAll('.fade-in');

    elements.forEach(function(el) {
        if (isElementInViewport(el)) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

animateOnScroll();
