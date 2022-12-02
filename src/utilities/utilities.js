const total = (seconds) => {
    const secondsTotal = seconds.reduce((previous, current) => previous + current, 0);
    return secondsTotal;
}

// add to localStorage

const sendDataToLocalStorage = (id, value) => {
    let info = getDataFromLocalStorage();

    if (!info) {
        info = {};
    }
    info[id] = value;
    localStorage.setItem('break-second', JSON.stringify(info));
}

const getDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem('break-second'));
    return data;
}

// export all utilities
export {
    total,
    getDataFromLocalStorage,
    sendDataToLocalStorage
};
