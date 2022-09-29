import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';

const Activities = ({addToList}) => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, []);

    return (
        <div>
            <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-rose-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
                <h1 className="text-rose-500 md:text-2xl lg:text-3xl font-semibold">Badminton Activity Club</h1>
            </div>
            <h3 className="text-xl font-semibold my-6">Select Today's Activity:</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    activities.map(activity => <Activity
                        activity={activity}
                        key={activity.id}
                        addToList={addToList}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Activities;