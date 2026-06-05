// -------------------------------------------------------
//  Variable Height Tree
//
//  This lab adds a variable in the tree() function. You can
//  use it in place of a number, and even do math with it
//
//  How do I specify the sphere's radius?
//    https://p5js.org/reference/p5/sphere/
//
// -------------------------------------------------------

export function draw() {
    tree();
    translate(120, 0, 0);   //Translate right to next tree

    tree();
    translate(120, 0, 0);   //Translate right to next tree

    tree();
}

function tree() {
    //This is a "variable." It's like in math class where we say "N equals two"
    //and if I ask you "what is three times N?" you say "Six"
    let height = 150;

    //1️⃣ Use the height variable like a number to set the height of your tree.
    //When you change it and save this file the heights of the trees should change!
    //Try heights of 50, 100, 200 and 300 and make sure it works.
    push();
    translate(0, -50, 0);
    fill(150, 90, 20);
    cylinder(10, 100);
    translate(0, -90, 0);
    fill(50, 180, 50);
    sphere();
    pop();

    //2️⃣ Can you create a second variable and specify the radius of the green sphere?
}