import { INCREMENT, DECREMENT } from '../types';

const initialState = 0;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state + payload;
    default:
      return state;
  }
};
