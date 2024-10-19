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

Node* DeletionAtEnd(Node* head){
    if(head->next==nullptr || head ==nullptr) return nullptr;
    Node* temp = head;
    while(temp->next->next !=nullptr){
        temp=temp->next;
    }
    delete temp->next;
    temp->next = nullptr;
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

    head = DeletionAtEnd(head);
}