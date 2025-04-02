import React, { useState, useEffect } from 'react';
import './Card.scss';


export const Card = (props) => {
    const { selectedJob } = props;
    console.log("SelectedJob in Card", selectedJob)
    return (
        <div style={{ display: 'flex', border: '1px solid black', padding: '3%', margin: '10%' }}>
            <h1 style={{ color: 'black'}}>{selectedJob.title}</h1>
            <p>{selectedJob.company}</p>
            <p>{selectedJob.location}</p>
        </div>
    );
}

export default Card;