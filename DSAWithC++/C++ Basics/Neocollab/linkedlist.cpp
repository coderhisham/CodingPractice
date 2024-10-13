#include<iostream>
using namespace std;
/*
struct kenzy{
    int age;
    string pretty;
};

int main(){
    kenzy k;
    cin>>k.age;
    cin>>k.pretty;
    cout<<k.age;   
}

*/

struct Node{
    public:
        int data;
        Node* next;

    public:
        Node(int data1, Node* next1){
            data = data1;
            next=next1;
        }
};

struct student{
    public:
        string name;
        int age;
    public:
        student(string name1,int age1 ){
            name=name1;
            age=age1;
        }
};

int main(){
    int arr[]= {1,2,3,4};
    Node* y= new Node(arr[0],nullptr);
    
    student* s1 = new student("hisham",21);
    student* s2 = new student("kenzy",19);

    cout<<s1->name<<endl;
    cin>>s1->name;
    cout<<s1->name;
}