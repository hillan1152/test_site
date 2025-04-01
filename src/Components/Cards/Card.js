import React, { useState, useEffect } from 'react';
// import './CardList.css';


export const Card = props => {
    console.log("props drill down", props.title, props.description)
    return (
        <div style={{ display: 'flex', border: '1px solid black', padding: '3%', margin: '10%' }}>
            <h1 style={{ color: 'black'}}>{props.title}</h1>
            <p>{props.company}</p>
            <p>{props.location}</p>
        </div>
    );
}

export default Card;