import React, { useState, useEffect } from 'react';
import './CardList.scss';
import { Card, Divider } from 'antd';

const { Meta } = Card;


export const CardList = props => {
    const {setSelectedJob} = props;
    const handleOnClick = (info) => {
        setSelectedJob(info)
    };
    return (

        <div style={{ display: 'flex', justifyContent: 'space-evenly', paddingBottom: '5%', alignItems: 'left'}}>
            <Card
                style={{ width: 400, height: 250, border: '1px solid lightgrey', textAlign: 'left' }}
                onClick={() => handleOnClick(props)}
                hoverable
            >
                <Meta
                    title={props.title}
                    description={props.company}
                    style={{ color: 'black', flexDirection: 'column' }}
                />
                <p>{props.location}</p>
                <Divider />
                <p>Lorem ipsum dolor sit amet</p>
            </Card>
        </div>
    );
}

export default CardList;