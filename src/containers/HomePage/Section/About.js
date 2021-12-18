import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class About extends Component {

    state = {

    }

    componentDidMount() {
    }


    render() {
        return (
            <div className="section-about" >
                <div className='about-title'>
                    Vì sao bệnh nhân đặt lịch khám với bác sĩ thông qua BookingCare?
                </div>
                <div className='about-img'>
                </div>
                <div className='about-content'>
                    Có ý kiến cho rằng, các thông tin về bác sĩ và cơ sở y tế đầy rẫy trên Internet. 
                    Và người bệnh cũng không gặp khó khăn gì trong việc tìm hiểu thông tin và đặt lịch khám với bác sĩ, cơ sở y tế.
                    Vậy tại sao người dùng lại cần đặt lịch khám thông qua hệ thống đặt khám như BookingCare?
                    
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
