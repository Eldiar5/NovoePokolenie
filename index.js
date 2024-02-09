// Dropdown menu
let intervalId;

document.querySelectorAll(".menu__link").forEach(e => {
    e.addEventListener("click", e => {
        const menu = e.currentTarget.dataset.path
        document.querySelectorAll(".menu__content").forEach(e => {
            if (!document.querySelector(`[data-path=${menu}]`).classList.contains("active")) {
                e.classList.remove("menu-open")

                document.querySelector(`[data-target=${menu}]`).classList.add("menu-open")
                document.querySelector(`[data-plus=${menu}]`).classList.add("plus-active")
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-path=${menu}]`).classList.add("active")
                }, 0);
            }

            if (document.querySelector(`[data-path=${menu}]`).classList.contains("active")) {
                clearTimeout(intervalId);
                document.querySelector(`[data-target=${menu}]`).classList.remove("menu-open")
                document.querySelector(`[data-plus=${menu}]`).classList.remove("plus-active")
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-path=${menu}]`).classList.remove("active")
                }, 0);
            }
        });
        document.querySelectorAll(".menu__link").forEach(e => {
            if (!document.querySelector(`[data-path=${menu}]`).classList.contains("active")) {
                e.classList.remove("active")

                document.querySelector(`[data-target=${menu}]`).classList.add("menu-open")
                document.querySelector(`[data-plus=${menu}]`).classList.add("plus-active")
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-path=${menu}]`).classList.add("active")
                }, 0);
            }

            if (document.querySelector(`[data-path=${menu}]`).classList.contains("active")) {
                clearTimeout(intervalId);
                document.querySelector(`[data-target=${menu}]`).classList.remove("menu-open")
                document.querySelector(`[data-plus=${menu}]`).classList.remove("plus-active")
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-path=${menu}]`).classList.remove("active")
                }, 0);
            }

            window.onclick = e => {
                if (e.target == document.querySelector(`[data-path=${menu}]`) || e.target == document.querySelector(`[data-target=${menu}]`) || e.target == document.querySelector(`[data-plus=${menu}]`)) {
                    return;
                } else {
                    document.querySelector(`[data-path=${menu}]`).classList.remove("active")
                    document.querySelector(`[data-target=${menu}]`).classList.remove("menu-open")
                    document.querySelector(`[data-plus=${menu}]`).classList.remove("plus-active")
                }
            }
        });
        document.querySelectorAll(".menu__plus").forEach(e => {
            if (!document.querySelector(`[data-path=${menu}]`).classList.contains("active")) {
                e.classList.remove("plus-active")

                document.querySelector(`[data-target=${menu}]`).classList.add("menu-open")
                document.querySelector(`[data-plus=${menu}]`).classList.add("plus-active")
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-path=${menu}]`).classList.add("active")
                }, 0);
            }

            if (document.querySelector(`[data-path=${menu}]`).classList.contains("active")) {
                clearTimeout(intervalId);
                document.querySelector(`[data-target=${menu}]`).classList.remove("menu-open")
                document.querySelector(`[data-plus=${menu}]`).classList.remove("plus-active")
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-path=${menu}]`).classList.remove("active")
                }, 0);
            }
        });
    });
});



// Плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        if (headerBurger.classList.contains("_active")) {
            document.body.classList.remove("burgerMode")
            headerBurger.classList.remove("_active")
            menuBody.classList.remove("_open")
        }

        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
};



// Burger menu 
const headerBurger = document.querySelector(".header__burger");
const menuBody = document.querySelector(".header__nav");

if (headerBurger) {
    headerBurger.addEventListener("click", function (e) {
        document.body.classList.toggle("burgerMode")
        headerBurger.classList.toggle("_active")
        menuBody.classList.toggle("_open")
    });
}



// slider
let slideIndex = 1;

showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}