import React, { useReducer } from 'react'
import Resturant from './component/Basics/Resturant'
import UseState from './component/Hooks/useState';
import UseEffect from './component/Hooks/useEffect';
import UseReducer from './component/Hooks/useReducer';
import Todo from './component/todoreact/todo'
import Temp from './component/WeatherApp/temp'

const App = () => {
  return (
    <div>
      {/* <Temp/> */}
    
      <Todo/>
      {/* <UseReducer/> */}
      {/* <UseEffect/> */}
      {/* <Resturant/> */}
      {/* <UseState/> */}
    </div>
  )
}

const MyName = () =>{
  return (
    <h2>Himanshu</h2>
  )
}
export default App
