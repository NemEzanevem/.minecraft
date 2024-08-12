#version 150

#moj_import <brandonscore:math.glsl>

uniform float time;
uniform float intensity;

in vec2 texCoord0;

out vec4 fragColor;

void main() {
    vec3 coord = vec3(texCoord0, 0);
    float iCap = max(0, min(1, intensity));
    float yModifier = max(0, max(1 - (coord.y * 5), (coord.y - 0.8) * 5));
    float brightness = (1.4 + (yModifier * 1.2 * iCap)) * max(-0.4, intensity);
    float offline = min(0, intensity) * -1;
    float density = 10;
    float bShift = max(0, pow(intensity,0.7) - 1.0);

    for(int i = 1; i <= 7; i++)
    {
        float power = pow(2, float(i));
        brightness += min((1.5 / power) - intensity/2, 1) * max(snoise(coord + vec3(0, 0, time * 0.01), power * density), -1 + (offline * 1.5));
    }


    fragColor = vec4(min(1,brightness) - bShift, (pow(max(0,brightness), 2.0) * 0.4 * iCap) - bShift*3, pow(brightness ,3.0) * 0.15 * iCap, 1.0);
}
