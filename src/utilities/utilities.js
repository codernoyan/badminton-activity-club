const total = (seconds) => {
    const secondsTotal = seconds.reduce((previous, current) => previous + current, 0);
    return secondsTotal;
}

export {
    total
};