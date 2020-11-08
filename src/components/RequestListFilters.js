import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTextFilter, sortByDate, sortByDuration } from '../store/actions/filters';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import { Row, Col, Form } from 'react-bootstrap';


const RequestListFilters = () => {

  const filters = useSelector(state => state.filters);
  const dispatch = useDispatch();

  return (
    <div className="content-container">
      <form className="form__container">
        <Row>
          <Col>
            <FormGroup>
              <FormControl
                plaintext
                className="form__textInput"
                type="text"
                placeholder="Search Requests"
                value={filters.text}
                onChange={(e) => {
                  dispatch(setTextFilter(e.target.value));
                }}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <FormControl
                plaintext
                as="select"
                name="filter"
                value={filters.sortBy}
                onChange={(e) => {
                  if (e.target.value === 'date') {
                    dispatch(sortByDate());
                  } else if (e.target.value === 'duration') {
                    dispatch(sortByDuration());
                  }
                }}
                className="form__select"
              >
                <option value="date">Date</option>
                <option value="duration">Duration</option>
              </FormControl>
            </FormGroup>
          </Col>
        </Row>
      </form>
    </div>
  );
};



export { RequestListFilters as default };
