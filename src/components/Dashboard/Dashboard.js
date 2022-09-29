import React, { useState } from 'react';
import { sendDataToLocalStorage } from '../../utilities/utilities';
import Break from '../Break/Break';
import Details from '../Details/Details';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PhysicalInfo from '../PhysicalInfo/PhysicalInfo';

const Dashboard = ({ seconds }) => {
    // console.log(props.seconds)

    const [breakSeconds, setBreakSeconds] = useState(0);

    const ShowBreakSeconds = (e) => {
        const newBreakSeconds = Number((e.target.innerText).slice(0, 2));
        setBreakSeconds(newBreakSeconds);
        sendDataToLocalStorage('second', newBreakSeconds);
    }

    const showToast = () => toast.success('Wow! Activity is completed.', {
        position: "top-center",
    })

    return (
        <div>
            <div className="flex flex-col items-center gap-1">
                <h3 className="text-2xl font-bold">Noyan Dey</h3>

                <div className="flex items-center gap-1 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                    <p className="text-xs font-medium">Frontend Developer</p>
                </div>

                <div className="flex items-center gap-1 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <p className="text-xs">Chattogram, Bangladesh</p>
                </div>
            </div>
            {/* weight info */}
            <div>
                <PhysicalInfo></PhysicalInfo>
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