import React from 'react';

const Activity = ({activity, addToList}) => {
    // console.log(props.activity);
    const { title, image, timeRequired } = activity;
    return (
        <div className="relative">
            <div className="block overflow-hidden border border-gray-100 rounded-lg shadow-sm h-[400px]">
                <img alt="court" src={image} className="object-cover w-full h-56" />
                <div className="p-6">
                    <h5 className="text-sm font-bold">{title}</h5>
                    <p className="mt-2 text-sm text-gray-500">Time Required: {timeRequired}s</p>
                </div>
                <div className="absolute bottom-0 w-full">
                <button onClick={()=> addToList(timeRequired)} className="relative inline-block px-8 py-3 overflow-hidden border border-rose-500 group focus:outline-none focus:ring w-full">
                    <span className="absolute inset-x-0 bottom-0 h-[2px] transition-all bg-rose-500 group-hover:h-full group-active:bg-rose-400"></span>
                    <span className="relative text-sm font-medium text-rose-500 transition-colors group-hover:text-white">Add to List</span>
                </button>
                </div>
            </div>

        </div>
    );
};

export default Activity;