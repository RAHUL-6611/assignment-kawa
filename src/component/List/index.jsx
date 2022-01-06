import React from 'react'
import Item from "../Items"
import "./list.css"

const Lists = ({details,setSelectedCard}) => {
    return (

        <div className="list">
            {details.map((m,i) => {
    
                return (    
                <div
                key={i}
                onClick={()=> setSelectedCard(m)}
                >
                <Item info={m}/>
                </div>
                )
            }
            )}
        </div>
    )
}

export default Lists
