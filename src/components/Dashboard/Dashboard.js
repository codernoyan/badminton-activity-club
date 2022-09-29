import React, { useState } from 'react';
import { sendDataToLocalStorage } from '../../utilities/utilities';
import Break from '../Break/Break';
import Details from '../Details/Details';
import './Dashboard.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = ({ seconds }) => {
    // console.log(props.seconds)

    const [breakSeconds, setBreakSeconds] = useState(0);

    const ShowBreakSeconds = (e) => {
        const newBreakSeconds = Number((e.target.innerText).slice(0, 2));
        setBreakSeconds(newBreakSeconds);
        sendDataToLocalStorage('second', newBreakSeconds);
    }

    const showToast = () => toast.success('Wow! Activity is completed.')

    return (
        <div>
            <div>
                <h3 className="text-2xl font-medium">Noyan Dey</h3>
                <div className="flex items-center gap-1 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p className="text-xs">Chattogram, Bangladesh</p>
                </div>
            </div>
            {/* weight info */}
            <div className="my-8 flex justify-around items-center bg-slate-100 p-3 rounded-xl">
                <div>
                    <h4 className="text-2xl font-bold">60<span className="text-sm text-slate-400">kg</span></h4>
                    <p className="text-slate-600">Weight</p>
                </div>
                <div>
                    <h4 className="text-2xl font-bold">5.6</h4>
                    <p className="text-slate-600">Height</p>
                </div>
                <div>
                    <h4 className="text-2xl font-bold">24<span className="text-sm text-slate-400">Years</span></h4>
                    <p className="text-slate-600">Age</p>
                </div>
            </div>
            <div className="mb-12">
                <Break ShowBreakSeconds={ShowBreakSeconds}></Break>
            </div>
            <div className="mb-12">
                <h3 className="text-xl font-medium mb-4">Activity Details</h3>
                <Details seconds={seconds} breakSeconds={breakSeconds}></Details>
            </div>
            <div>
                <button onClick={showToast} className="w-full bg-rose-500 py-4 text-white text-sm font-semibold rounded-lg">Activity Completed</button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Dashboard;