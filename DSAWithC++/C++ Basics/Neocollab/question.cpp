#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

Node* createNode(int data) {
    Node* newNode = new Node;
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

Node* insertNode(Node* head, int data) {
    if (head == NULL)
        head = createNode(data);
    else {
        Node* temp = head;
        while (temp->next != NULL)
            temp = temp->next;
        temp->next = createNode(data);
    }
    return head;
}

Node* leftShiftLinkedList(Node* head, int k) {
    if(head==NULL || k==0){
        return head;
    }
    
    Node* current=head;
    int count=0;
    while(current!=NULL){
        count++;
        current=current->next;
    }
    k=k%count;
    if(k==0){
        return head;
    }
    
    for(int i=0;i<k-1;i++){
        current=current->next;
        
    }
    
    Node* newHead= current->next;
    current->next=NULL;
    current=newHead;
    while(current->next!=NULL){
        current=current->next;
    }
    current->next=head;
    
    return newHead;
    
    }


void printList(Node* head) {
    Node* temp = head;
    while (temp != NULL) {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
}

int main() {
    int N, k;
    cin >> N;

    Node* head = NULL;
    for (int i = 0; i < N; i++) {
        int value;
        cin >> value;
        head = insertNode(head, value);
    }

    cin >> k;

    head = leftShiftLinkedList(head, k);

    printList(head);

    return 0;
}