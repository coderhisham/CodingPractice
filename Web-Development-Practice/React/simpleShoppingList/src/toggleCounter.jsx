import { useState } from "react";
import './toggleCounter.css'

export default function ToggleCounter(){
    const [isToggled, setIsToggled] = useState(true);
    const [count, setCount] = useState(0);

    const toggler = function(){
        setIsToggled(!isToggled);
        setCount(count+1);
    };

    return(
        <div>
            <h3 className="toggle" onClick={toggler}>{isToggled ? "✅" : "❌"}</h3>
            <p>{count}</p>
        </div>
    );
}