const important = document.querySelectorAll('.important')

important.forEach((element => {
    element.setAttribute("title", "This is an important item")
}))

const tags = document.querySelectorAll('img')

tags.forEach((element) => {
    if (!element.classList.contains('important')) {
        element.style.display = "none"
    }
});

const para = document.querySelectorAll('p')
const randomColor = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

para.forEach((element) => {
    console.log(element.textContent)
    if (element.className) {
        console.log(element.className)
    } else {
        const r = randomColor(0, 255)
        const g = randomColor(0, 255)
        const b = randomColor(0, 255)
        const rgbColor = `rgb(${r}, ${g}, ${b})`
        element.style.color = rgbColor
    }
});