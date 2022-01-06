import React from 'react'
import "./item.css"

const Item = ({info}) => {

    return (
        <div className="card"
        >
            <h5 className="gender">{info.gender} -NL</h5>
            <h4>{info.name.title} {info.name.first} {info.name.last}</h4>
            <a href="gmail.com">
            <h5 className="email">{info.email}</h5>
            </a>
        </div>
    )
}

export default Item
