import React from 'react'
import { connect } from 'react-redux'
class SeatsList extends React.Component{
    render(){
       return  (
       <div style={{margin:'20px'}}>
            <h2>SeatsList</h2>
            { this.props.seat && JSON.stringify(this.props.seat)}
        </div>
       )
    }
}

const mapStateToProps= (state)=>({
   seat: state.lastAddedSeat
})
export default connect(mapStateToProps)(SeatsList)
