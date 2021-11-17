import React, {useState, useEffect} from 'react'
import "./style.css"

export const UseEffect = () => {

    // const initialData = 10;
    const [myNum, setmyNum] = useState(0);
    
    useEffect(() => {
        console.log("Hii")
        document.title = `Chats(${myNum})`;
    },[]);

    // if array [](array dependency) is used then it'll work in the beginning only  
    // if not used, it'll print each time after clicking finished


    return (
        <>
            <div className="center_div">
                <p>{myNum}</p>
                <div className="button2" onClick={() => setmyNum(myNum + 1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
            </div>
        </>
    )
}

export default UseEffect;
