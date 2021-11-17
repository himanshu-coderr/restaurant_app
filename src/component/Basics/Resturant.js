// MenuCard,Navbar -> Restaurant -> App -> Index

import React,{ useState } from 'react'
import "./style.css"
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard"
import Navbar from './Navbar';


const uniqueList = [                      // unique category list
    ...new Set(Menu.map((curElem) => {
        return curElem.category;
    })),
    "All",
]
console.log(uniqueList)


const Resturant = () => {
    
    const [menuData, setMenuData] = useState(Menu);   // return array of 2 elements
    // state variable is menuData -> to store api data
    // Updated function is setMenuData
    // useState is used to manage data 

    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {

        if(category === "All"){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curElem) =>{
            return curElem.category === category;
        })
        setMenuData(updatedList);
    }
    console.log(menuData);
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList}/>
            <MenuCard menuData={menuData}/>    {/* passing data parent to child -> Restaurant to MenuCard
            format just like -> Child comp name + html tag attritube(like src,type) name = {data from useState}  */}
        </>
    )
}

export default Resturant
