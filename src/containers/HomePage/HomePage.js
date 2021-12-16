import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import { connect } from 'react-redux';


class HomePage extends Component {

    render() {


        return (
            <HomeHeader/>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
