#include <stdio.h>

int main(){
    int a[] = {1,8,7,5,7,7,8,9,1,6,1,8};
    printf("Size of Whole Array: %d\n",sizeof(a));
    printf("Size of Single element: %d\n",sizeof(a[0]));
    printf("Total number of elements in Array: %d",sizeof(a)/sizeof(a[0]));

}