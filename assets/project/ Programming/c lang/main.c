#include <stdio.h>

int main() {
    int orginalprice;
    printf("Enter the original price: ");
    scanf("%d", &orginalprice);

    int sellingPrice;
    printf("Enter the selling price: ");
    scanf("%d", &sellingPrice);

    if (sellingPrice > orginalprice) {
        int profit = sellingPrice - orginalprice;
        float profitpercent = ((float)profit / orginalprice) * 100;
        printf("You made a profit of %d\n", profit);
        printf("Profit percentage is %.2f%%\n", profitpercent);
    } 
    else if (sellingPrice < orginalprice) {
        int loss = orginalprice - sellingPrice;
        float losspercent = ((float)loss / orginalprice) * 100;
        printf("You made a loss of %d\n", loss);
        printf("Loss percentage is %.2f%%\n", losspercent);
    } 
    else {
        printf("You have no profit and no loss.\n");
    }

    return 0;
}