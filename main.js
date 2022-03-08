let congratsBtn = document.querySelector('.congrats')
let heartContainer = document.querySelector('.heart-container')
const heartsRandom = () => {
  let timer = setInterval(() => {
    let heartdiv = document.createElement('div')
    heartdiv.className = 'heart'
    heartdiv.innerHTML = `&#128153;`
    heartdiv.style.left = `${Math.random() * 100}%`
    heartdiv.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s`
    let heartdiv2 = document.createElement('div')
    heartdiv2.className = 'heart'
    heartdiv2.innerHTML = `&#129505;`
    heartdiv2.style.left = `${Math.random() * 100}%`
    heartdiv2.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s`
    let heartdiv3 = document.createElement('div')
    heartdiv3.className = 'heart'
    heartdiv3.innerHTML = `&#128154;`
    heartdiv3.style.left = `${Math.random() * 100}%`
    heartdiv3.style.animationDuration = `${(Math.random() + 0.5) * 1.5}s`
    heartContainer.append(heartdiv)
    heartContainer.append(heartdiv2)
    heartContainer.append(heartdiv3)
  }, 50)

  setTimeout(() => {
    clearInterval(timer)
  }, 5000)
  setTimeout(() => {
    heartContainer.innerHTML = ''
  }, 8000)
}
congratsBtn.addEventListener('click', () => {
  heartsRandom()
})
