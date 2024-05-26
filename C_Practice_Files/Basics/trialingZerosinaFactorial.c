#include <stdio.h>

int factorial(int num){
    int fact = 1;
    if(num==1 || num==0){
        return 1;
    }
    for(int i=num; i>0; i--){
        fact *= i;
    }
    return fact;
}

int trailingZeroes(int fact){
    int count=0;
    while(fact!=0){
        if(fact%10==0){
            count++;
            fact /= 10;
        }else{
            break;
        }
    }
    return count;
}

int main(){
    int num, fact,trial;
    scanf("%d", &num);
    fact = factorial(num);
    trial = trailingZeroes(fact);
    printf("Factorial: %d\n",fact);
    printf("Trialing Zeroes: %d\n", trial);
}