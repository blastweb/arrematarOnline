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

const openModalMenuButton2 = document.querySelector("#openMenu2");
const closeModalMenuButton2 = document.querySelector("#closeMenu2");
const modal2 = document.querySelector("#modalMenu2");
const fade2 = document.querySelector("#fadeMenu2");

const toggleModal2 = () => {
    modal2.classList.toggle("hide2");
    fade2.classList.toggle("hide2");
};

[openModalMenuButton2, closeModalMenuButton2].forEach((el) => {
    el.addEventListener("click", () => toggleModal2());
});