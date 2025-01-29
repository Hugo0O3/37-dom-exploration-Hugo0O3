const title = document.querySelector('title').textContent = 'Modifying the DOM'
console.log(document.title)

const randomColor = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = randomColor(0, 255)
const g = randomColor(0, 255)
const b = randomColor(0, 255)
const rgbColor = `rgb(${r}, ${g}, ${b})`

const body = document.querySelector('body').style.backgroundColor = rgbColor

for(const children of document.body.children[1].children){
    console.log(children)
}