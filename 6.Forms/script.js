const text = document.querySelector('#firstname')
const span = document.querySelector('#display-firstname')

text.addEventListener("keyup", () => {
    span.textContent = text.value
});

const age = document.querySelector('#age')
const sectionAge = document.querySelector('#a-hard-truth')

age.addEventListener("keyup", () => {
    if (age.value >= 18) {
        sectionAge.style.visibility = "visible"
    } else {
        sectionAge.style.visibility = "hidden"
    }
});

age.addEventListener("click", () => {
    if (age.value >= 18) {
        sectionAge.style.visibility = "visible"
    } else {
        sectionAge.style.visibility = "hidden"
    }
});

const password1 = document.querySelector('#pwd')
const password2 = document.querySelector('#pwd-confirm')

age.addEventListener("keyup", () => {
    if(password1.value !== password2.value || password1.length < 6){
        /*Finir ici avec la couleur rouge*/
    }
});