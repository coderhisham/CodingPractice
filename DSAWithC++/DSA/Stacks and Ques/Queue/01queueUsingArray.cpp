#include <iostream>
using namespace std;

class Queue{
    private:
        int* arr;
        int start,end,currSize,maxSize;
    public:
        Queue(int size = 100){
            maxSize = size;
            arr = new int[maxSize];
            start = -1;
            end = -1;
            currSize = 0;
        }
        void push(int value){
            if(currSize==maxSize){
                cout<<"Queue is full"<<endl;
            }
            if(end==-1){
                start = 0;
                end = 0;
            }else{
                end = (end+1)%maxSize;
            }
            arr[end] = value;
            cout<<value<<" is pushed to the queue"<<endl;
            currSize++;
        }
        int pop(){
            if(start==-1){
                cout<<"Queue is Empty"<<endl;
                return -1;
            }
            int deletedElement = arr[start];
            if(currSize==1){
                start = -1;
                end = -1;
            }else{
                start = (start+1)%maxSize;
            }
            currSize--;
            return deletedElement;
        }
        int peek(){
            if(start==-1){
                cout<<"Queue is empty"<<endl;
                return -1;
            }
            return arr[start];
        }
        int getSize(){
            return currSize;
        }
        bool isEmpty(){
            if(getSize()<1) return true;
            return false;
        }
};

int main(){
    Queue q(1000);
    q.push(10);
    q.push(20);
    q.push(30);
    cout<<q.getSize()<<endl;
    cout<<q.pop()<<" is popped from the queue"<<endl;
    cout<<q.getSize()<<endl;
    cout<<q.peek()<<endl;
    cout<<q.isEmpty();

}