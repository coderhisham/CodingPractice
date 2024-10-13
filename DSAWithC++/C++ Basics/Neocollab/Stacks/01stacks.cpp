#include <iostream>
using namespace std;
 
#define SIZE 100
int stack[SIZE], top = -1;

void push(int value){
    if(top>=SIZE-1){
        cout<<"Stack Overflow";
    }
    else{
        top++;
        stack[top] = value;
    }
}

void pop(){
    if(top==-1){
        cout<<"Stack Underflow / Stack is Empty";
    }
    else{
        cout<<"The popped element is "<< stack[top] <<endl;
        top--;
    }
}

void display(){
    if(top>=0){
        for(int i=top; i>=0; i--){
            cout<<stack[i]<<" ";
        }
    }
    else{
        cout<<"Stack is Empty";
    }
}



int main(){
    int n;
    cin>>n;
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin>>arr[i];
    }
    for (int j = 0; j < n; j++)
    {
        push(arr[j]);
    }
    display();
    pop();
    display();

}