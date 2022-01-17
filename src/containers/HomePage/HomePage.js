import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import { connect } from 'react-redux';
import Specialty from './Section/Specialty';
import MedicalFacility from './Section/MedicalFacility';
import OutStandingDoctor from './Section/OutStandingDoctor';
import HanBook from './Section/HanBook';
import HomeFooter from './HomeFooter';
import About from './Section/About';
import './HomePage.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class HomePage extends Component {
    // handleAfterChange=(index,dontAnimate)=>{

    // }

    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
           // afterChange: this.handleAfterChange()

        };

        return (
            <React.Fragment>
                <HomeHeader isShowBanner={true}/>
                <Specialty settings={settings}/> 
                <MedicalFacility settings={settings}/> 
                <OutStandingDoctor settings={settings}/>
                <HanBook settings={settings}/>
                <About/>
                <HomeFooter settings={settings}/>
            </React.Fragment>
           
            
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
