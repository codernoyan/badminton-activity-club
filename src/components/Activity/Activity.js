import React from 'react';
import './Activity.css';

const Activity = (props) => {
    console.log(props.activity);
    const { title, image, timeRequired } = props.activity;
    return (
        <div>
            <div className="block overflow-hidden border border-gray-100 rounded-lg shadow-sm h-[400px]">
                <img alt="court" src={image} className="object-cover w-full h-56" />
                <div className="p-6">
                    <h5 className="text-sm font-bold">{title}</h5>
                    <p className="mt-2 text-sm text-gray-500">Time Required: {timeRequired}</p>
                </div>
                {/* <button className="inline-block pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500">
                    Add to List
                    <span aria-hidden="true">&rarr;</span>
                </button> */}
                <button className="relative inline-block px-8 py-3 overflow-hidden border border-indigo-600 group focus:outline-none focus:ring w-full bottom-0">
                    <span className="absolute inset-x-0 bottom-0 h-[2px] transition-all bg-indigo-600 group-hover:h-full group-active:bg-indigo-500"></span>
                    <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">Add to List</span>
                </button>
            </div>

        </div>
    );
};

export default Activity;