//bubble sort
#include<iostream>
using namespace std;

int main(){
    int n,temp;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }

    for(int i=0;i<n-1;i++){//outer loop
        for(int j=0;j<n-i-1;j++){//inner loop
            if(arr[j]>arr[j+1]){
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
}