import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { dispatch } from '../../../redux';
import * as actions from '../../../store/actions'
import './TableManagerUser.scss'

class TableManagerUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userRedux:[]

        }
    }
    componentDidMount(){
        this.props.fetchUserRedux();
    }
    componentDidUpdate(preProps,preState,snapshot){
        if(preProps.listUsers !== this.props.listUsers){
            this.setState({
                userRedux: this.props.listUsers
            })
        }
    }
    handleDeleteUser=(user)=>{
        this.props.deleteUser(user.id)
    }
    handleEditUser = (user)=>{
        console.log("check user edit",user);
        this.props.handleEditUserFromParentKey(user)
    }
    render() {
        
        let arrUsers = this.state.userRedux;
        return (
            <table id="tableManagerUser">
                <tbody>
                    <tr>
                        <th>Email</th>
                        <th>First Name	</th>
                        <th>Last Name	</th>
                        <th>Address	</th>
                        <th>Action</th>
                    </tr>
                    {arrUsers && arrUsers.length>0 &&
                        arrUsers.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td >{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button 
                                            className="btn-edit" 
                                            onClick={()=>this.handleEditUser(item)}
                                        ><i className="fas fa-pencil-alt"></i></button>
                                        <button 
                                            onClick={()=>this.handleDeleteUser(item)}
                                            className="btn-delete"><i className="fas fa-trash"></i></button>
                                    </td>
                            </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        );
    }

}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: ()=> dispatch(actions.fetchAllUSersStart()),
        deleteUser:(id)=>dispatch(actions.deleteUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManagerUser);
