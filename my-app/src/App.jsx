import { useState, useEffect, useRef } from "react";
//cronometer
export default function App(){

    const [time,setTime] = useState(0)
    const [timer,setTimer] = useState(0)
    const [stop,setStop] = useState(true)
    const timeRef = useRef(null)

    useEffect(()=>{
        if (stop){
            clearInterval(timeRef.current)
        }else{
            timeRef.current = setInterval(()=>{
                setTime(c=>c+1)
            },100)
        }

        return ()=> clearInterval(timeRef.current)
    },[stop])

    useEffect(()=>{
        if(time == timer || time>timer){
            setStop(true)
            clearInterval(timeRef.current)
        }
    },[time])

    function SetMyTimer(c){
        setTimer(c.target.value)
    }

    function handleReset(){
        setTime(0)
        setTimer(0)
        setStop(true)

    }


    return(
        <>
        <input onChange={SetMyTimer} type="number" />
        <button onClick={()=> setStop(false)}>Start</button>
        <button onClick={()=> setStop(true)}>Stop</button>
        {time != 0 ? <p>Ongoing: {time}</p> : null}
        {timer != 0 ? <p>stops at: {timer}</p> : null}
        <button onClick={()=> handleReset()}>Reset</button>
        </>

    )

}