const container = document.querySelector('.container')
let count = 0
 
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
    count++
  
  }else if(el.classList.contains('clicked') === true)  {
  
    alert('Game over')
    location.reload()
  }
  if (count === shuffleArr.length) {
    
    alert('You win')
     location.reload()
  }
  
   shuffleArr.forEach(item => item.animate([
    { transform: 'scale(1)', background: '#e0ebeb', opacity: 1, offset: 0 },
    { transform: 'scale(.5) rotate(270deg)', background: '#e0ebeb', opacity: 0, offset: .2 },
    { transform: 'scale(1) rotate(0deg)', background: '#e0ebeb', opacity: 1, offset: 1 },
  ], {
      duration: 2000, 
      easing: 'ease-in-out', 
      delay: 10, //milliseconds
      iterations:  2,
      direction: 'alternate', 
      fill: 'forwards' 
    }))
})



