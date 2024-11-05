#include <iostream>
using namespace std;

struct Node{
    int data;
    Node* left;
    Node* right;

    Node(int val){
        data = val;
        left = nullptr;
        right = nullptr;
    }
};

void preOrder(Node* root){
    if(root==nullptr) return;
    cout<<root->data<<" ";
    preOrder(root->left);
    preOrder(root->right);
}

void inOrder(Node* root){
    if(root==nullptr) return;
    inOrder(root->left);
    cout<<root->data<<" ";
    inOrder(root->right);
}

void postOrder(Node* root){
    if(root==nullptr) return;
    
    postOrder(root->left);
    postOrder(root->right);
    cout<<root->data<<" ";
}

int main(){
    Node* root = new Node(10);
    root->left = new Node(20);
    root ->right = new Node(30);
    root->left ->left = new Node(40);
    root->left->right = new Node(50);
    root->right->left = new Node(60);
    root->right->right = new Node(70);

    cout<<"PreOrder: ";
    preOrder(root);

    cout<<endl<<"InOrder: ";
    inOrder(root);

    cout<<endl<<"postOrder: ";
    postOrder(root);
}
