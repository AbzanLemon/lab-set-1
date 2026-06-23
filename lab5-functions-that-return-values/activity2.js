import * as activity from "./02-sun-burst";
import { drawGrid } from "@/utils/grid.js";
import { drawWithPause } from "@/utils/animatedDraw.js";
import { demoMode } from "@/utils/demoMode";

export function setup() {
    camera(300, -200, 700);
}

export function draw(t) {
    orbitControl();
    background(30);
    ambientLight(80);
    directionalLight(255, 255, 255, 1, 1, -1);
    drawGrid();
    noStroke();
    window.sin = Math.sin;
    drawWithPause(demoMode ? demo : activity.draw);
}

function height(n){
    if ( n % 2 == 0 ){
        return 100;
    } else {
        return 200;
    }
}

function demo() {
    fill(200,200,0);
    let n = 0;
    while ( n < 12 ){
        push();
        rotateZ(n * 360/12);
        translate(0,150,0);
        cone(20,50+height(n)/2);
        pop();
        n++;
    }
    fill(250,150,0);
    sphere();
}