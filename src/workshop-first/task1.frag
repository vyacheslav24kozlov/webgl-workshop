/**Задание 1: Добавление взаимодействия с мышью
Измените шейдер, чтобы текстура изменялась в зависимости от положения мыши, например, показывая волны или изменения цвета.*/

precision mediump float;

varying vec2 vUvs;
uniform sampler2D uSampler2;
uniform vec2 uMouse;

const vec2 CENTER_ANCHOR = vec2(0.5, 0.5);
const float AMPLITUDE = 10.0;

void main() {
    vec2 pos = vUvs;

    float dx = AMPLITUDE * (CENTER_ANCHOR.x - uMouse.x);
    float dy = AMPLITUDE * (CENTER_ANCHOR.y - uMouse.y);

    float dist = sqrt(dx*dx + dy*dy);
    float n = 0.1 * sin(dist - 2.0 * 3.14159 * vUvs.y);

    pos.x += 0.1 * n;
    pos.y += 0.15 * n;

    gl_FragColor = vec4(texture2D(uSampler2, pos));
}