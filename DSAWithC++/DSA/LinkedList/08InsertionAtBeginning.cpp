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

Node* insertionAtBeginning(Node* head, int newData){
    Node* newNode = new Node(newData);
    newNode->next = head;
    head = newNode;
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

    head = insertionAtBeginning(head,00);
    
}