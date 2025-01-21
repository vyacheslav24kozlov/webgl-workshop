/**Задание 7: Анимация шейдера
Используйте uniform uTime для циклического изменения цвета кромки между несколькими цветами в течение времени.*/

precision mediump float;

varying vec2 vUvs;

uniform sampler2D uSampler2;

uniform float uTime;

const float EDGE_THINKNESS = 0.01;

bool isEdge;

void main() {
    float reducedTime = uTime / 5.0;

    vec4 textureColor = texture2D(uSampler2, vUvs);

    // Является ли текущая координата частью кромки
    isEdge = (vUvs.x < EDGE_THINKNESS) || (vUvs.x > 1.0 - EDGE_THINKNESS) || (vUvs.y < EDGE_THINKNESS) || (vUvs.y > 1.0 - EDGE_THINKNESS);

    // Генерация цикличного цвета на основе времени
    vec4 edgeColor = vec4(0.5 + 0.5 * sin(reducedTime), 0.5 + 0.5 * sin(reducedTime + 2.0), 0.5 + 0.5 * sin(reducedTime + 4.0), 1.0);

    vec4 finalColor = isEdge ? edgeColor : textureColor;

    gl_FragColor = finalColor;
}