// const carouselText = [
//     '01 Мы не оставим вас в трудную минуту, сделаем ТЗ и брифы вместе с вами.\n Первым шагом на пути к финишу - является знакомство.\n Изучение Вашего бизнеса, конкурентов и целевой аудитории поможет нам выстроить правильный алгоритм работы',
//     '02 Отрисовка дизайна сайта, написание чёткого ТЗ и изготовление макетов. \n На данном этапе мы с вами уже будем понимать как будет выглядить наш сайт. \n Осталось дело за главным..',
//     '03 Вёрстка и программирование сайта. Самый важный и трудоёмкий процесс. \n На разработку сайта '
// ]
// const sliderText = document.getElementById('slidertext')
// const leftButton = document.getElementById('scrollleft')
// const rightButton = document.getElementById('scrollright')
//
// function scrollSlider () {
//     let i = 0
//     sliderText.innerHTML = carouselText[0]
//
//
//     rightButton.addEventListener('click', function () {
//         i++
//         if (i == carouselText.length) {
//             i = 0
//         }
//         sliderText.innerHTML = carouselText[i]
//     })
//
//
//     leftButton.addEventListener('click', function () {
//         i--
//         if (i == -1) {
//             i = carouselText.length - 1
//         }
//         sliderText.innerHTML = carouselText[i]
//     })
// }
//
// scrollSlider()

/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}