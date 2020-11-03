// Requests Reducer

//import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

const requestsReducerDefaultState = [];

export default (state = requestsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_REQUEST':
      return [
        ...state,
        action.request
      ];
    case 'REMOVE_REQUEST':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_REQUEST':
      return state.map((request) => {
        if (request.id === action.id) {
          return {
            ...request,
            ...action.updates
          };
        } else {
          return request;
        };
      });
    case 'SET_REQUESTS':
      return action.requests;
    default:
      return state;
  }
};
