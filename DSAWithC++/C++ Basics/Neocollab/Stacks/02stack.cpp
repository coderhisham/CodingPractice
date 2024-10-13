#include<iostream>
using namespace std;

struct Node {
  int data;
  Node * next;
  Node(int d) {
    data = d;
    next = NULL;
  }
};

struct stack {
  Node * top;
  int currSize;
  stack() {
    top = NULL;
    currSize = 0;
  }

  void push(int x) {
    Node * element = new Node(x);
    element -> next = top;
    top = element;
    cout << "Element pushed" << "\n";
    currSize++;
  }
  int pop() {
    if (top == NULL) {
      return -1;
    }
    int topData = top -> data;
    Node * temp = top;
    top = top -> next;
    delete temp;
    currSize--;
    return topData;
  }
  int size() {
    return currSize;
  }
  bool isEmpty() {
    return top == NULL;
  }
  int peek() {
    if (top == NULL) return -1;
    return top -> data;
  }
  void printStack() {
    Node * current = top;
    while (current != NULL) {
      cout << current -> data << " ";
      current = current -> next;
    }
  }
};

int main() {
    int n, element;
    stack s;
    cin>>n;
    for(int i=0; i<n; i++){
        cin>>element;
        s.push(element);
    }
    s.printStack();
    
  
}
