
var player1 = document.getElementById('player1');
var healthbox = document.getElementById('health');
var scorebox = document.getElementById('score');

var leftSpeed = 0;
var topSpeed = 0;
var health = 100;
var score = 0;


window.addEventListener('keyup', function(e){
    console.log(window.innerWidth);
    if (e.key == 'ArrowUp'){
        topSpeed = -2;
        leftSpeed = 0;
    }
    if (e.key == 'ArrowDown'){
        topSpeed = 2;
        leftSpeed = 0;
    }
    if (e.key == 'ArrowLeft'){
        leftSpeed = -2;
        topSpeed = 0;
    }
    if (e.key == 'ArrowRight'){
        leftSpeed = 2;
        topSpeed = 0;
    }
})

function update(){
    var currentTop = player1.style.top.split('');
    var currentLeft = player1.style.left.split('');
    currentTop.pop();
    currentTop.pop();
    currentLeft.pop();
    currentLeft.pop();
    currentTop = currentTop.join('');
    currentLeft = currentLeft.join('');

    player1.style.left = Number(currentLeft) + leftSpeed + 'px';
    player1.style.top = Number(currentTop) + topSpeed + 'px';
    healthbox.innerText = health;
    scorebox.innerText = score;
    placeFood();
    
}

// function placeFood(){
//     var randomX = Math.floor(Math.random()*window.innerWidth);
//     var randomY = Math.floor(Math.random()*window.innerHeight);
//     var food = document.createElement("div");
//     food.className = 'food';
//     food.setAttribute('id', 'food');
//     document.getElementById('main_section').appendChild(food);
//     food1 = document.getElementById('food');
//     food1.style.left = randomX;
//     food1.style.top = randomY;
// }

function eat(){
    score += 20;
}

function collision(){
    health -= 10;
}

setInterval(function(){
    update();
}, 1000)


