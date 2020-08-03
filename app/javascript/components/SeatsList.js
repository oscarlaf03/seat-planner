import React from 'react'
import { connect } from 'react-redux'
class SeatsList extends React.Component{
   componentDidUpdate(){
      console.log('\n\n on SeatsList this', this,'\n\n');
   }
   componentWillReceiveProps(){
      console.log('\n\n on SeatsList this componentWillReceiveProps', this,'\n\n');
   }
    render(){
       return  (
       <div style={{margin:'20px'}}>
            <h2>SeatsList</h2>
            <h3>{this.props.seats}</h3>
            { this.props.seat && JSON.stringify(this.props.seat)}
        </div>
       )
    }
}

const mapStateToProps= (state)=>({
   seat: state.lastAddedSeat
})
export default connect(mapStateToProps)(SeatsList)
