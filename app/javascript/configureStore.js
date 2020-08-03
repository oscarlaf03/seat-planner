import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    seats: [],
    lastAddedSeat: null
};

function rootReducer(state,action){
    switch(action.type){
        case "SEAT_ADDED":
            const seats = state.seats
            state.seats = JSON.parse(JSON.stringify(  [action.seat, ...seats]))
            state.lastAddedSeat = action.seat
                return {...state}
    }
    return state;
}

export default function configureStore(){
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );
    return store;
}