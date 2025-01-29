const ol = document.querySelector('ol')
const lastLi = ol.lastElementChild
ol.prepend(lastLi)

const h2 = document.querySelectorAll('h2')
const sections = document.querySelectorAll('section')
const h2Deux = sections[1].querySelector('h2')
const h2Trois = sections[2].querySelector('h2')

sections[1].replaceChild(h2Trois, h2Deux)
sections[2].prepend(h2Deux)

sections[2].remove()