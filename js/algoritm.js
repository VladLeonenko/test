/* Индекс слайда по умолчанию */

let numberStep = 1;
showStepSlide(numberStep);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusStepSlide() {
    showStepSlide(numberStep += 1);

}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusStepSlide() {
    showStepSlide(numberStep -= 1);
}

/* Устанавливает текущий слайд */
function currentNumberStep(n) {
    showStepSlide(numberStep = n);
}


let n = document.getElementById('numeral')
/*Ункция меняющая цифру*/

function changeNumber() {
    if (numberStep < 7){
        n.innerHTML = numberStep
    }
}




/* Основная функция слайдера */
function showStepSlide(n) {
    let i;
    let stepContext = document.getElementsByClassName("stepWrapper");
    if (n > stepContext.length) {
        numberStep = 1
    }
    if (n < 1) {
        numberStep = stepContext.length
    }
    for (i = 0; i < stepContext.length; i++) {
        stepContext[i].style.display = "none";
    }
    stepContext[numberStep - 1].style.display = "block";
}