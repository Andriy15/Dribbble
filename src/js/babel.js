const navToggle = document.querySelector(".navbar_toggle")
const links = document.querySelector(".main_nav")
const btnSearch = document.querySelector('.btn-search')

btnSearch.addEventListener('click', () => {
    const promise = new Promise(resolve => {
        setTimeout(() => {
            alert('No result')
        }, 3000)
        resolve()
    })
    return promise
})


navToggle.addEventListener('click', () => {
    if(links.classList.toggle("show_nav")){
        window.onscroll =  function (){
            window.scrollTo(0, 0)
        }

    }else {
        window.onscroll = () => {
            window.scroll()
        }
    }
})

const slides = document.querySelectorAll(".slide")

// loop through slides and set each slides translateX property to index * 100%
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`
});

// select next slide button
const nextSlide = document.querySelector(".btn-next")
const prevSlide = document.querySelector('.btn-prev')

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
    // check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
        curSlide = 0
    } else {
        curSlide++
    }

//   move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`
    });
});

prevSlide.addEventListener('click', () => {
    if (curSlide != maxSlide) {
        curSlide = 1
    } else {
        curSlide--
    }

//   move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`
    })
})











