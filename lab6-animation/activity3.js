import * as activity from "./03-bounce-ball.js";
import { drawGrid } from "@/utils/grid.js";
import { drawWithPause } from "@/utils/animatedDraw.js";
import { demoMode } from "@/utils/demoMode";
import showTime from "@/utils/timer";

export function setup() {
    camera(300, -200, 700);
}

export function draw(t, dt) {
    scale(100);
    showTime(t);
    orbitControl();
    background(30);
    ambientLight(80);
    directionalLight(255, 255, 255, 1, 1, -1);
    drawGrid(10, 10);
    noStroke();
    window.sin = Math.sin;
    if (demoMode) {
        demo(t, dt);
    } else {
        activity.draw(t, dt);
    }
}


let position = -4;
let velocity = 0;
let gravity = 9.8;

function demo(t, dt) {
    position = position + velocity * dt;
    velocity = velocity + gravity * dt;

    if (position >= 0) {
        position = 0;
        velocity = -velocity;
        velocity = velocity * 0.8; // 0.8 = coefficient of restitution
    }

    translate(0, position, 0);
    fill(50, 255, 50);
    sphere(.1);
}