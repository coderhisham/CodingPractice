#include<bits/stdc++.h> 
using namespace std;

class Node
{
 public: 
    int val;
    Node *next;
    Node(int data)
    {
       val = data;
       next = nullptr;
    }
};  

Node *start = nullptr, *rear = nullptr;

class Queue
{
    public:
        int size = 0;

        bool Empty(){
            return start == nullptr;
        }

        int Peek(){
            if(start== nullptr){  
                cout<<"Queue is Empty"<<endl;
                return -1;
            } 
            else{
                return start->val;
            }  
        }
        
        
        void Enqueue(int value){
            Node *Temp;
            Temp = new Node(value); 
            if (Temp == nullptr){
                cout << "Queue is Full" << endl;
            }
            else{
                if (start == nullptr){
                    start = Temp;
                    rear = Temp;
                } 
                else{
                    rear->next = Temp;
                    rear = Temp;
                }   
                cout<<value <<" Inserted into Queue "<<endl;
                size++;
            } 
        }
        
        void Dequeue(){
            if (start == nullptr){
                cout << "Queue is Empty" << endl;
            }
            else { 
                cout<<start->val <<" Removed From Queue"<<endl;
                Node *Temp = start;
                start = start->next;
                delete Temp;
                size--;
            }  
        }   
}; 

int main()

{
    Queue Q;
    Q.Enqueue(10);
    Q.Enqueue(20);
    Q.Enqueue(30);
    Q.Enqueue(40);
    Q.Enqueue(50);
    Q.Dequeue();
    cout<<"The size of the Queue is "<<Q.size<<endl;
    cout<<"The Peek element of the Queue is "<<Q.Peek()<<endl;
    return 0;
}   