// -------------------------------------------------------
//  Falling Ball
//
//  HOLY CRAP THERE IS CALCULUS HIDDEN IN THIS THING
//
// -------------------------------------------------------


let position = -4;
let velocity = 0;
let gravity = 9.8;

function draw(time, deltaTime) {


    translate(0, position, 0);
    fill(50, 255, 50);
    sphere(.1);
}