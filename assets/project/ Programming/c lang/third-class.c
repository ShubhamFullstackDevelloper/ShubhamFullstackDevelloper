#include <stdio.h>

int main() {
    int age;
    printf("enter your age");
    scanf("%d",&age);
    if(age>=18){
        printf(" you are eligiable for vote.\n");
    }else{
        printf("you are not eligible for vote\n");
    }
    
}
