import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {
    seats: [],
    lastAddedSeat: null
};

function rootReducer(state,action){
    console.log('\n\n loggin action.type on rootReducer: ',action.type,'\n');
    switch(action.type){
        case 'GET_SEATS_SUCCESS':
            return {seats: action.json.seats}
        case 'SEAT_CALCULATED':
            console.log('rootReducer SEAT_CALCULATED')
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