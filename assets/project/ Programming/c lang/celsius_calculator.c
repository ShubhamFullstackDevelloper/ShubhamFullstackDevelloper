#include <stdio.h>

int main() {
    int temperature;
    printf("Enter tem  number: ");
    scanf("%d", &temperature);  

    float output = temperature * 1.8 + 32;


    (temperature < 0) ? printf("The atmosphere is cool\n") 
                      : printf("The Fahrenheit temperature is: %.2f°F\n", output);

    return 0;
}