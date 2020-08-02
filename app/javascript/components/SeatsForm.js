import React from "react"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {Form,Field} from 'react-final-form';
import { TextArea } from "semantic-ui-react";

import SeatsList from "./SeatsList";


const SEAT_CALCULATED = 'SEAT_CALCULATED'


const options = {
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({seats:'teste'})
  }

// function calculateSeats(seatData){
//   console.log(' calculateSeats() Action!!');
//   console.log(' calculateSeats() seatData!!', JSON.stringify(seatData),'\n\n');
//   return dispatch => {
//       dispatch({type: 'GET_SEATS_REQUEST'});
//       return fetch('v1/seats.json',{
//           method: 'POST',
//           headers:{'Content-Type': 'application/json'},
//           body: JSON.stringify(seatData)
//       })
//         .then(response => {
//           console.log('\n this is response on calculateSeats')
//           response.json();
//         })
//         .then(json => dispatch(getSeatsSuccess(json)))
//         .catch(error => console.error(error.stack))
//   }
// }



export function getSeatsSuccess(json){
    console.log("getSeatsSuccess at SeatsForm")
    return {
      type: 'GET_SEATS_SUCCESS',
      json
    }
}



const renderInput = ({input,meta}) => (
    <TextArea {...input} type ='textarea'  className='MyFieldClass'  />
);



class SeatsForm extends React.Component {



    constructor(){
    super();
    }
 postSeat(values){
    console.log('postseats function')
    const  request =  fetch('v1/seats.json',{
        method: 'POST',
        headers:{'Content-Type': 'application/json','Accept':'application/json'},
        body: JSON.stringify(values)
    }).then( response => {
        response.json().then((r)=>{
            console.log({resp: r})
            this.props.seatAdded(r.seats[0])
        })
    })
}
     onSubmit  (values) {
       this.postSeat(values);
    }
    
    render(){
        return(
            <div>
                <Form
                    onSubmit={this.onSubmit.bind(this)}
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
                <SeatsList />
            </div>
        );
    }
}

// const structuredSelector = createStructuredSelector({
//     seats: state => state.seats,
//   });

// const mapDispatchToProps = {calculateSeats };

// export default connect(structuredSelector, mapDispatchToProps)(SeatsForm);

const mapStateToProps=(state)=> {

}
const mapDispatchToProps=(dispatch)=> {
    return {
        seatAdded:(seat)=> dispatch({type: "SEAT_ADDED",seat })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)( SeatsForm);