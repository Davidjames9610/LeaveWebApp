import React from 'react';
import RequestList from './RequestList';
import RequestListFilters from './RequestListFilters';
import RequestSummary from './RequestsSummary';

const RequestDashboardPage = () => {

  return (
    <div>
      <RequestSummary />
      <RequestListFilters />
      <RequestList />
    </div>
  )
};


export { RequestDashboardPage as default };
