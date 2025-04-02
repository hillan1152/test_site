import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { Menu } from 'antd';


export const NavBar = () => {
    const items = [
        {
            label: "Home",
            key: '1',
        },
        {
            label: "About",
            key: '2',
        },
        {
            label: "Contact",
            key: '3',
        },
    ]
    const items2 = [
        {
            label: "Sign In",
            key: '4',
        },
        {
            label: "Post Job",
            key: '5',
        },

    ]
    
    return (
        <div style={{ display: 'flex', width: '100%', backgroundColor: 'white', justifyContent: 'start', paddingLeft: '4%' }}>
            <h1>JobFlow</h1>
                <Menu theme="light" mode="horizontal" items={items} style={{ width: '100%', paddingLeft: '5%', alignItems: 'center' }}/>
                <Menu theme="light" mode="horizontal" items={items2} style={{ width: '100%',  alignItems: 'center', paddingRight: '5%', display: 'flex', justifyContent: 'flex-end' }}/>
        </div>
    );
};