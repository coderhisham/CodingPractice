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
    if(head->next == nullptr || head==nullptr) return nullptr;
    Node* temp = head;
    head = head->next;
    delete temp;
    return head;
}

Node* DeletionAtAnyPosition(Node* head,int pos){

   if(pos==1){
    head = DeletionAtBeginning(head);
    return head;
   }

   int count=0;
   Node* temp = head;
   Node* prev = nullptr;

   while(temp!=nullptr){
        count++;
        if(count==pos){
            prev->next = prev->next->next;
            delete temp;
            break;
        }
        prev = temp;
        temp= temp->next;
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

    head = DeletionAtAnyPosition(head,4);

}