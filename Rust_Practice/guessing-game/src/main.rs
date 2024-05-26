use std::io;
use rand::Rng;

fn main() {
    println!("Welcome to the Guessing Game!!!");
    let secret_number = rand::thread_rng().gen_range(1..100);
    println!("{}",secret_number);
    println!("Please Guess and Input the number: ");
    let mut guess = String::new();
    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to Read Line");

}
