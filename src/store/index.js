import { legacy_createStore as createStore } from "redux";

const initialState = {
    count: 1,
  };
  
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {
        count: state.count + 1,
      };
    case 'DECREASE_COUNT':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;