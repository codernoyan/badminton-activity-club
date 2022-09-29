import React from 'react';

const PhysicalInfo = () => {
    return (
        <div>
            <div className="my-8 flex justify-around items-center bg-slate-100 p-3 rounded-xl bg-rose-200">
                <div>
                    <h4 className="text-2xl font-bold text-rose-500">60<span className="text-sm text-rose-400">kg</span></h4>
                    <p className="text-rose-600">Weight</p>
                </div>
                <div>
                    <h4 className="text-2xl font-bold text-rose-500">5.6</h4>
                    <p className="text-rose-600">Height</p>
                </div>
                <div>
                    <h4 className="text-2xl font-bold text-rose-500">24<span className="text-sm text-rose-400 text-rose-400">Years</span></h4>
                    <p className="text-rose-600">Age</p>
                </div>
            </div>
        </div>
    );
};

export default PhysicalInfo;