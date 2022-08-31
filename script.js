var machine = document.getElementById("machine");
var block1 = document.getElementById("block1");
var block2 = document.getElementById("block2");
var block3 = document.getElementById("block3");
var block4 = document.getElementById("block4");
var block5 = document.getElementById("block5");
var heart = document.getElementById("heart");
var timer = document.getElementById("timer");
var text = document.getElementById("text");
var points = 3;
var xp = 0;
var cooldown = 10;
var highxp = 0;

block1.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 27);
    block1.style.left = random + "%";
    xp += 1;
});
block2.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 27);
    block2.style.left = random + "%";
    xp += 1;
});
block3.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 27);
    block3.style.left = random + "%";
    xp += 1;
});
block4.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 27);
    block4.style.left = random + "%";
    xp += 1;
});
block5.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 27);
    block5.style.left = random + "%";
    xp += 1;
});
timer.addEventListener('animationiteration',() =>{
    isCollide(block1);
    isCollide(block2);
    isCollide(block3);
    isCollide(block4);
    isCollide(block5);
    if(points==3){heart.textContent = "❤ ❤ ❤"}
    else if(points==2){heart.textContent = "❤ ❤"}
    else if(points==1){heart.textContent = "❤"}
    else if(points==0){
        if(xp>highxp){highxp=xp;}
        alert("\t\t\t\t\tGame over.\t\t\t\t\t\nYour score: "+(xp) + "\nThe highest score: " + (highxp));
        xp = 0;
        points = 3;
        machine.style.left = 0;
        machine.style.top = 0;
    }
})

function isOnGame(left,top){
    if(parseInt(window.getComputedStyle(machine).getPropertyValue("left")) + left < 400 &&
       parseInt(window.getComputedStyle(machine).getPropertyValue("top")) + top < 480 &&
       parseInt(window.getComputedStyle(machine).getPropertyValue("left")) + left >= 0 &&
       parseInt(window.getComputedStyle(machine).getPropertyValue("top")) + top >= 0
    )
    {
        return true;
    }
    else{
        return false;
    }
}

function isCollide(block) {
    if( 
        parseInt(window.getComputedStyle(machine).getPropertyValue("left")) < parseInt(window.getComputedStyle(block).getPropertyValue("left")) + 30 &&
        parseInt(window.getComputedStyle(machine).getPropertyValue("left")) + 20 > parseInt(window.getComputedStyle(block).getPropertyValue("left")) &&
        parseInt(window.getComputedStyle(machine).getPropertyValue("top")) < parseInt(window.getComputedStyle(block).getPropertyValue("top")) + 35 &&
        parseInt(window.getComputedStyle(machine).getPropertyValue("top")) + 30 > parseInt(window.getComputedStyle(block).getPropertyValue("top")) &&
        cooldown == 0 && machine.style.visibility == "visible"
    ) {
        points -=1;
        cooldown = 10;
    }
    else{
        cooldown -= 0.1;
        if(cooldown<0){ 
            cooldown=0; 
        }
        return;
    }
}

window.addEventListener('load', () =>{
    machine.style.position = 'absolute';
    machine.style.left = 0;
    machine.style.top = 0;
});

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'a':
            if(isOnGame(-20,0)==true){
                machine.style.left = parseInt(machine.style.left) - 20 + 'px';
            }
            break;
        case 'd':
            if(isOnGame(20,0)==true){
                machine.style.left = parseInt(machine.style.left) + 20 + 'px';
            }
            break;
        case 'w':
            if(isOnGame(0,-20)==true){
                machine.style.top = parseInt(machine.style.top) - 20 + 'px';
            }
            break;
        case 's':
            if(isOnGame(0,20)==true){
                machine.style.top = parseInt(machine.style.top) + 20 + 'px';
            }
            break;
        case 'p':
            machine.style.visibility = "visible";
            text.style.visibility = "hidden";
            break;
        default:
            break;
       }
});
