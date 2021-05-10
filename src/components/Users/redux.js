const USERS_FETCH_REQUESTED = "USERS/FETCH_REQUESTED";
const USERS_FETCH_SUCCEDED = "USERS/FETCH_SUCCEDED";
const USERS_FETCH_FAILED = "USERS/FETCH_FAILED";
const USERS_FETCH_SINGLE_SUCCESS = "USERS/FETCH_SINGLE_SUCCESS";
const USERS_RESET = "USERS/RESET";

const fetchRequested = () => ({
  type: USERS_FETCH_REQUESTED,
});
const fetchSucceded = (data) => ({
  type: USERS_FETCH_SUCCEDED,
  payload: data,
});
const fetchSingle = (data) => ({
  type: USERS_FETCH_SINGLE_SUCCESS,
  payload: data,
});
const fetchFailed = () => ({
  type: USERS_FETCH_FAILED,
});

export const resetUsers = () => ({
  type: USERS_RESET,
});

export const addUser = () => {
  return (dispatch) => {
    dispatch(fetchRequested());
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => dispatch(fetchSingle(data.results[0])))
      .catch((error) => dispatch(fetchFailed(error)));
  };
};
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchRequested());
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => dispatch(fetchSucceded(data.results)))
      .catch((error) => dispatch(fetchFailed(error)));
  };
};

const INITIAL_STATE = {
  users: [],
  isLoading: false,
  error: null,
};

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS_FETCH_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case USERS_FETCH_SUCCEDED:
      console.log("success");
      return {
        ...state,
        users: action.payload,
        isLoading: false,
        error: null,
      };
    case USERS_RESET:
      return {
        ...state,
        users: [],
        isLoading: false,
        error: null,
      };
    case USERS_FETCH_SINGLE_SUCCESS:
      return {
        ...state,
        users: [action.payload, ...state.users],
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};
