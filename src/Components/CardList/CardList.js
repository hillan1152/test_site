import React, { useState, useEffect } from 'react';
import './CardList.css';


export const CardList = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default CardList;