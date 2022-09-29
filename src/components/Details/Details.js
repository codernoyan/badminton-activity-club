import React from 'react';
import { getDataFromLocalStorage, total } from '../../utilities/utilities';

const Details = ({ seconds, breakSeconds }) => {
    
    const totalSeconds = total(seconds);

    const storedData = getDataFromLocalStorage();
    const breakSecondFromLs = storedData.second;

    return (
        <div>
            <div className="mb-4 flex justify-between items-center bg-slate-100 p-4 rounded-xl">
                <h4 className="font-semibold">Activity Time:</h4>
                <h4 className="text-slate-400"><span>{totalSeconds}</span> seconds</h4>
            </div>
            <div className="flex justify-between items-center bg-slate-100 p-4 rounded-xl">
                <h4 className="font-semibold">Break Time:</h4>
                <h4 className="text-slate-400"><span>{breakSecondFromLs}</span> seconds</h4>
            </div>
        </div>
    );
};

export default Details;