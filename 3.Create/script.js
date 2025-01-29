const learners = ["test", "prout", "noob"]

const randomColor = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

const article = document.querySelector('article')

function findBrightness(r, g, b) {
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

const sections = []

learners.forEach(learner => {
    const r = randomColor(0, 255)
    const g = randomColor(0, 255)
    const b = randomColor(0, 255)
    const rgbColor = `rgb(${r}, ${g}, ${b})`

    const brightness = findBrightness(r, g, b)
    
    const section = document.createElement('section')
    const para = document.createElement('p')
    para.textContent = learner

    section.style.backgroundColor = rgbColor

    para.style.color = brightness < 128 ? 'white' : 'black'

    section.appendChild(para)

    sections.push(section)
});

sections.sort(() => Math.random() - 0.5)

const h2 = article.querySelector('h2')

const paraSort = Array.from(article.querySelectorAll('p'))
paraSort.sort(() => Math.random() - 0.5)

article.innerHTML = ""
article.appendChild(h2)

paraSort.forEach((p) => article.appendChild(p))

sections.forEach(section => article.appendChild(section))