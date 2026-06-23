import * as activity from "./04-another-snowman";
import { drawGrid } from "@/utils/grid.js";
import { drawWithPause } from "@/utils/animatedDraw.js";
import { demoMode } from "@/utils/demoMode";

export function setup() {
    camera(300, -200, 700);
}

export function draw(t) {
    orbitControl();
    background(100, 110, 180);
    ambientLight(120);
    directionalLight(255, 255, 255, 1, 3, -1);
    
    if ( !demo )
        drawGrid();
    noStroke();
    
    drawingContext.enable(drawingContext.CULL_FACE);
    drawingContext.cullFace(drawingContext.FRONT);

    drawWithPause(demoMode ? demo : activity.draw);
}

function demo() {
    //Wood disk
    push();
    fill(100, 75, 0);
    translate(0, 50, 0);
    cylinder(300, 100);
    translate(0, 75, 0);
    cylinder(350, 100);
    pop();

    fill(200);
    cylinder(280, 30);

    push();
    translate(-100, 0, -50);
    pineTree();
    pop();

    push();
    translate(150, 0, -50);
    pineTree();
    pop();

    push();
    translate(0, 0, 50);
    snowMan();
    pop();

    translate(0, -140, 0);
    fill(200, 200, 200, 100);
    specularMaterial(20,20,20);
    shininess(190);
    sphere(310);
    specularMaterial(0);
}

function pineTree() {
    push();
    translate(0, -50, 0);
    fill(150, 90, 20);
    cylinder(10, 100);
    translate(0, -90, 0);

    rotateX(180);

    fill(50, 180, 50);
    cone(50, 120);
    pop();
}

function snowMan() {
    push();

    fill(200);
    translate(0, -50, 0);
    sphere(70);
    translate(0, -90, 0);
    sphere(50);
    translate(0, -70, 0);
    sphere(30);

    fill(50);
    translate(0, -20, 0);
    cylinder(40, 10);
    translate(0, -20, 0);
    cylinder(20, 50);

    pop();
}