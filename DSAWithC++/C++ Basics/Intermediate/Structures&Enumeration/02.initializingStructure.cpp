#include <iostream>
using namespace std;

struct Movie
{
    /* data */
    string title;
    int releaseYear =0;
    bool isPopular = false;
};

int main(){
    Movie m = {"Mr Robot", 2015, true};
    cout<<"Series Name: "<<m.title<<endl<<"Release Year: "<<m.releaseYear<<endl<<"Is Popular: "<<m.isPopular;
}