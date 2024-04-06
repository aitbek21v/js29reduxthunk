import { ADD_TO_BASKET } from "../actionTypes";

const initialState = {
  basket: [],

};

export const BasketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      let findElem = state.basket.find((el) => el.id === action.payload.id);
      if (findElem) {
        return { ...state, basket: state.basket.map(el => el.id === findElem.id ? {...el, quantity: el.quantity +1} : el)};
      } else {
        return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
      }
    default:
      return state;
  }
};
