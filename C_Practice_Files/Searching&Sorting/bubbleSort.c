#include <stdio.h>

//Bubble Sort Function
int bubbleSort( int n, int arr[50]){
    int temp=0;
    
    for(int i=0; i<n-1; i++){
        for(int j=0; j<n-1-i; j++){
            if(arr[j]>arr[j+1]){
                //Swapping
                temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    //Printing Values
    for(int i=0; i<n; i++){
        printf("%d ",arr[i]);
    }
}

int main(){

    int num, arr[50];
    //taking no of elements
    scanf("%d",&num);
    //Inputs values to array
    for(int i=0; i<num; i++){
        scanf("%d ", &arr[i]);
    }
    //Excecuting bubbleSort;
    bubbleSort(num, arr);

}