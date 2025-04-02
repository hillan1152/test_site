import React, { useState, useEffect } from 'react';
import './Card.scss';
import { Card } from 'antd';

const { Meta } = Card;


export const CardShow = (props) => {
    const { selectedJob } = props;
    console.log("selected job", selectedJob)
    return (
        <Card  style={{ display: 'flex', width: 500, height: 700, position: 'sticky', top: '5%', border: '1px solid lightgrey'}}>
            <h1 style={{ color: 'black'}}>{selectedJob.title}</h1>
            <section style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between', borderBottom: '1px solid black', width: '100%' }}>
                <p style={{ color: 'black', fontWeight: 'bold'}}>{selectedJob.company}</p>
                <p>{selectedJob.location}</p>
            </section>
    
        </Card>
    );
}

export default CardShow;