import React, { useState } from 'react';
import Activities from '../Activities/Activities';
import Dashboard from '../Dashboard/Dashboard';
import './Club.css';

const Club = () => {

    const [seconds, setSeconds] = useState([]);

    const addToList = (time) => {
        const newSeconds = [...seconds, time];
        setSeconds(newSeconds);
        // console.log(newSeconds);
    }

    // console.log(seconds)

    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="club-activities col-span-3 my-12 mx-20">
                <Activities addToList={addToList}></Activities>
            </div>
            <div className="bg-white shadow-md p-6">
                <Dashboard seconds={seconds}></Dashboard>
            </div>
        </div>
    );
};

export default Club;