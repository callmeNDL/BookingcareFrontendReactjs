import React, { Component } from 'react';
import './Specialty.scss';
import { connect } from 'react-redux';
import Slider from 'react-slick'
import { FormattedMessage } from 'react-intl';
// Import css files

import specialty from '../../../assets/specialty/specialty01.jpeg'


class Specialty extends Component {


    render() {
        

        return (
            <div className="section-share section-specialty">
                <div className="section-container">
                    <div className="section-header">
                        <span className='title-section'>Chuyên khoa phổ biến</span>
                        <button className='btn-section'> Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="bg-image section-specialty" ></div>
                                <div>Co suong khoi 1</div>
                            </div>
                            <div className="section-customize">
                            <div className="bg-image section-specialty" ></div>
                                <div>Co suong khoi 2</div>
                            </div>
                            <div className="section-customize">
                            <div className="bg-image section-specialty" ></div>
                                <div>Co suong khoi 3</div>
                            </div>
                            <div className="section-customize">
                            <div className="bg-image section-specialty" ></div>
                                <div>Co suong khoi 4</div>
                            </div>
                            <div className="section-customize">
                            <div className="bg-image section-specialty" ></div>
                                <div>Co suong khoi 5</div>
                            </div>
                            <div className="section-customize">
                            <div className="bg-image section-specialty" ></div>
                                <div>Co suong khoi 6</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
