const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  let wrapper = document.getElementsByClassName("displayedsquare-wrapper")[0]; // body element
  let newDiv = document.createElement("div");
  newDiv.classList.add("displayedsquare")
  newDiv.classList.add(e.target.classList[1])
  // append to body
  wrapper.appendChild(newDiv);
  actionLogSquare(e.target.classList[1])
}

let actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

function findBrightness(r, g, b) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

const body = document.querySelector('body')
body.addEventListener('keydown', (event) => {
  if (event.code === "Space") {
    changeBackgroundColor()
  }
  if (event.code === "KeyL") {
    /* Autre manière avec une boucle for */

    // let li = document.querySelectorAll('li')
    // for(let i = 0; i < li.length; i++){
    //   logs = li[i]
    //   logs.remove()
    // }


    let ul = document.querySelector('ul')
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild)
    }
  }
  if (event.code === "KeyS") {
    let div = document.querySelector(".displayedsquare-wrapper")
    while (div.firstChild) {
      div.removeChild(div.firstChild)
    }
  }
});
const randomColor = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

function changeBackgroundColor() {
  const r = randomColor(0, 255)
  const g = randomColor(0, 255)
  const b = randomColor(0, 255)
  const brightness = findBrightness(r, g, b)
  const rgbColor = `rgb(${r}, ${g}, ${b})`
  body.style.backgroundColor = rgbColor
  const h2 = document.querySelector('h2')
  h2.style.color = brightness < 128 ? 'white' : 'black'
  actionLog()
}

/* console */

function actionLog() {
  const r = randomColor(0, 255)
  const g = randomColor(0, 255)
  const b = randomColor(0, 255)
  const brightness = findBrightness(r, g, b)
  const li = document.createElement('li')
  const newElement = document.createTextNode(`[${getElapsedTime()}] Spacebar was used`)
  li.style.color = brightness < 128 ? 'white' : 'black'
  li.appendChild(newElement)
  const placeToInsert = document.querySelector('ul')
  placeToInsert.appendChild(li)
}

function actionLogSquare(color) {
  const li = document.createElement('li')
  const newElement = document.createTextNode(`[${getElapsedTime()}] Created a new ${color} square`)
  li.appendChild(newElement)
  const placeToInsert = document.querySelector('ul')
  placeToInsert.appendChild(li)
}

function alertColor(color) {
  let newContent = color
  return alert(newContent)
}

// function displayAnAlert(colorActionSquare) {
//   return alert(`${colorActionSquare} test`)
// }
// const div = document.querySelector(".displayedsquare-wrapper")
// // const divColor = divColor.style.color

// div.addEventListener('click', displayAnAlert)

actionSquares = document.querySelectorAll('.displayedsquare-wrapper')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnDisplaySquare)
}

function clickOnDisplaySquare(e) {
  alertColor(e.target.classList[1])
}



// https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color