import { useEffect, useState } from "react";

export default function Counter(){
    let [countx,setCountx] = useState(0);
    let [county,setCounty] = useState(0);

    let increCountx = ()=>{
            setCountx((currCount)=>(currCount + 1));
    }
    
    let increCounty = ()=>{
        setCounty((currCount)=>(currCount + 1));
    }
    useEffect(function printSomething(){
            console.log("this is a side-effect");
    }, [countx] );

    return ( <div>
        <h1>Counting of variable</h1>
        <h3>count:={countx}</h3>
        <button onClick={increCountx}>+ 1</button>

        <h3>count:={county}</h3>
        <button onClick={increCounty}>+ 1</button>
    </div> );
}