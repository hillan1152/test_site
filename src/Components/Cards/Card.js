import React, { useState, useEffect } from 'react';
// import './CardList.css';


export const Card = props => {
    console.log("props drill down", props)
    return (
        <div style={{ border: '1px solid black', padding: '3%', margin: '10%' }}>
            <h1 style={{ color: 'black'}}>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default Card;