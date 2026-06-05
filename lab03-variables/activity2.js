import * as activity from "./02-variable-height-param.js";
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

function tree(height) {
    push();
    translate(0, -height/2, 0);
    fill(150, 90, 20);
    cylinder(10, height);
    translate(0, -height/2 - 40, 0);
    fill(50, 180, 50);
    sphere();
    pop();

}

function demo() {
    tree(100);

    translate(120, 0, 0);

    tree(150);

    translate(120, 0, 0);

    tree(75);
}