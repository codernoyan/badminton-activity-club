import React from 'react';
import './Break.css';

const Break = ({ShowBreakSeconds}) => {
    return (
        <div>
            <div className="mb-8 flex justify-around items-center bg-slate-100 p-3 rounded-xl">
                <button onClick={(e) => ShowBreakSeconds(e)} className="rounded-full bg-white p-2">10s</button>
                <button onClick={(e) => ShowBreakSeconds(e)} className="rounded-full bg-white p-2">20s</button>
                <button onClick={(e) => ShowBreakSeconds(e)} className="rounded-full bg-white p-2">30s</button>
                <button onClick={(e) => ShowBreakSeconds(e)} className="rounded-full bg-white p-2">40s</button>
                <button onClick={(e) => ShowBreakSeconds(e)} className="rounded-full bg-white p-2">50s</button>
            </div>
        </div>
    );
};

export default Break;