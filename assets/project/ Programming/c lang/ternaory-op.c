#include <stdio.h>  

int main() {
    int input;
    printf("Enter your number: "); 
    scanf("%d", &input);

    
    printf("%s\n", (input % 2 == 0) ? "The number is even" : "The number is odd");

    return 0;
}