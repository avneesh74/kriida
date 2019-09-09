import React, { Component } from 'react';
import {connect} from 'react-redux';
import {logout} from '../../../redux/actions/authactions';
import PropTypes from 'prop-types';


 class Logout extends Component {

    static propTypes = {
        logout:PropTypes.func.isRequired
    }

    render() {
        return (
            <div onClick={this.props.logout} >
                <a href="/">Logout</a>
            </div>
        )
    }
}


export default connect(null,{logout})(Logout);