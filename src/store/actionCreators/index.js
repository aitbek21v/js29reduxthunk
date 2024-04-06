import axios from "axios";
import {
    ADD_TO_BASKET,
  CARDFETCHING,
  CARDFETCHINGERROR,
  CARDFETCHINGSUCCSESS,
  SETCARDSPAGE,
} from "../actionTypes";

export const fetchingAllCards = (limit, page) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CARDFETCHING, payload: true });
      const response = await axios(
        `https://jsonplaceholder.typicode.com/photos`,
        {
          params: { _limit: limit, _page: page },
        }
      );
      dispatch({ type: CARDFETCHINGSUCCSESS, payload: response.data });
    } catch (e) {
      dispatch({ type: CARDFETCHINGERROR, payload: e.message });
    }
  };
};

export const setCardsPage = (btn) => {
  return { type: SETCARDSPAGE, payload: btn };
};

export const addToBasket = (elem) => {
    return {type: ADD_TO_BASKET, payload: elem}
}