#include <iostream>
using namespace std;

struct Date{
    short day = 1;
    short month = 1;
    short year = 2000;
};

struct Movie{
    string title;
    Date releaseDate;
    bool isPopular = false;
};

int main(){
    Movie m = {"Mr. Robot", {24,6,2015}, true};
    cout<<m.releaseDate.day;
}