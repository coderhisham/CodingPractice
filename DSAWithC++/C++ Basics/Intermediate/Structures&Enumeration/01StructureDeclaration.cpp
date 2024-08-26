#include <iostream>
using namespace std;

struct Movie
{
    /* data */
    string title;
    int releaseYear;
};


int main(){
    Movie m;
    m.title = "Mr Robot";
    m.releaseYear = 2015;
    cout<<"Series Name: "<<m.title<<endl<<"Release Year: "<<m.releaseYear;

}