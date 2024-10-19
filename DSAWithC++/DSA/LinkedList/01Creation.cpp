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

int main(){
    Node* head = new Node(10);
    Node* second = new Node(20);
    Node* third = new Node(30);

    head->next = second;
    second->next = third;
}
