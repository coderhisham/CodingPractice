#include <iostream>
using namespace std;

struct Date{
    short day = 1;
    short month = 1;
    short year = 1900;
};

struct Movie{
    string title;
    Date releaseDate;
    bool isPopular = false;
};

int main(){
    Movie m1 = {"Mr. Robot", {24,6,2015}, true};
    Movie m2 = {"Matrix", {31,3,1999}, true};

    if(m1.title == m2.title && m1.releaseDate.day == m2.releaseDate.day && m1.releaseDate.month == m2.releaseDate.month && m1.releaseDate.year == m2.releaseDate.year && m1.isPopular == m2.isPopular){
        cout << "Both movies are same" << endl;
    }else{
        cout << "Both movies are different" << endl;
    }
}