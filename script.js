
const menu = document.getElementsByClassName('togle')[0]
const item = document.getElementsByClassName('nav-links')[0]

menu.addEventListener('click', function tog(){
    item.classList.toggle('active')
})