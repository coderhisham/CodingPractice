#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

void printValues(Node* head){
    Node* temp = head;
    while(temp!=nullptr){
        cout<<temp->data<<" ";
        temp= temp->next;
    }
    cout<<endl;
}

void insertionAtEnd(Node*& head, int newData){
    Node* newNode = new Node();
    newNode->data = newData;
    newNode->next = nullptr;

    if(head==nullptr){
        head=newNode;
        return;
    }

    Node* last = head;
    while(last->next!=nullptr){
        last = last->next;
    }
    last->next = newNode;

}


int main(){
    Node* head = nullptr;

    Node* first = new Node();
    Node* second = new Node();
    Node* third = new Node();

    first->data = 1;
    second->data = 2;
    third->data = 3;

    head = first;
    first->next = second;
    second->next = third;
    third->next = nullptr;

    printValues(head);
    insertionAtEnd(head, 4);
    printValues(head);
    
}