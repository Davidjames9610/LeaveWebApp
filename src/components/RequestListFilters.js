import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTextFilter, sortByDate, sortByDuration } from '../store/actions/filters';

const RequestListFilters = () => {

  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();

  return (
    <div className="content-container">
      <div className="input-group">
        <div className="input-group__item">
          <input
            type="text"
            className="text-input"
            placeholder="Search requests"
            value={filters.text}
            onChange={(e) => {
              dispatch(setTextFilter(e.target.value));
            }}
          />
        </div>
        <div className="input-group__item">
          <select
            className="select"
            value={filters.sortBy}
            onChange={(e) => {
              if (e.target.value === 'date') {
                dispatch(sortByDate());
              } else if (e.target.value === 'duration') {
                dispatch(sortByDuration());
              }
            }}
          >
            <option value="date">Date</option>
            <option value="duration">Duration</option>
          </select>
        </div>
      </div>
    </div>
  );
};



export { RequestListFilters as default };
