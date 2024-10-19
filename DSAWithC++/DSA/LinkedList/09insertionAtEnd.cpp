#include <iostream>
using namespace std;

struct Node
{
    int data;
    Node* next;

    Node(int d){
        data = d;
        next = nullptr;
    }
};

Node* insertionAtEnd(Node* head, int newData){
    Node* newNode = new Node(newData);

    if(head==nullptr){
        head=newNode;
        return head;
    }

    Node* temp = head;
    while(temp->next!=nullptr){
        temp=temp->next;
    }
    temp->next = newNode;
    return head;
}

int main(){
    Node* head = new Node(10);
    Node* second = new Node(20);
    Node* third = new Node(30);
    Node* fourth = new Node(40);

    head->next = second;
    second->next = third;
    third->next = fourth;

    head = insertionAtEnd(head,50);
    
}