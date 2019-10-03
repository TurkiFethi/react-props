import React from 'react'

 function Cards(props) {
    return (
        <div className="container" >
            {props.list.map(el=>(
                <div className="card">
            <img src={el.image}/>
            <p>First Name:{el.firstName}</p>
            <p>Last Name: {el.lastName}</p>
            <p>Age:{el.age}</p>
            <p>{props.job}</p>


                </div>
            ))}

        </div>
    )
}
export default Cards
