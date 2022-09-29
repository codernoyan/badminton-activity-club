import React from 'react';
import { getDataFromLocalStorage, total } from '../../utilities/utilities';

const Details = ({ seconds }) => {

    const totalSeconds = total(seconds);

    const storedData = getDataFromLocalStorage();
    const breakSecondFromLs = storedData?.second;

    return (
        <div>
            <div className="mb-4 flex justify-between items-center bg-slate-100 p-4 rounded-xl bg-rose-200">
                <h4 className="font-semibold text-rose-600">Activity Time:</h4>
                <h4 className="text-rose-500 font-semibold"><span>{totalSeconds}</span> seconds</h4>
            </div>
            <div className="flex justify-between items-center bg-slate-100 p-4 rounded-xl bg-rose-200">
                <h4 className="font-semibold text-rose-600">Break Time:</h4>
                <h4 className="text-rose-500 font-semibold"><span>{breakSecondFromLs ? breakSecondFromLs : 0}</span> seconds</h4>
            </div>
        </div>
    );
};

export default Details;