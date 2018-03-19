import React, {Component} from 'react';
import {connect} from 'react-redux';
class Dashboard extends Component
{
    render(){
        return(
            <div>
                {JSON.stringify(this.store)}
            </div>
        );
    }
}
export default connect(
    state => ({
        store:state
    })
    // dispatch => ({
    //
    // })
)(Dashboard);