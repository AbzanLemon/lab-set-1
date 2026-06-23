// -------------------------------------------------------
//  Draw a sunburst
//
// -------------------------------------------------------
export function draw() {
    fill(255,255,0);    //Yellow

    let n = 0;
    while ( n < 12 ){
        push();
        rotateZ(n * 360/12);
        translate(0,150,0);
        cone(20,50+height(n)/2);
        pop();
        n++;
    }

    //Draw an orange sphere
    fill(255,150,0);
    sphere();
}

//This function RETURNS either 100 of n is even or
//200 if N is odd. Your job right now is not to understand
//how it works inside (but we can talk about it), but how
//we can use it
function height(n){
    if ( n % 2 == 0 ){
        return 100;
    } else {
        return 200;
    }
}