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

Node* DeletionAtBeginning(Node* head){
    if(head==nullptr)return head;
    Node* temp = head;
    head = head->next;
    delete temp;

    return head;
}

Node* DeletionByValue(Node* head,int value){

    if(head->data==value){
        head = DeletionAtBeginning(head);
        return head;
    }

    Node* temp = head;
    Node* prev = nullptr;

    while(temp!=nullptr){
        if(temp->data == value){
            prev->next = prev->next->next;
            delete temp;
            break;
        }
        prev = temp;
        temp = temp -> next;
    }

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

    head = DeletionByValue(head,10);
}