const navToggle = document.querySelector(".navbar_toggle")
const links = document.querySelector(".main_nav")

navToggle.addEventListener('click', () => {
    if(links.classList.toggle("show_nav")){
        window.onscroll =  function (){
            window.scrollTo(0, 0);
        }

    }else {
        window.onscroll = () => {
            window.scroll()
        }
    }
})

const mainPhoto = document.querySelector('.main-img')
const template = document.querySelector('.template')
const preview = document.querySelector('.preview')

const array = ['./images/template.jpeg', './images/Preview.jpeg']

template.addEventListener('click', () => {
    mainPhoto.src = array[0]
})

preview.addEventListener('click', () => {
    mainPhoto.src = array[1]
})