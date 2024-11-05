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

void inOrder(Node* root){
    if(root==nullptr) return;

    
    inOrder(root->left);
    cout<<root->data<<" ";
    inOrder(root->right);
}

int main(){
    Node* root = new Node(10);
    root->left = new Node(20);
    root ->right = new Node(30);
    root->left ->left = new Node(40);
    cout<<"InOrder: "<<endl;
    inOrder(root);

}
