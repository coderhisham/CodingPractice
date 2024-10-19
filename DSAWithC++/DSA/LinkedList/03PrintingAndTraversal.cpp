#include <iostream>
using namespace std;

struct Node{
    int data;
    Node* next;

    Node(int dataVal, Node* nVal){
        data = dataVal;
        next = nVal;
    }

    Node(int dataVal){
        data = dataVal;
        next = nullptr;
    }
};

void printValues(Node* head){
    Node* temp = head;
    while(temp!=nullptr){
        cout<<temp->data<<" ";
        temp= temp->next;
    }
    cout<<endl;
}

int main(){
    Node* first = new Node(10);
    Node* second = new Node(20);
    Node* third = new Node(30);
    Node* fourth = new Node(40);

    Node* head = first;
    head->next = second;
    second->next = third;
    third->next = fourth;
    
    printValues(head);
}