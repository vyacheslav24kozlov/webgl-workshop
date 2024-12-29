/**Задание 5: Искажение волной
Добавьте эффект искажения синусоидальной волной текстуре, используя uniform uTime для анимации UV-координат.*/

precision mediump float;

varying vec2 vUvs;

uniform sampler2D uSampler2;

uniform float uTime;

const float AMPLITUDE = 0.05;


void main() {
    vec2 uv = vUvs;
    uv.x += AMPLITUDE * sin(uTime);
    uv.y += AMPLITUDE * sin(uTime);
    gl_FragColor = texture2D(uSampler2, uv);
}