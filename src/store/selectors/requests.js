
const getVisibleRequests = (requests, { text, sortBy, startDate, endDate }) => {
  return requests.filter((request) => {
    const startDateMatch = typeof startDate !== 'number' || request.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || request.createdAt <= endDate;
    const textMatch = request.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

export { getVisibleRequests as default };