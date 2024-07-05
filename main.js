const swiper = new Swiper('.swiper', {
    // Optional parameters
    cssMode: false,
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard:true,
    autoHeight: true,
    autoplay:{delay: 5000, pauseOnMouseEnter:true},
});

const openModalMenuButton = document.querySelector("#openMenu");
const closeModalMenuButton = document.querySelector("#closeMenu");
const modal = document.querySelector("#modalMenu");
const fade = document.querySelector("#fadeMenu");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};

[openModalMenuButton, closeModalMenuButton].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});
