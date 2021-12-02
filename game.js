const container = document.querySelector('.container')
let arr1 = []
 
function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5)
}

container.addEventListener('click', (e) => {
  const el = e.target

   const shuffleArr = [...container.children]
  if (el.matches('img')) {
    shuffle(shuffleArr)
    container.append(...shuffleArr)
  }
  if (el.classList.contains('clicked') !== true) {
    el.classList.add("clicked")
    arr1.push(1)
    console.log(123,arr1)
   console.log('added')
  }else if(el.classList.contains('clicked') === true)  {
    endGame('Game over')
    location.reload()
  }
  if (arr1.length === shuffleArr.length) {
    endGame('You win')
     location.reload()
  }
  
   shuffleArr.forEach(item => item.animate([
    { transform: 'scale(1)', background: '#e0ebeb', opacity: 1, offset: 0 },
    { transform: 'scale(.5) rotate(270deg)', background: '#e0ebeb', opacity: 0, offset: .2 },
    { transform: 'scale(1) rotate(0deg)', background: '#e0ebeb', opacity: 1, offset: 1 },
  ], {
      duration: 2000, //milliseconds
      easing: 'ease-in-out', //'linear', a bezier curve, etc.
      delay: 10, //milliseconds
      iterations:  2, //or a number
      direction: 'alternate', //'normal', 'reverse', etc.
      fill: 'forwards' //'backwards', 'both', 'none', 'auto'
    }))
})

function endGame(str) {
alert(str)

  
}

