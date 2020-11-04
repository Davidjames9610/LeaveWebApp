
const getVisibleRequests = (requests, { text, sortBy }) => {
  return requests.filter((request) => {

    const textMatch = (request.type.toLowerCase().includes(text.toLowerCase()) ||
      request.firstName.toLowerCase().includes(text.toLowerCase()) ||
      request.lastName.toLowerCase().includes(text.toLowerCase()) ||
      request.reason.toLowerCase().includes(text.toLowerCase())
    );

    return textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.startDate < b.startDate ? -1 : 1;
    } else if (sortBy === 'duration') {
      console.log('called');
      return a.duration < b.duration ? 1 : -1;
    }
  });
};

export { getVisibleRequests as default };