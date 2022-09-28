import React from 'react';
import Activities from '../Activities/Activities';
import Dashboard from '../Dashboard/Dashboard';
import './Club.css';

const Club = () => {
    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="club-activities col-span-3 my-12 mx-20">
                <Activities></Activities>
            </div>
            <div className="bg-white shadow-md p-6">
                <Dashboard></Dashboard>
            </div>
        </div>
    );
};

export default Club;