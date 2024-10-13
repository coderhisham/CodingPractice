#include<iostream>
using namespace std;


int areaR(int* a, int* b){
    return (*a)**b;
}
int PerimeterR(int *a, int *b){
    return 2*(*a+*b);
}
int main(){
    int a,b;
    cin>>a>>b;
    int res1=areaR(&a,&b);
    int res2=PerimeterR(&a,&b);
    cout<<res1<<endl;
    cout<<res2;
}