var slideShow = document.getElementById('slide-show')
var imagesAndGifs = "images&gifs/"
var images = [
    "coding.gif",
    "gaming.gif",
    "rubikscubegif.gif"
]

var timer = 0
setInterval(() => {
if(timer == 3){
    timer = 0
    interval = 100
}
slideShow.src = imagesAndGifs + images[timer]
timer++
}, 1800)