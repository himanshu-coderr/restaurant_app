import React, { useReducer } from 'react'
import "./style.css"

const reducer = (state, action) => {
    if(action.type === "INCR") 
        state = state + 1
    
    if(action.type === "DECR" && state > 0) 
        state = state - 1
    
    return state;
};

const UseReducer = () => {

    const initialData = 10;

    const [state, dispatch] = useReducer(reducer, initialData);

    {/* 
        state = current state 
        initialData = state data
        reducer is a function(updated function) which changes the state value
        dispatch is used to trigger reducer function, its value can't be changed 
        
    */}

    return (
        <>
            <div className="center_div">
                <p>{state}</p>
                <div class="button2" onClick={() => dispatch({type: "INCR"})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div class="button2" onClick={() => dispatch({type:"DECR"})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>
        </>
    )
}

export default UseReducer;
