import React from "react"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {Form,Field} from 'react-final-form';
import { TextArea } from "semantic-ui-react";

const SEAT_CALCULATED = 'SEAT_CALCULATED'

function calculateSeats(seatData){
  console.log(' calculateSeats() Action!!');
  return dispatch => {
      dispatch({type: SEAT_CALCULATED});
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


export function getSeatsSuccess(json){
    return {
      type: SEAT_CALCULATED,
      json
    }
  }


const renderInput = ({input,meta}) => (
    <TextArea {...input} type ='textarea'  className='MyFieldClass' errormessage={meta.touched && meta.error } />
);

const onSubmit = values => {
    // alert(JSON.stringify(values));
    // console.log('\n\n loggin values form onSubmit SeatsForm \n\n', JSON.parse(values.data),'\n\n')
    calculateSeats(values);


}



const SeatsForm = () => (
    <Form
        onSubmit={onSubmit}
        render ={ ({handleSubmit}) =>(
            <form  onSubmit={handleSubmit} className='ui form'>
                <Field
                  name='data'
                  component= {renderInput}
                />
                <button type='submit'>Submit </button>
            </form>
        )}
    />

);

const structuredSelector = createStructuredSelector({
    seats: state => state.seats,
  });

const mapDispatchToProps = {calculateSeats };

export default connect(structuredSelector, mapDispatchToProps)(SeatsForm);