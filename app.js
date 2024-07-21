const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
let changeBG

start.addEventListener('click', function(e){
    clearInterval(changeBG)
    changeBG = setInterval(function(){
        document.body.style.backgroundColor = randomColor();
    }, 300)
})

stop.addEventListener('click', function(e){
    clearInterval(changeBG)
})

