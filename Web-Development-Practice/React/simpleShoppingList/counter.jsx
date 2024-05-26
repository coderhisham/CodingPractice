import { useState } from "react";

function Counter(){

    const [count, setCount] = useState(0);

    function Increment(){
        setCount(count+1);
    }

    return(
        <div>
            <p>The number is: {count} </p>
            <button onClick={Increment}>Increment</button>
        </div>
    );
}

export default Counter;