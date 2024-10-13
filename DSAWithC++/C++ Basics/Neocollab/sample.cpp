#include <iostream>
using namespace std;
struct Node
{
    int data;
    Node *next;
};
void dlt_at_beg(Node *&head)
{
    if (head == nullptr)
    {
        return;
    }
    Node *temp = head;
    head = head->next;
    delete temp;
}

void Printing(Node *head)
{
    Node *temp = head;
    while (temp != nullptr)
    {
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
}

void insertion_end(Node *&head, int data)
{
    Node *newnode = new Node();
    newnode->data = data;
    newnode->next = nullptr;

    if (head == nullptr)
    {
        head = newnode;
        return;
    }
    Node *temp = head;
    while (temp->next != nullptr)
    {
        temp = temp->next;
    }
    temp->next = newnode;
}

int main()
{
    Node *head = nullptr;
    int size;
    cin>>size;
    int data;
    for(int i=0;i<size;i++){
        cin>>data;
        insertion_end(head,data);
    }
    cout<<endl;
    Printing(head);
    dlt_at_beg(head);
    Printing(head);
}