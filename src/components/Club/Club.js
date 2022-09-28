import React from 'react';
import Activities from '../Activities/Activities';
import Dashboard from '../Dashboard/Dashboard';
import './Club.css';

const Club = () => {
    return (
        <div className="grid grid-cols-5 gap-8">
            <div className="club-activities col-span-4">
                <Activities></Activities>
            </div>
            <div className="club-dashboard">
                <Dashboard></Dashboard>
            </div>
        </div>
    );
};

export default Club;