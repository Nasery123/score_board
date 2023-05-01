let homescore = 0;
let awayscore = 0;

let homeElement = document.getElementById('hscore');
let awayElement = document.getElementById('ascore');
//home.textContent = 0;
//away.textContent = 0;

function homescore1(){
    homescore++;
    drawScores()

}
function awayscore1(){
    awayscore++;
    drawScores()
}
function homescore3(){
    homescore += 3;
    drawScores()

}
function awayscore3(){
    awayscore += 3;
    drawScores()
}
function drawScores(){
    homeElement.textContent = homescore;
    awayElement.textContent = awayscore;
}
function reset(){
    homescore = 0;
    awayscore = 0;
    homeElement.textContent = homescore;
    awayElement.textContent = awayscore;
}
