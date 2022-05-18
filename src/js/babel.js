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