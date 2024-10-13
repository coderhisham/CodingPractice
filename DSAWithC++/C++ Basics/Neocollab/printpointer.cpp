#include<iostream>
using namespace std;
int main(){
    int a;
    cin>>a;
    int *ptr=&a;
    int** ptr1=ptr;
    cout<<*ptr1;
    /*cout<<*ptr<<endl;
    cout<<&ptr<<endl;
    cout<<a;
    */
}