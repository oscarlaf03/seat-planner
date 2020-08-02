import React from "react"
import { connect } from 'react-redux';
import {Form,Field} from 'react-final-form';
import { TextArea } from "semantic-ui-react";
import SeatsList from "./SeatsList";

const renderInput = ({input,meta}) => (
    <TextArea {...input} type ='textarea'  />
);
class SeatsForm extends React.Component {
    constructor(){
    super();
    }
    postSeat(values){
        const  request =  fetch('v1/seats.json',{
            method: 'POST',
            headers:{'Content-Type': 'application/json','Accept':'application/json'},
            body: JSON.stringify(values)
        }).then( response => {
            response.json().then((r)=>{
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

const mapStateToProps=(state)=> {
    return state;

}
const mapDispatchToProps=(dispatch)=> {
    return {
        seatAdded:(seat)=> dispatch({type: "SEAT_ADDED",seat })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)( SeatsForm);