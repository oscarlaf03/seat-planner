import React from 'react'
import { connect } from 'react-redux'
class SeatsList extends React.Component{
    render(){
       return  <div>
            <h2>SeatsList</h2>
            {JSON.stringify(this.props.seat)}
        </div>
    }
}

const mapStateToProps= (state)=>({
   seat: state.lastAddedSeat
})
export default connect(mapStateToProps)(SeatsList)
