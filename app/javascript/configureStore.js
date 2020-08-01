import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {
    seats: [
        {
            name:'My first test seat',
            guid: '123'
        }
    ]
};

function rootReducer(state,action){
    console.log(action.type);
    switch(action.type){
        case 'GET_SEATS_SUCCESS':
            return {seats: action.json.seats}
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