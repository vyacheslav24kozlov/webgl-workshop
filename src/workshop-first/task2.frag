/**Задание 2 : Интерактивный эффект тени
Симулируйте отбрасываемые тени, которые перемещаются со световым источником, управляемым вводом пользователя.*/

precision mediump float;

varying vec2 vUvs;
uniform sampler2D uSampler2;
uniform vec2 uClick;

const float BRIGHTNESS = 1.5;

void main() {
    vec4 texture = texture2D(uSampler2, vUvs);

    vec2 lightPosition = uClick;
    float distanceToLight = length(lightPosition.xy - vUvs.xy);

    //функция затухания от светлого к темному
    float shadow = smoothstep(1.0, 0.0, distanceToLight);
    gl_FragColor = vec4(vec3(texture.rgb * shadow * BRIGHTNESS), 1.0);
}