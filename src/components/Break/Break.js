import React from 'react';

const Break = ({ShowBreakSeconds}) => {
    return (
        <div>
            <div className="mb-8 flex justify-around items-center bg-slate-100 p-3 rounded-xl bg-rose-200">
                <button onClick={(e) => ShowBreakSeconds(e)} className="rounded-full bg-white p-2 font-medium text-rose-500">10s</button>
                <button onClick={(e) => ShowBreakSeconds(e)} className="rounded-full bg-white p-2 font-medium text-rose-500">20s</button>
                <button onClick={(e) => ShowBreakSeconds(e)} className="rounded-full bg-white p-2 font-medium text-rose-500">30s</button>
                <button onClick={(e) => ShowBreakSeconds(e)} className="rounded-full bg-white p-2 font-medium text-rose-500">40s</button>
                <button onClick={(e) => ShowBreakSeconds(e)} className="rounded-full bg-white p-2 font-medium text-rose-500">50s</button>
            </div>
        </div>
    );
};

export default Break;