#include <iostream>
using namespace std;

struct Movie{
    string title;
    int releaseYear = 0;
    bool isPopular = false;
};

int main(){
    Movie movie1 = {"Mr. Robot", 2015, true};

    //C++ : Unpacking structures
    //JS : Destructuring
    //Python : Unpacking

    auto [title, releaseYear, isPopular] = movie1;
    cout<<title<<" "<<releaseYear<<" "<<isPopular;
}