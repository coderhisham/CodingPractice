#include<iostream>
using namespace std;

void swap(int arr[], int a, int b) {
    int temp=arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}

void heapify(int arr[], int n, int i) {
    int l=2*i+1;
    int r=2*i+2;
    int largest=i;
    if(l<n && arr[l]>arr[largest]) {
        largest=l;
    }
    if(r<n && arr[r]>arr[largest]) {
        largest=r;
    }
    if(largest!=i) {
        swap(arr, i, largest);
        heapify(arr, n, largest);
    }
}

void deleteByValue(int arr[], int& size, int value  ){
    int i;
    for(i=0;i<size;i++) {
        if(arr[i]==value) {
            break;
        }
    }
    swap(arr,i,size-1);
    size--;

    while (i<size) {
        heapify(arr, size , i);
    }


}

void insertMinHeap(int arr[], int& size, int value) {
    size++;
    int i=size-1;
    arr[i]=value;  //current
    // (i-1)/2 => Parent index i=>Child

    while(i!=0 && arr[(i-1)/2]>arr[i]) {
        swap(arr,(i-1)/2,i);
        i=(i-1)/2;
    }
}

void insertMaxHeap(int arr[], int& size, int value) {
    size++;
    int i=size-1;
    arr[i]=value;  //current
    // (i-1)/2 => Parent index i=>Child

    while(i!=0 && arr[(i-1)/2]<arr[i]) {
        swap(arr,(i-1)/2,i);
        i=(i-1)/2;
    }
}

void print(int arr[],int size) {
    for(int i=0;i<size;i++) {
        cout<<arr[i]<<" ";
    }cout<<endl;
}

int main() {
    int n;
    cin>>n;
    int* arr=new int[n];

    int size=0;

    for(int i=0;i<n;i++) {
        int value;
        cin>>value;
        insertMaxHeap(arr,size,value);
    }

    cout<<"elements are: ";
    print(arr,size);
    int d;
    cin>>d;
    deleteByValue(arr,size,d);
    cout<<"elements are: ";
    print(arr,size);
    delete [] arr;
}