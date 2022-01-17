import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import * as actions from '../../../store/actions'
import './DetailDoctor.scss'
import { getDetailDoctor } from '../../../store/actions';
import { LANGUAGES } from '../../../utils';
import HomeFooter from '../../HomePage/HomeFooter';

class DetailDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detailDoctor: {}
        }
    }

    componentDidMount() {

        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            this.props.getDetailDoctor(id);



        }
    }
    componentDidUpdate(preProps, preState, snapshot) {
        let { detailDoctor } = this.props;

        if (preProps.detailDoctor !== this.props.detailDoctor) {
            this.setState({
                detailDoctor: this.props.detailDoctor
            })
        }
    }


    render() {
        let detailDoctor = this.state.detailDoctor;
        let { language } = this.props
        console.log(detailDoctor);
        let nameVi = '', nameEn = '';
        if (detailDoctor && detailDoctor.positionData) {
            nameVi = `${detailDoctor.positionData.valueVi}, ${detailDoctor.lastName} ${detailDoctor.firstName}`;
            nameEn = `${detailDoctor.positionData.valueEn}, ${detailDoctor.firstName} ${detailDoctor.lastName}`;
        }
        //console.log(this.props.match.params.id);
        return (
            <React.Fragment>
                <HomeHeader isShowBanner={false} />
                <div className='doctor-detail-container'>
                    <div className='intro-doctor'>
                        <div
                            className='content-left'
                            style={{ backgroundImage: `url(${detailDoctor && detailDoctor.image ? detailDoctor.image : ""})` }}
                        >

                        </div>
                        <div className='content-right'>
                            <div className='up'>
                                {language === LANGUAGES.VI ? nameVi : nameEn}
                            </div>
                            <div className='down'>
                                {detailDoctor.Markdown && detailDoctor.Markdown.description
                                    && <span>
                                        {detailDoctor.Markdown.description}
                                    </span>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='schedule-doctor'>
                        {detailDoctor && detailDoctor.Markdown && detailDoctor.Markdown.contentHTML
                            && <div dangerouslySetInnerHTML={{ __html: detailDoctor.Markdown.contentHTML }}>

                            </div>
                        }
                    </div>
                    <div className='detail-doctor'>

                    </div>
                    <div className='comment-doctor'>

                    </div>
                </div>
                <HomeFooter />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        DetailDoctorMenuPath: state.app.DetailDoctorMenuPath,
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        detailDoctor: state.admin.detailDoctor,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getDetailDoctor: (id) => dispatch(actions.getDetailDoctor(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
