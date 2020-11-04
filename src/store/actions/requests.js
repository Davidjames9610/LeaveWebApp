import { database } from '../../firebase/firebase';

// ADD_REQUEST
export const addRequest = (request) => ({
  type: 'ADD_REQUEST',
  request
});

export const startAddRequest = (requestData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      firstName = '',
      lastName = '',
      type = '',
      reason = '',
      startDate = 0,
      endDate = 0,
      duration = 1,
    } = requestData;
    const request = { firstName, lastName, type, reason, startDate, endDate, duration };

    return database.ref(`users/${uid}/requests`).push(request).then((ref) => {
      dispatch(addRequest({
        id: ref.key,
        ...request
      }));
    });
  };
};

// REMOVE_REQUEST
export const removeRequest = ({ id } = {}) => ({
  type: 'REMOVE_REQUEST',
  id
});

export const startRemoveRequest = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/requests/${id}`).remove().then(() => {
      dispatch(removeRequest({ id }));
    });
  };
};

// EDIT_REQUEST
export const editRequest = (id, updates) => ({
  type: 'EDIT_REQUEST',
  id,
  updates
});

export const startEditRequest = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/requests/${id}`).update(updates).then(() => {
      dispatch(editRequest(id, updates));
    });
  };
};

// SET_REQUEST
export const setRequests = (requests) => ({
  type: 'SET_REQUESTS',
  requests
});

export const startSetRequests = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/requests`).once('value').then((snapshot) => {
      const requests = [];
      snapshot.forEach((childSnapshot) => {
        requests.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setRequests(requests));
    });
  };
};

