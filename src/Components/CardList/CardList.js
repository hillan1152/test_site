import React, { useState, useEffect } from 'react';
// import './CardList.css';


export const CardList = props => {
    const { title, description } = props;
    console.log("title", title)
    return (
        <div style={{ border: '1px solid black', padding: '3%', margin: '10%' }}>
            <h1 style={{ color: 'black'}}>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default CardList;