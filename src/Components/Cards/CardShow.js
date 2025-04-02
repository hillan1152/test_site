import React, { useState, useEffect } from 'react';
import './Card.scss';
import { Card, Button, Divider } from 'antd';

const { Meta } = Card;


export const CardShow = (props) => {
    const { selectedJob } = props;
    return (
        <Card  style={{ width: '100%', height: 700, position: 'sticky', top: '5%', border: '1px solid lightgrey', overflow: 'scroll'}}>
            <h1 style={{ color: 'black', display: 'flex', justifyContent: 'flex-start'}}>{selectedJob.title}</h1>
            <section style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'start', width: '100%' }}>
                <p style={{ color: 'black', fontWeight: 'bold'}}>{selectedJob.company} | {selectedJob.location} </p>
            </section>
            <section style={{ display: 'flex', justifyContent: 'start', width: '100%' }}>
                <Button style={{ backgroundColor: "#0958d9", color: 'white' }}>Apply Now</Button>
            </section>
            <Divider style={{ width: '100%' }}/>
            <section style={{ textAlign: 'left', width: '100%' }}>
                <h2>Full Job Description</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
        </Card>
    );
}

export default CardShow;