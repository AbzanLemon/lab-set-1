import { vector } from "@/utils/vec3.js";
import * as activity from "./02-bounce-box-mayhem.js";
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


let position = vector(5, -4, 0);
let velocity = vector(-5, 0, 3.5);

let position2 = vector(-2, -3, 0);
let velocity2 = vector(-4, 0, 4.2);

let gravity = vector(0, 9.8, 0);

export function demo(t, dt) {
    position = position.plus(velocity.times(dt));
    velocity = velocity.plus(gravity.times(dt));
    if (position.y >= 0) {
        position.y = 0;
        velocity.y = -velocity.y;
        velocity.y = velocity.y;
    }
    if (position.x > 5) {
        position.x = 5;
        velocity.x = -velocity.x;
    }
    if (position.x < -5) {
        position.x = -5;
        velocity.x = -velocity.x;
    }
    if (position.z > 5) {
        position.z = 5;
        velocity.z = -velocity.z;
    }
    if (position.z < -5) {
        position.z = -5;
        velocity.z = -velocity.z;
    }
    push();
    translate(position.x, position.y, position.z);
    velocity = velocity.times(0.999);
    fill(50, 255, 50);
    sphere(.3);
    pop();

    position2 = position2.plus(velocity2.times(dt));
    velocity2 = velocity2.plus(gravity.times(dt));
    if (position2.y >= 0) {
        position2.y = 0;
        velocity2.y = -velocity2.y;
        velocity2.y = velocity2.y;
    }
    if (position2.x > 5) {
        position2.x = 5;
        velocity2.x = -velocity2.x;
    }
    if (position2.x < -5) {
        position2.x = -5;
        velocity2.x = -velocity2.x;
    }
    if (position2.z > 5) {
        position2.z = 5;
        velocity2.z = -velocity2.z;
    }
    if (position2.z < -5) {
        position2.z = -5;
        velocity2.z = -velocity2.z;
    }
    push();
    translate(position2.x, position2.y, position2.z);
    velocity2 = velocity2.times(0.999);
    fill(50, 50, 255);
    sphere(.3);
    pop();
}