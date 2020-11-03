const selectRequestsTotal = (requests) => {
    return requests
        .map((request) => request.amount)
        .reduce((sum, value) => sum + value, 0);
};

export { selectRequestsTotal as default }
