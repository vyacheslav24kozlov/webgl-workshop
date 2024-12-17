/**Задание 3: Манипуляция цветом
Измените фрагментный шейдер, чтобы применить сепию или любой другой цветовой фильтр к текстуре.*/

precision mediump float;

varying vec2 vUvs;
uniform sampler2D uSampler2;

uniform bool uToggle;

const vec3 SEPIA_R = vec3(0.393, 0.769, 0.189);
const vec3 SEPIA_G = vec3(0.349, 0.686, 0.168);
const vec3 SEPIA_B = vec3(0.272, 0.534, 0.131);

void main() {
    vec3 color = texture2D(uSampler2, vUvs).rgb;

    float r = dot(color, SEPIA_R);
    float g = dot(color, SEPIA_G);
    float b = dot(color, SEPIA_B);

    gl_FragColor = uToggle ? vec4(vec3(r, g, b), 1.0) : vec4(color, 1.0);
}