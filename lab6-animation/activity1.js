import * as activity from "./01-bye-bye-baloon";
import { drawGrid } from "@/utils/grid.js";
import { demoMode } from "@/utils/demoMode";
import showTime from "@/utils/timer";

export function setup() {
    camera(300, -200, 700);
}

export function draw(t) {
    showTime(t);
    orbitControl();
    background(30);
    ambientLight(80);
    directionalLight(255, 255, 255, 1, 1, -1);
    drawGrid();
    noStroke();
    window.sin = Math.sin;
    if ( demoMode ){
        demo(t);
    } else {
        activity.draw(t);
    }
}

function demo(t) {
    fill(200,10,10);
    translate(0, -t*100, 0);

    scale(1,1.2,1);
    sphere();
    scale(1);
    translate(0,50, 0);
    rotateZ(180);
    cone(10,10);
    fill(200);
    translate(0,-150,0);
    cylinder(2,300);
}