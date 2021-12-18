import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserRedux.scss';
import { LANGUAGES } from '../../../utils/constant';
import * as actions from '../../../store/actions'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgURL: '',
            isOpen:false,
            email:'',
            password:'',
            firstName:'',
            lastName:'',
            phoneNumber:'',
            address:'',
            gender:'',
            position:'',
            role:'',
            avatar:''

        }
    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            let arrGenders = this.props.genderRedux;
            this.setState({
                genderArr: arrGenders,
                gender : arrGenders && arrGenders.length >0 ?arrGenders[0].key:''

            })
        };
        if (prevProps.positionRedux !== this.props.positionRedux) {
            let arrPositions = this.props.positionRedux; 
            this.setState({
                positionArr: arrPositions,
                position : arrPositions && arrPositions.length >0 ?arrPositions[0].key:''
            })
        };
        if (prevProps.roleRedux !== this.props.roleRedux) {
            let arrRoles = this.props.roleRedux; 
            this.setState({
                roleArr: arrRoles,
                role : arrRoles && arrRoles.length >0 ?arrRoles[0].key:''
            })
        }

    }
    handleOnchangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: objectUrl,
                avatar:file
            })

        }



    }
    openReviewImg =()=>{
        if(!this.state.previewImgURL) return;
        this.setState({
            isOpen:true
        })
        
    }
    handleSaveUSer=()=>{
        let isValid= this.checkValidateInput();
        if(isValid===false) return;

        //fire redux action
        this.props.createNewUser({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber,
            gender: this.state.gender,
            roleId: this.state.role,
            positionId: this.state.position,
        })

    }
    onChangeInput=(event ,id)=>{
        let copyState = {...this.state}
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
        
    }
    checkValidateInput=() =>{
        let arrCheck = ['email','password','firstName','lastName','phoneNumber','address'];
        let isValid = true;
        for (let i = 0; i < arrCheck.length; i++) {
            if(!this.state[arrCheck[i]]){
                isValid = false;
                alert('Missing param! '+arrCheck[i]);
                break;
            }
        }
        return isValid;

    }
    render() {

        let genders = this.state.genderArr;
        let positions = this.state.positionArr;
        let roles = this.state.roleArr;
        let language = this.props.language;
        let isLoadingGender = this.props.isLoadingGender;

        let {email,password,firstName,lastName,phoneNumber,address,gender,position,role,avatar}
            =this.state;
        return (
            <div className="user-redux-container">
                <div className="title" >Lean React-Redux</div>
                <div className="user-redux-body">
                    <div className="container">
                        <div className="row">
                            <div className='rol-12 mt-3'>
                                <FormattedMessage id="manager-user.add" />
                            </div>
                            <div className='col-12 my-3'>{isLoadingGender ? "Loading data" : ""}</div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manager-user.email" /></label>
                                <input 
                                    className='form-control' type='email' 
                                    value={email}
                                    onChange={(event)=>{this.onChangeInput(event,'email')}}
                                />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manager-user.password" /></label>
                                <input className='form-control' type='password' 
                                     value={password}
                                    onChange={(event)=>{this.onChangeInput(event,'password')}}
                                />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manager-user.first-name" /></label>
                                <input className='form-control' type='text' 
                                     value={firstName}
                                    onChange={(event)=>{this.onChangeInput(event,'firstName')}}
                                />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manager-user.last-name" /></label>
                                <input className='form-control' type='text' 
                                     value={lastName}
                                    onChange={(event)=>{this.onChangeInput(event,'lastName')}}
                                />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manager-user.phone-number" /></label>
                                <input className='form-control' type='text' 
                                     value={phoneNumber}
                                    onChange={(event)=>{this.onChangeInput(event,'phoneNumber')}}
                                />
                            </div>
                            <div className='col-9'>
                                <label><FormattedMessage id="manager-user.address" /></label>
                                <input className='form-control' type='text' 
                                     value={address}
                                    onChange={(event)=>{this.onChangeInput(event,'address')}}
                                />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manager-user.gender" /></label>
                                <select className="form-control"  
                                    onChange={(event)=>{this.onChangeInput(event,'gender')}}>
                                    {genders && genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option 
                                                    key={index}
                                                    value={item.key}
                                                >
                                                    {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>

                                            )
                                        })
                                    }
                                </select>

                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manager-user.position" /></label>
                                <select className="form-control"
                                onChange={(event)=>{this.onChangeInput(event,'position')}}>
                                    {positions && positions.length > 0 &&
                                        positions.map((item, index) => {
                                            return (
                                               <option 
                                                    key={index}
                                                    value={item.key}
                                                >
                                                {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>

                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manager-user.role" /></label>
                                <select className="form-control" 
                                onChange={(event)=>{this.onChangeInput(event,'role')}}>
                                    {roles && roles.length > 0 &&
                                        roles.map((item, index) => {
                                            return (
                                                <option 
                                                    key={index}
                                                    value={item.key}
                                                >
                                                    {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>

                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manager-user.image" /></label>
                                <div className='preview-img-container'>
                                    <input
                                        type='file' id='previewImg'
                                        hidden
                                        onChange={(event) => { this.handleOnchangeImage(event) }}
                                    />
                                    <label
                                        className='label-upload'
                                        htmlFor='previewImg'
                                    >
                                        <FormattedMessage id="manager-user.upload-img" />
                                        <i className="fas fa-upload"></i>
                                    </label>
                                    <div className='preview-image'
                                        style={{ background: `url(${this.state.previewImgURL})` }}
                                        onClick={()=>this.openReviewImg()}
                                    >
                                    </div>
                                </div>

                            </div>
                            <div className='col-12 mt-3'>
                                <button  
                                    className='btn btn-primary'
                                    
                                    onClick={()=>this.handleSaveUSer()}
                                >
                                    <FormattedMessage id="manager-user.save"/>
                                </button>
                            </div>

                        </div>
                    </div>


                </div>
                {this.state.isOpen=== true &&
                <Lightbox
                    mainSrc={this.state.previewImgURL}
                    onCloseRequest={() => this.setState({ isOpen: false })}

                />
                }
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        positionRedux: state.admin.positions,
        roleRedux: state.admin.roles,
        isLoadingGender: state.admin.isLoadingGender
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser:(data)=>dispatch(actions.createNewUser(data)),

        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);