import React from 'react';
import './Break.css';

const Break = () => {
    return (
        <div>
            <div className="mb-8 flex justify-around items-center bg-slate-100 p-3 rounded-xl">
                <button className="rounded-full bg-white p-2">
                    <p className="text-sm font-medium">10s</p>
                </button>
                <button className="rounded-full bg-white p-2">
                    <p className="text-sm font-medium">20s</p>
                </button>
                <button className="rounded-full bg-white p-2">
                    <p className="text-sm font-medium">30s</p>
                </button>
                <button className="rounded-full bg-white p-2">
                    <p className="text-sm font-medium">40s</p>
                </button>
                <button className="rounded-full bg-white p-2">
                    <p className="text-sm font-medium">50s</p>
                </button>
            </div>
        </div>
    );
};

export default Break;