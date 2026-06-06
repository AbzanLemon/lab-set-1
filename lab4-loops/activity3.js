import * as activity from "./03-n-sphere-loop";
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
    drawWithPause(demoMode ? demo : activity.draw);
}

function demo() {
    let count = 7;
    let distance = 300;
    translate(-(distance/2) * (count-1), 0, 0);
    let n = 0;
    while ( n < 7 ){
        sphere();
        translate(distance, 0, 0);
        n = n + 1;
    }
}