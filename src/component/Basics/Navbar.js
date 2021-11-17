import React from 'react'

export const Navbar = ({filterItem, menuList}) => {
    return (
        <>
            <nav className="navbar">
                
                <div className="btn-group">
                    {menuList.map((curElem) => {
                        return (
                            <button 
                                className="btn-group__item"
                                onClick={() => filterItem(curElem)}>
                                {curElem}
                            </button>

                        )
                    })}


                    {/*
                    <button className="btn-group__item"
                        onClick={() => filterItem("lunch")}>Lunch
                    </button>
                    <button className="btn-group__item"
                        onClick={() => filterItem("evening")}>Evening
                    </button>
                    <button className="btn-group__item"
                        onClick={() => filterItem("dinner")}>Dinner
                    </button>
                     <button className="btn-group__item"
                        onClick={() => setMenuData(Menu)}>All
                    </button> 
                    */}
                </div>
            </nav>
        </>
    )
}

export default Navbar;