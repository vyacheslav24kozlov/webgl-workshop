/**Задание 6: Создание градиентного фона
Используйте шейдер для рендеринга динамического градиентного фона за текстурой, изменяя цвета в зависимости от положения.*/

precision mediump float;

varying vec2 vUvs;

uniform sampler2D uSampler2;

uniform float uTime;

void main() {
    vec2 uv = vUvs;

    vec4 textureColor = texture2D(uSampler2, vUvs);

    // Определяем цвет для градиента
    vec3 color1 = vec3(0.2, 0.3, 0.8); // Нижний цвет
    vec3 color2 = vec3(0.9, 0.2, 0.5); // Верхний цвет

    // Создаем градиентное смешивание на основе Y-координаты и динамики времени
    float gradient = smoothstep(0.0, 1.0, uv.y + 0.1 * sin(uTime * 0.5));

    // Генерируем итоговый цвет фона
    vec3 gradientColor = mix(color1, color2, gradient);

    gl_FragColor = mix(vec4(gradientColor, 1.0), textureColor, textureColor.a);
}