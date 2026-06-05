// -------------------------------------------------------
//  A Lollipop Forest
//
//  
//
//  https://p5js.org/reference/p5/cylinder/
//  https://p5js.org/reference/p5/fill/
//  https://p5js.org/reference/p5/translate/
//  https://p5js.org/reference/p5/sphere/
//
// -------------------------------------------------------

export function draw() {
    //TODO Remove Code

    //2️⃣ Copy your code from Activity 3, but replace each block
    //of code that draws a tree with one line that calls the tree function
    tree();

    // Translate 120 units Right and 140 down
    translate(120, 140, 0);

    //Copy and paste your tree code again
    tree();

    //Translate 120 units Right and 140 down
    translate(120, 140, 0);

    //Copy and paste your tree code again
    tree();
}

function tree() {
    //TODO Remove Code
    
    //1️⃣ Copy and paste your 6 lines of tree code from Activity 3.
    //(Just the code to draw ONE tree)
    translate(0, -50, 0);
    fill(150, 90, 20);
    cylinder(10, 100);
    translate(0, -90, 0);
    fill(50, 180, 50);
    sphere();
}