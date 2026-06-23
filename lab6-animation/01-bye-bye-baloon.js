// -------------------------------------------------------
//  Bye Bye Baloon
//
//  For a warm up, make the baloon look more like my demo.
//  
//  Why is the sphere oblong?
//      https://p5js.org/reference/p5/scale/
//  
//  Then we'll talk about what t is doing, and that translate.
//
//  Then you'll make the baloon float away.
//
// -------------------------------------------------------
export function draw(t) {
    fill(200,10,10);
    translate(0, t, 0);

    //Draw a Red Baloon
    scale(1,1.2,1);
    sphere();
}