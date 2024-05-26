#include <stdio.h>

int main(){
    int numbers[5] = {1,2,3,4,5};
    printf("%d\n", numbers[0]);

    int numbers1[5] = {1,2,3,4,5};
    printf("%d\n", numbers1[0]);



    int numbers2[5];
    //Adding Values one by one
    for (int i = 0; i < 5; i++)
    {
        scanf("%d",&numbers2[i]);

    }
    printf("[");
    //Printing values one by ones
    for (int j = 0; j < 5; j++)
    {
        printf("%d ",numbers2[j]);
    }
    printf("]\n");


    //Zero Array
    int zero[10] = {0};
    printf("%d\n",zero[9]);

    //Designated Initialization
    int dArray[10] = { [2]=3,[5]=6};
    printf("%d %d",dArray[2],dArray[9]);
}