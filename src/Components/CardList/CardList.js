import React, { useState, useEffect } from 'react';
import './CardList.scss';
import { Card } from 'antd';

const { Meta } = Card;


export const CardList = props => {
    const {setSelectedJob} = props;
    const handleOnClick = (info) => {
        setSelectedJob(info)
    };
    return (

        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: '5%'}}>
            <Card
                style={{ width: 500, height: 250 }}
                onClick={() => handleOnClick(props)}
            >
                <Meta
                    title={props.title}
                    description={props.company}
                />
            </Card>
            {/* <section style={{ display: 'flex', border: '1px solid black', padding: '3%', margin: '10%' }}
                onClick={() => handleOnClick(props)}>
                <h1 style={{ color: 'black'}}>{props.title}</h1>
                <p>{props.company}</p>
                <p>{props.location}</p>
            </section> */}
        </div>
    );
}

export default CardList;