import React from 'react';
import RequestList from './RequestList';
import RequestListFilters from './RequestListFilters';

const RequestDashboardPage = () => {

  return (
    <div>
      <RequestList />
      <RequestListFilters />
    </div>
  )
};


export { RequestDashboardPage as default };
