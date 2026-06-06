import * as activity from "./02-ten-sphere-loop";
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
    translate(-900, 0, 0);
    let n = 0;
    while ( n < 10 ){
        sphere();
        translate(200, 0, 0);
        n = n + 1;
    }
}