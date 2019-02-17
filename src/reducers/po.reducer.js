import { FETCH, DELETE, GET_ONE } from '../actions/constant';

const poReducer = (state = { datas: [], data: {} }, action) => {
  console.log('type', action);
  switch (action.type) {
    case FETCH:
      console.log('reducer runn');

      return {
        ...state,
        datas: action.payload
      };
    case DELETE:
      return {
        ...state,
        data: action.payload
      };
    case GET_ONE:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default poReducer;
