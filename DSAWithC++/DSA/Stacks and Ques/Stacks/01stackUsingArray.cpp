#include <iostream>
using namespace std;

class Stack
{
    int size;
    int *stack;
    int top;

public:
    Stack()
    {
        top = -1;
        size = 1000;
        stack = new int[size];
    }

    void push(int value)
    {
        if (top >= size)
        {
            cout << "Stack Overflow";
            return;
        }
        top++;
        stack[top] = value;
    }

    int pop()
    {
        if (top < 0)
        {
            cout << "Stack Underflow";
            return -1;
        }
        int deletedElement = stack[top];
        top--;
        return deletedElement;
    }

    int peek()
    {   if(top<0) return -1;
        return stack[top];
    }

    bool isEmpty()
    {
        if (top < 0)
        {
            return true;
        }
        return false;
    }

    int getSize(){
        return top;
    }


};

int main()
{
    Stack s;
    s.push(10);
    s.push(20);
    cout<<s.peek()<<endl;
    cout<<s.pop()<<" is popped out"<<endl;
    cout<<s.peek()<<endl;
    cout << s.isEmpty()<<endl;
}