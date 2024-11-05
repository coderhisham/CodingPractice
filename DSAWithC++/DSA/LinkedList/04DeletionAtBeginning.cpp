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
    if(head->next == nullptr) return nullptr;
    Node* temp = head;
    head = head->next;
    delete temp;
    return head;
}

void printValues(Node* head){
    Node* temp = head;
    while(temp!=nullptr){
        cout<<temp->data<<" ";
        temp= temp->next;
    }
    cout<<endl;
}

int main(){
    Node* head = new Node(10);
    Node* second = new Node(20);
    Node* third = new Node(30);
    Node* fourth = new Node(40);

    head->next = second;
    second->next = third;
    third->next = fourth;


    printValues(head);
    head = DeletionAtBeginning(head);
    printValues(head);
}