#include <iostream>

int main(){
//  int a = 10;
//  int b = 20;
//  int c;

    int a = 10;
    int b = 20;
    int c;

    std::cout<<"the value of a is "<<a<<" and b is " <<b<<std::endl;
    std::cout<<"the value of c is "<<c<<std::endl; //This will print a Garbage Value. because c is not initialised


    //Activity
    //Swapping values

    int temp = a;
    a = b;
    b = temp;
    std::cout<<"Now a is "<<a<<" and b is "<<b;

}