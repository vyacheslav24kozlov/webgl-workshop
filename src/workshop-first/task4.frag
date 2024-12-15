precision mediump float;

varying vec2 vUvs;

uniform sampler2D uSampler2;

void main() {
    vec3 texture = texture2D(uSampler2, vUvs).rgb;
    vec3 coefficient = vec3(0.299, 0.587, 0.114);
    float grayShade = dot(texture, coefficient);

    gl_FragColor = vec4(vec3(grayShade), 1.0);
}