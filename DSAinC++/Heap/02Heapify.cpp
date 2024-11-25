#include<iostream>
using namespace std;

void swap(int arr[], int a, int b) {
    int temp=arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}

//Heapify: To convert a present array to a Heap
void minHeapify(int arr[],int size, int i) {
    int smallest=i;
    int left=2*i+1;
    int right=2*i+2;
    if(left<size && arr[left]<arr[smallest]) {
        smallest=left;
    }
    if(right<size && arr[right]<arr[smallest]) {
        smallest=right;
    }

    if(smallest!=i) {
        swap(arr,i,smallest);
        minHeapify(arr,size,smallest);
    }
}

void deleteByValue(int arr[], int& size, int value  ){
    int i;
    for(i=0;i<size;i++) {
        if(arr[i]==value) {
            swap(arr,i,size-1);
            size--;
            break;
        }

    }



    if (i<size) {
        minHeapify(arr,size,i);
    }
}

void buildheap(int arr[], int size) {
    for(int i=size/2-1;i>=0;i--) {
        minHeapify(arr,size,i);
    }
}

void insert(int arr[], int& size, int value) {
    size++;
    int i=size-1;
    arr[i]=value;

    while(i!=0 && arr[(i-1)/2]>arr[i]) {
        swap(arr,(i-1)/2,i);
        i=(i-1)/2;
    }
}
void printmin(int arr[],int size) {
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
        insert(arr,size,value);
    }
    buildheap(arr,size);
    cout<<"elements are: ";
    printmin(arr,size);

    deleteByValue(arr,size,5);
    cout<<"New elements are: ";
    printmin(arr,size);

    delete [] arr;
}