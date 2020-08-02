import React from "react"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {Form,Field} from 'react-final-form';
import { TextArea } from "semantic-ui-react";

import HelloWorld from './HelloWorld';


const SEAT_CALCULATED = 'SEAT_CALCULATED'


const options = {
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({seats:'teste'})
  }

function calculateSeats(seatData){
  console.log(' calculateSeats() Action!!');
  console.log(' calculateSeats() seatData!!', JSON.stringify(seatData),'\n\n');
  return dispatch => {
      dispatch({type: 'GET_SEATS_REQUEST'});
      return fetch('v1/seats.json',{
          method: 'POST',
          headers:{'Content-Type': 'application/json'},
          body: JSON.stringify(seatData)
      })
        .then(response => {
          console.log('\n this is response on calculateSeats')
          response.json();
        })
        .then(json => dispatch(getSeatsSuccess(json)))
        .catch(error => console.error(error.stack))
  }
}

function postSeat(values,callback){
    console.log('postseats function')
    const  request =  fetch('v1/seats.json',{
        method: 'POST',
        headers:{'Content-Type': 'application/json','Accept':'application/json'},
        body: JSON.stringify(values)
    }).then( response => {
        let r = response.json();
        console.log(r);
        return r;
    }).then(response => {
        console.log('\n\n loggin response \n\n',response);
    }).then(callback);
    return{
        type:'GET_SEATS_REQUEST',
        paylaod:  request
    };
}


export function getSeatsSuccess(json){
    console.log("getSeatsSuccess at SeatsForm")
    return {
      type: 'GET_SEATS_SUCCESS',
      json
    }
}

const thunkPostSeats = (values) => {
    return (dispatch) => {
        fetch('v1/seats.json',{
            method: 'POST',
            headers:{'Content-Type': 'application/json','Accept':'application/json'},
            body: JSON.stringify(values)
        }).then( r=> r.json()).then( resp => {
            dispatch({
                type:'GET_SEATS_SUCCESS',
                payload: resp
            })
        }).catch((error)=> console.error(error.stack));
    }
}


const renderInput = ({input,meta}) => (
    <TextArea {...input} type ='textarea'  className='MyFieldClass'  />
);

const onSubmit = values => {
    // alert(JSON.stringify(values));
    // console.log('\n\n loggin values form onSubmit SeatsForm \n\n', JSON.parse(values.data),'\n\n')
    // return calculateSeats(values);
    postSeat(values, (seats) => {
        console.log("\n\n loggin at callback", seats);
    });
    // thunkPostSeats(values);


}



class SeatsForm extends React.Component {
    render(){
        return(
            <div>
                <Form
                    onSubmit={onSubmit}
                    render ={ ({handleSubmit}) =>(
                        <form  onSubmit={handleSubmit} className='ui form'>
                            <Field
                            name='seats'
                            component= {renderInput}
                            />
                            <button type='submit'>Submit </button>
                        </form>
                    )}
                />
                <HelloWorld />
            </div>
        );
    }
}

// const structuredSelector = createStructuredSelector({
//     seats: state => state.seats,
//   });

// const mapDispatchToProps = {calculateSeats };

// export default connect(structuredSelector, mapDispatchToProps)(SeatsForm);

export default SeatsForm;