import React from 'react';

const Details = () => {
    return (
        <div>
            <div className="mb-4 flex justify-around items-center bg-slate-100 p-3 rounded-xl">
                <h4 className="font-semibold">Excersise Time:</h4>
                <h4 className="text-slate-400"><span>0</span> seconds</h4>
            </div>
            <div className="flex justify-around items-center bg-slate-100 p-3 rounded-xl">
                <h4 className="font-semibold">Break Time:</h4>
                <h4 className="text-slate-400"><span>0</span> seconds</h4>
            </div>
        </div>
    );
};

export default Details;