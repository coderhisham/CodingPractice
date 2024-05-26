fn main() {

    //immutable
    let x = 5; //Immutable by default
    //x = 6; Error
    println!("The value of x is: {x}");

    //mutable
    let mut y;
    y = 6;
    println!("The value of y is: {y}");

    //Constants: not just immutable by default they're always immutable
    const Z:u32 = 6;
    //const mut z:32 = 6 => Error
    //z = 7; => Error
    println!("The value of Z is: {Z}");

    const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;
    println!("The value of THREE_HOURS_IN_SECONDS is: {THREE_HOURS_IN_SECONDS}");


    //Shadowing
    let w = 10;
    println!("The value of w is: {w}");
    let w = "Hello";
    println!("The value of w is: {w}");
    {
        let w = w.to_owned() + " World";
        println!("The value of w is: {w}");
    }
    println!("The value of w is: {w}");
}