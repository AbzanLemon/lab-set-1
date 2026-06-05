// -------------------------------------------------------
//  Variable Height trees specified by a parameter
//
//  This lab makes the height variable a PARAMETER
//
// -------------------------------------------------------

export function draw() {
    tree(100);
    translate(120, 0, 0);   //Translate right to next tree

    tree(150);
    translate(120, 0, 0);   //Translate right to next tree

    tree(75);
}

//Something new‼️The height variable is now a PARAMETER. You
//can use is to get different results from the tree function...
function tree(height) {

    //Your coode from the previous activity looks
    //something like this...
    push();
    translate(0, -height/2, 0);
    fill(150, 90, 20);
    cylinder(10, height);
    translate(0, -height/2 - 40, 0);
    fill(50, 180, 50);
    sphere();
    pop();
}