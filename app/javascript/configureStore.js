import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {
  seats: [],
  errors: null,
};

function rootReducer(state, action) {
  switch (action.type) {
    case "SEAT_ADDED":
      state.seats = action.seat.seats;
      state.errors = action.seat.errors;
      state.lastAddedSeat = action.seat;
      return { ...state };
  }
  return state;
}

export default function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
}