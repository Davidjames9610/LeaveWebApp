import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../store/actions/filters';

const RequestListFilters = () => {

  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={filters.text}
        onChange={(e) => {
          dispatch(setTextFilter(e.target.value));
        }}
      />
      <select
        value={filters.sortBy}
        onChange={(e) => {
          if (e.target.value === 'date') {
            dispatch(sortByDate());
          } else if (e.target.value === 'amount') {
            dispatch(sortByAmount());
          }
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Length</option>
      </select>
    </div>
  );
};



export { RequestListFilters as default };
