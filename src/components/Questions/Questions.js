import React from 'react';

const Questions = () => {
    return (
        <div className="my-8 mx-8 lg:mx-20">
            <h1 className="text-2xl font-semibold mb-4">React Questions:</h1>
            <div className="space-y-4">
                <details className="group" open>
                    <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
                        <h5 className="font-medium text-gray-900">
                            How React works?
                        </h5>
                        <svg className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>

                    <p className="px-4 mt-4 leading-relaxed text-gray-700">
                        ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook. One of the biggest advantages of using React is that you can write HTML code with JavaScript. It is called JSX. JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. For rendering elements, react uses Virtual DOM. Virtual DOM allows ReactJS to update the DOM tree in the most efficient way possible. By storing Virtual DOM in the memory, React eliminates excessive re-rendering that may harm performance. The quotation marks in JSX attributes represent strings, similarly to JavaScript. React Has some hooks. The most popular hook are useState and useEffect.
                    </p>
                </details>

                <details className="group">
                    <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
                        <h5 className="font-medium text-gray-900">
                            What is the difference between Props and State?
                        </h5>

                        <svg className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>

                    <p className="px-4 mt-4 leading-relaxed text-gray-700">
                        <span className="font-semibold">Props</span> are a Component's configuration, its options if you may. They are received from above and immutable as far as the Component receiving them is concerned. A Component cannot change its props, but it is responsible for putting together the props of its child Components.
                        <br />
                        <span className="font-semibold">State</span> starts with a default value when a Component mounts and then suffers from mutations in time (mostly generated from user events). It's a serializable* representation of one point in time—a snapshot. A Component manages its own state internally, but—besides setting an initial state—has no business fiddling with the state of its children. You could say the state is private.
                    </p>
                </details>

                <details className="group">
                    <summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50">
                        <h5 className="font-medium text-gray-900">
                            What else can be done with the useEffect apart from fetch?
                        </h5>

                        <svg className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>

                    <p className="px-4 mt-4 leading-relaxed text-gray-700">
                        <span className="font-semibold">The things can be done except fetch are:</span>
                    </p>
                    <ul className="px-4 mt-4 leading-relaxed text-gray-700">
                        <li>Validating input field</li>
                        <li>Live Filtering</li>
                        <li>Trigger animation on new array value</li>
                        <li>State Change</li>
                        <li>Props Changes</li>
                    </ul>
                </details>
            </div>

        </div>
    );
};

export default Questions;