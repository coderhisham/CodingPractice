#include<iostream>
using namespace std;
int main(){
    int n,m;
    cin>>n>>m;
    int arr[n][m];
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            cin>>arr[i][j];

        }
    }
    cout<<"Matrix before processing: "<<endl;
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            cout<<arr[i][j];

        }
        cout<<endl;
    }


    cout<<endl;
    cout<<"Matrix after processing: "<<endl;
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            arr[i][j] *= 2;
            cout<<arr[i][j]<<" ";
        }
        cout<<endl;
    }
}