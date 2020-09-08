let indexSlide = 1;
sixStep(indexSlide);


function thisSlide(n) {
    sixStep(indexSlide = n);
}

function sixStep(n) {
    let i;
    let slides = document.getElementsByClassName("stepWrapper");
    let myBtn = document.getElementsByClassName("stepsFromServicesPage");
    if (n > slides.length) {
        indexSlide = 1
    }
    if (n < 1) {
        indexSlide = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < myBtn.length; i++) {
        myBtn[i].className = myBtn[i].className.replace(" active", "");
    }
    slides[indexSlide - 1].style.display = "block";
    myBtn[indexSlide - 1].className += " active";
}