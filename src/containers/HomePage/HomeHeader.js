import React, { Component } from 'react';
import './HomeHeader.scss';
import { connect } from 'react-redux';
import {FormattedMessage} from 'react-intl';

class HomeHeader extends Component {

    render() {
        console.log("check props:" , this.props);
        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars"></i>
                            <div className="header-logo"></div>
                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <div><b><FormattedMessage id="home-header.specialty"/></b></div>
                                <div className="subs-title"><FormattedMessage id="home-header.search-doctor"/></div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="home-header.health-facility"/></b></div>
                                <div className="subs-title"><FormattedMessage id="home-header.select-room"/></div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="home-header.doctor"/></b></div>
                                <div className="subs-title"><FormattedMessage id="home-header.select-doctor"/></div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="home-header.examination-package"/></b></div>
                                <div className="subs-title"><FormattedMessage id="home-header.general-health-check"/></div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support"><i className="fas fa-question"></i><FormattedMessage id="home-header.support"/></div>
                            <div className="language-vi">VN</div>
                            <div className="language-en">EN</div>
                            

                        </div>
                    </div>
                    <div className="home-header-banner">
                        <div className="content-up">
                            <div className="title1"><FormattedMessage id="banner.title1"/></div>
                            <div className="title2"><FormattedMessage id="banner.title2"/></div>
                            <div className="search">
                                <i className="fas fa-search"></i> 
                                <input className="" type="text" placeholder="Search" />
                            </div>
                        </div>
                        <div className="content-down">
                            <div className="options">
                                <div className="option-child">
                                    <div className="icon-child"><i className="far fa-hospital"></i></div>
                                    <div className="text-child"><FormattedMessage id="banner.title3"/></div>
                                </div>
                                <div className="option-child">
                                    <div className="icon-child"><i className="fas fa-mobile-alt"></i></div>
                                    <div className="text-child"><FormattedMessage id="banner.title4"/></div>
                                </div>
                                <div className="option-child">
                                    <div className="icon-child"><i className="fas fa-procedures"></i></div>
                                    <div className="text-child"><FormattedMessage id="banner.title5"/></div>
                                </div>
                                <div className="option-child">
                                    <div className="icon-child"><i className="fas fa-flask"></i></div>
                                    <div className="text-child"><FormattedMessage id="banner.title6"/></div>
                                </div>
                                <div className="option-child">
                                    <div className="icon-child"><i className="fas fa-user-md"></i></div>
                                    <div className="text-child"><FormattedMessage id="banner.title7"/></div>
                                </div>
                                <div className="option-child">
                                    <div className="icon-child"><i className="fas fa-bell"></i></div>
                                    <div className="text-child"><FormattedMessage id="banner.title8"/></div>
                                </div>
                                <div className="option-child">
                                    <div className="icon-child"><i className="fas fa-cut"></i></div>
                                    <div className="text-child"><FormattedMessage id="banner.title9"/></div>
                                </div>
                                <div className="option-child">
                                    <div className="icon-child"><i className="fas fa-ambulance"></i></div>
                                    <div className="text-child"><FormattedMessage id="banner.title10"/></div>
                                </div>
                            </div> 
                        </div>
                         
                    </div>
                </div>
\
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
