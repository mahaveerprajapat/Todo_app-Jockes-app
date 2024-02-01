import { useEffect, useState } from "react";

export default function Jocker(){
    let [joke,setJoke] = useState({});
    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async()=>{
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({setup: jsonResponse.setup,punchline: jsonResponse.punchline});
    }
    useEffect(()=>{
        async function getFirstjoke(){
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            setJoke({setup: jsonResponse.setup,punchline: jsonResponse.punchline});
            }
            getFirstjoke();
    }, []);
    return ( <div>
            <h1>Jocker!!</h1>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewJoke}>New Joke!</button>
        </div> );
    }