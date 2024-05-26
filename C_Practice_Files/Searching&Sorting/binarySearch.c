#include <stdio.h>

//binarySearch Function
int binarySearch(int n, int arr[50], int v){
    int l = 0, r=n-1, mid;
    while(l<=r){
        
        mid = (l+r)/2;
        if(arr[mid]==v){
            return mid;
        }else if(v>arr[mid]){
            l = mid+1;
        }else{
            r = mid -1;
        }
        
    }
    return -1;
}

int main(){
    int num, arr[50],v;
    //taking no of elements
    scanf("%d",&num);
    //Inputs values to array
    for(int i=0; i<num; i++){
        scanf("%d ", &arr[i]);
    }
    //Taking the number to find
    scanf("%d",&v);
    //excuting binarySearch
    v = binarySearch(num, arr,v );
    //printing the Index
    printf("Index: %d\n",v);
    

}