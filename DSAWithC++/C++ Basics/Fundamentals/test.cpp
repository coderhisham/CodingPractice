//beg of array
/*#include<iostream>
using namespace std;
int main(){
    int arr[10]={1,2,3,4};
    int n=4;
    int element=0;
    for(int i=n+1;i>0;i--){
        arr[i-1]=arr[i-2];

    }
    arr[0]=element;
    for(int i=0;i<n+1;i++){
        cout<<arr[i]<<" ";
    }
}
//random pos
#include<iostream>
using namespace std;
int main(){
    int arr[10]={1,2,3,3};
    int n=5;
    int element=8;
    int pos=2;
    for(int i=n;i>pos;i--){
        arr[i-1]=arr[i-2];
    }
    arr[pos]=element;
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
}
*/
//end of the array
#include<iostream>
using namespace std;
int main(){
    int arr[10]={1,2,3,4,5};
    int n=5;
    int element=7;
    arr[n]=element;
    for(int i=0;i<=n;i++){
        cout<<arr[i]<<" ";
    }

}
