import React, { useState, useEffect } from 'react';
import './CardList.scss';
import Card from '../Cards/Card.js';


export const CardList = props => {
    const {setSelectedJob} = props;
    const handleOnClick = (info) => {
        setSelectedJob(info)
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
            <section style={{ display: 'flex', border: '1px solid black', padding: '3%', margin: '10%' }}
                onClick={() => handleOnClick(props)}>
                <h1 style={{ color: 'black'}}>{props.title}</h1>
                <p>{props.company}</p>
                <p>{props.location}</p>
            </section>
        </div>
    );
}

export default CardList;