import React, { useState } from 'react';
import Activities from '../Activities/Activities';
import Dashboard from '../Dashboard/Dashboard';

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
            <div className="club-activities col-span-4 md:col-span-2 lg:col-span-3 my-12 mx-10 md:mx-8 lg:mx-20">
                <Activities addToList={addToList}></Activities>
            </div>
            <div className="bg-white col-span-4 md:col-span-2 lg:col-span-1 shadow-md p-6 mx-10 md:mx-0 my-4 md:my-0">
                <Dashboard seconds={seconds}></Dashboard>
            </div>
        </div>
    );
};

export default Club;