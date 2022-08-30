///////SIMPLY-TAB/////////
const buttons = document.getElementById('buttons');
const contents = document.querySelectorAll('.head_section__text');

const changeClass = el =>
{
    for (let i = 0; i < buttons.children.length; i++) {
        buttons.children[i].classList.remove('active');
    }
    el.classList.add('active');
}


buttons.addEventListener('click', e =>
{
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
        if (contents[i].dataset.ctn === currTab) {
            contents[i].classList.add('active');
        }
    }
})


///////VANILLA-TAB/////////
const next = document.querySelector('.arrow_right'),
    prev = document.querySelector('.arrow_left'),
    slides = document.querySelectorAll('.reading_section__background'),
    dots = document.querySelectorAll('.dot');

let index = 0;


const activeSlide = n =>
{
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDots = n =>
{
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepareCurrentSlide = ind =>
{
    activeSlide(index);
    activeDots(index);
}

const nextSlide = () =>
{
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}


dots.forEach((item, indexDot) =>
{
    item.addEventListener('click', () =>
    {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})


const prevSlide = () =>
{
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}



next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

/////////////////////////АВТОСМЕНА КОНТЕНТА///////////////////////////////
var offset = 0;
var sliderlineImg = document.querySelectorAll('.queotes_section__background');

function nextImg()
{
    offset = offset + 35;
    if (offset > 235) {
        offset = 0;
    };
    sliderlineImg[0].style.left = -offset + 'rem';
    sliderlineImg[1].style.left = -offset + 'rem';
    sliderlineImg[2].style.left = -offset + 'rem';
    sliderlineImg[3].style.left = -offset + 'rem';
    sliderlineImg[4].style.left = -offset + 'rem';
    sliderlineImg[5].style.left = -offset + 'rem';
    sliderlineImg[6].style.left = -offset + 'rem';
}
console.log(sliderlineImg);
setInterval(nextImg, 4000);

/////////////ACCORDION//////////////////

var acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function ()
    {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

///////GAMBURGER///////
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function ()
{
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
//////////////LOCK SCROLL////////////////////
$(document).ready(function ()
{
    $('.menu-btn').click(function (event)
    {
        $('body').toggleClass('lock');
    });
});