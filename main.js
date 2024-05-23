$(document).ready(function(){
    $('.banner-topo').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows:false,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    
                }
            }
        ]
    });
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