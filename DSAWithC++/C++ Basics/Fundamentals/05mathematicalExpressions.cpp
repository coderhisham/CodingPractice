#include <iostream>

int main(){
    int a = 10;
    int b = 20;

    int c = a+b; //addition
    c = a - b; //Substraction
    c = a*b; //Multiplication
    c = a/b; //Division
    c = a%b; //Modulus

    int x = 10;

    //increament by 2
    x = x+2;
    x+=2;

    //increment by 1
    x = x+1;
    x+=1;

    //Post Increment
    int y = x++; //Y will be 16 and x will be 17
    //PreIncrement
    y = ++x; //Here Y and X both have same values

}