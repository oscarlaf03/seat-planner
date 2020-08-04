import React from "react";
import { connect } from 'react-redux';
import {Form,Field} from 'react-final-form';
import { TextArea, Segment, Button } from "semantic-ui-react";
import SeatsList from "./SeatsList";
import Explanation from "./Explanation";

const renderInput = ({input,meta}) => (
    <TextArea  style={{minHeight:'120px'}} {...input} type ='textarea'  />
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
                console.log('\n\nlogging response of postSeat\n\n', r, '\n\n');
                // this.props.seatAdded(r.seats[0])
                this.props.seatAdded(r)
            })
        })
    }
     onSubmit  (values) {
       this.postSeat(values);
    }

    render(){
        return(
            <div style={{paddingTop:'10%'}}>
                <Explanation />
                <Segment raised>
                    <Form
                        onSubmit={this.onSubmit.bind(this)}
                        render ={ ({handleSubmit}) =>(
                            <form  onSubmit={handleSubmit} className='ui form'>
                                <Field
                                name='seats'
                                component= {renderInput}
                                />
                                <Button primary style={{margin:'20px'}} type='submit'>Find your best seat </Button>
                            </form>
                        )}
                    />
                </Segment>
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