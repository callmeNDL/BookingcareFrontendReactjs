import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import {getAllUsers,createNewUserService,deleteUserService,editUserService} from '../../services/userService'
import ModalUser from './ModalUser';
import { emitter } from '../../utils/emitter';
import ModalEditUser from './ModalEditUser';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers:[],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit:{},

        }
    }

    async componentDidMount() {
        await this.getAllUserFromReact()
    }

    getAllUserFromReact = async()=>{
        let response = await getAllUsers('ALL');
        if(response && response.errCode===0){
            this.setState({
                arrUsers:response.users,
            })
            //console.log("check state ", this.state.arrUsers);
        }

    }

    handleAddNewUser = ()=>{
        this.setState({
            isOpenModalUser: true,
        })
    }
    toggleUserModal = ()=>{
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }
    toggleUserEditModal = ()=>{
        this.setState({
            isOpenModalEditUser : !this.state.isOpenModalEditUser,
            
        })
    }

    createNewUser = async (data) =>{
        try {
            let response = await createNewUserService(data);
            if(response && response.errCode!==0){
                alert(response.errMessage)
            }else{
               await this.getAllUserFromReact();
               this.setState({
                   isOpenModalUser: false,
               })
               emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }

        } catch (e) {
            console.log(e);
        }
        
    }

    handleEditUser=(user)=>{
        console.log('check edit user',user);
        this.setState({
            isOpenModalEditUser:true,
            userEdit:user,
        })
    }


    handleDeleUser = async(user)=>{
        console.log('click delete',user)
        try {
            let res= await deleteUserService(user.id)
            if(res.errCode===0){
                await this.getAllUserFromReact();
            }else{
                alert(res.errMessage)
            }
        } catch (e) {
            console.log(e);
        }
    }

    doEditUser= async(user)=>{
        try {
            let res = await editUserService(user)
            if(res && res.errCode===0){
                this.setState({
                    isOpenModalEditUser: false
                })
                this.getAllUserFromReact();
            }else{
                alert(res.errMessage)
            }
            
        } catch (e) {
            console.log(e);
        }
       
    }

    render() {
        
        let arrUsers = this.state.arrUsers;
        return (
            <div className="user-container">
            <ModalUser
                isOpen = {this.state.isOpenModalUser}
                toggleFromParent={this.toggleUserModal}
                createNewUser={this.createNewUser}
                
            />
            {
                this.state.isOpenModalEditUser &&
                <ModalEditUser
                isOpen = {this.state.isOpenModalEditUser}
                editUser={this.doEditUser}
                toggleFromParent={this.toggleUserEditModal}
                currentUser={this.state.userEdit}
            />
            }
                <div className="title text-center" >
                    Manage user with ndl
                </div>
                <div className="mx-1">
                    <button className="btn btn-primary px-3" onClick={()=>this.handleAddNewUser()}>
                        <i className="fas fa-plus px-1"></i>
                            Add New User
                    </button>
                </div>
                <div className="user-table mt-4 mx-3">
                    <table id="customers">
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <th>First Name	</th>
                            <th>Last Name	</th>
                            <th>Address	</th>
                            <th>Action</th>
                        </tr>

                        { arrUsers && arrUsers.map((item,index)=>{
                            return(
                                //<div>
                                <tr key={index}>
                                    <td >{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className="btn-edit" onClick={()=>this.handleEditUser(item)}><i className="fas fa-pencil-alt"></i></button>
                                        <button className="btn-delete" onClick={()=>this.handleDeleUser(item)}><i className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                                //</div>
                            )
                        })}
                    </tbody>
                    </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
