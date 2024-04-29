////Task 1
const numbers = [1, 2, 3, 4, 5]
function calculateSum() {
    const sum = _.sum(numbers)
    console.log('Сумма :', sum)
}
window.addEventListener('scroll', _.throttle(calculateSum, 2000))

///Task 2
window.addEventListener('scroll', function() {
    changeBackgroundColor();
  });
function changeBackgroundColor() {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / maxScroll) * 100;

    const red = Math.round((scrollPercentage / 100) * 255);
    const blue = Math.round(255 - ((scrollPercentage / 100) * 255));
    const color = 'rgb(' + red + ', 0, ' + blue + ')';
    
    document.body.style.backgroundColor = color;
}

///Task 3
const message = document.querySelector('.message')
window.addEventListener('scroll', function () {
    let scrollPosition = this.window.scrollY
    let maxScroll = this.document.documentElement.scrollHeight - this.window.innerHeight
    if (scrollPosition >= maxScroll) {
        message.style.display = 'block'
    } else {
        message.style.display = 'none'
    }
})

////Task 4
const nav = document.querySelector('.nav')
let prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', function () {
    let currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
    prevScrollpos = currentScrollpos;
});

////Task 5
const button = document.querySelector('.btn')
window.addEventListener('scroll',function(){
    if(this.window.pageYOffset > 100){
        button.style.display = 'block'
    } else{
        button.style.display = 'none'
    }
})

////Task 6

