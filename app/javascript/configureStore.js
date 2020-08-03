import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
    seats: [],
    errors:null,
    lastAddedSeat: null
};

function rootReducer(state,action){
    switch(action.type){
        case "SEAT_ADDED":
            console.log('\n\n loggin state.seats\n\n',state.seats,'\n\n');
            console.log('\n\n loggin action.seat\n\n',action.seat,'\n\n');
            // const seats = state.seats
            state.seats =   [action.seat, ...state.seats];
            // state.seats = action.seat.seats
            // state.errors = action.seat.errors
            state.errors = action.seat.errors
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