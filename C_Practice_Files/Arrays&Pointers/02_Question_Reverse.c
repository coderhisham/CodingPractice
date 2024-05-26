#include <stdio.h>

int main(){
    int a[5];
    for (int i = 0; i < 5; i++)
    {
        scanf("%d",&a[i]);
    }
    printf("[");
    for (int i = 5-1; i >= 0; i--)
    {
        printf("%d ",a[i]);
    }
    
    printf("]");
}