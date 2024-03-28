const hero = document.querySelector('.hero');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slides = document.querySelectorAll('.thumbnail');

var counter = 0;


const change =(imgPath)=>{
    let currentImg = imgPath.src;
    hero.style.backgroundImage = `url('${currentImg}')`;

}


slides.forEach(
    (slides,index) =>{
        slides.style.left = `${index * 100}%`
    }
)


left.addEventListener('click', function(){
    counter--
    slideImage()
})


right.addEventListener('click', function(){
    counter++
    slideImage()
})


const slideImage = () =>{
    slides.forEach(
        (thumbnail)=>{
            thumbnail.style.transform = `translateX(-${counter * 100}%)`; 
        }
    )
}