import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
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

function seatsReducer(state,action){
    if (!state){
        state = initialState
    }
    console.log('\n\n rootReducer')
    console.log('\n\n state: \n',state,'\n\n' )
    console.log('\n\n action: \n',action,'\n\n' )
    console.log(action.type);
    switch(action.type){
        case 'GET_SEATS_SUCCESS':
            return {seats: action.json.seats}
    }
    return state;
}

const rootReducer = combineReducers({
    seats:seatsReducer,
    form: formReducer
});

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