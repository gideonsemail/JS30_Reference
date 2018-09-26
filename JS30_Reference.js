
// SELECTING EXAMPLES
let hero = document.querySelector('.hero');
let text = hero.querySelector('h1');
let p = document.createElement('p')
let words = document.querySelector(".words")
words.appendChild(p);
let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);


// EVENT LISTENER EXAMPLES
variable.addEventListener('event', fuxion to run or the name of the funxion itself)

'mousemove', 'mouseup', 'mouseout',
'mousedown', 'mouseleave'
'click'
'play'
'pause'
'timeupdate'
'change'
'transitionend'
'keyup'
'result'


//  METHOD EXAMPLES

// Arrays. Copying nondestructively
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy']
let team2 = players.slice()
let team3 = [].concat(players)
let team4 = [...players]


window.innerWidth, window.innerHeight
.join('')
.includes //if(e.propertyName.includes("flex")
.replace(something, withthisotherthing)
.innerHTML or .textContent
.currentTime
this.value, this.name (within a funcxion)
parseFloat(something)
video.pause, video.play, video.duration
audio.play()
key.classList.add('playing'); classList.remove('playing')
this.classList.value, this.classList.toggle("open")
getboundingClientRect() //all the info on where on the page an element lives.
offsetX
offsetY

console.table(randomvariable)
console.log(this)/ within a funxion
console.dir(p)//open up and look at classlist, children, style, all the methods and properties etc...on that element.
console.count(something)
// API endpoint fetching and seeing how long something takes.
console.time("fetching data")
fetch("https://api.github.com/users/wesbos")
.then(data => data.json)
.then(data => {
  console.timeEnd("fetching data");
  console.log(data);

JSON.stringify(items)// pass in an object to convert to string
JSON.parse // convert back to object

/* converting the original links to an array. Two ways:*/
 Array.from(category.querySelectorAll('a'))
/*ES6 spread operator takes every item OUT of something and put it into the containing array*/
[...category.querySelectorAll('a')]

// clock css example
 .hand {
  /*rotate it at the far Right X axis instead of the middle*/
  transform-origin: 100%;
  /*2)roate the 2nd hand.*/
  transform:rotate(90deg);
  /*3 make the effect fast at 0.05*/
  transition: all 0.05s;
}
let minutes = now.getMinutes()
let minutesDegrees = ((minutes/60) * 360) + 90;
hourHand.style.transform = `rotate(${minutesDegrees}deg)`

variablenamehere.style.width,
style.height,
style.color,
h1.style.fontSize

e.target //e being event argument in a function.
e.stopPropagation
e.preventDefault
e.propertyName


// FUNCTION EXAMPLES

function makeGreen() {
  let p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

function removeTransition(e) {
  if(e.propertyName !== 'transform') return//skip it if it not a transform
  }


variablehere = !oppositeofvariablehere
