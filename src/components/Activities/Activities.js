import React from 'react';
import './Activities.css';
import logo from '../../logo-1.png';
import Activity from '../Activity/Activity';

const Activities = () => {
    return (
        <div>
            <div className="flex gap-2 items-center">
                <img src={logo} alt="" />
                <h1>Badminton Activity Club</h1>
            </div>
            <h3>Select Today's Activity</h3>
            <Activity></Activity>
        </div>
    );
};

export default Activities;