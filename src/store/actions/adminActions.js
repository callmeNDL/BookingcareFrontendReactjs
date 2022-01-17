import actionTypes from './actionTypes';
import { 
        getAllCodeService ,
        createNewUserService,
        getAllUsers,deleteUserService,
        editUserService,
        getTopDoctorHomeService,
        getAddDoctors,
        saveDetailDoctorService,
        getDetailDoctorService,
        
    } from '../../services/userService';
import { toast } from "react-toastify";
// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })
export const fetchGenderStart = () => {
    return async(dispatch, getState)=>{
       
        try {
            dispatch({type:actionTypes.FETCH_GENDER_START})
            let res = await getAllCodeService("GENDER");
            
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            }else{
               
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
           dispatch( fetchGenderFailed());
            console.log('fetchGenderStart error', e);
        }
    }
    
}
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
}) 
export const fetchPositionStart = () => {
    return async(dispatch, getState)=>{
       
        try {
            let res = await getAllCodeService("POSITION");
            
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data));
            }else{
               
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
           dispatch( fetchPositionFailed());
            console.log('fetchPositionStart error', e);
        }
    }
    
}
export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})
export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
}) 
export const fetchRoleStart = () => {
    return async(dispatch, getState)=>{
       
        try {
            let res = await getAllCodeService("ROLE");
            
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            }else{
               
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
           dispatch( fetchRoleFailed());
            console.log('fetchRoleStart error', e);
        }
    }
    
}

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})
export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
}) 

//
export const createNewUser = (data)=>{
    return async(dispatch, getState)=>{ 
        try {
            let res = await createNewUserService(data);
            if (res && res.errCode === 0) {           
                toast.success('🔄 Create new user succeed', {
                    });
                dispatch(createUserSuccess(res.data));
                dispatch(fetchAllUSersStart())
            }else{
                toast.error('Create user user error');
                dispatch(createUserFailed());
            }
        } catch (e) {
            toast.error('Create user user error');

           dispatch( createUserFailed());
            console.log('createUser error', e);
        }
    }
}
export const createUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
}) 
export const createUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
}) 

//read all user
export const fetchAllUSersStart = () => {
    return async(dispatch, getState)=>{
       
        try {
            let res = await getAllUsers("ALL");
           
            if (res && res.errCode === 0) {
                
                dispatch(fetchAllUsersSuccess(res.users.reverse()));
                
            }else{
                
                dispatch(fetchAllUsersFailed());
            }
        } catch (e) {
           dispatch( fetchAllUsersFailed());
            console.log('fetchAllUsersStart error', e);
        }
    }
    
}
export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USER_SUCCESS,
    users:data
}) 
export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USER_FAILED,
}) 

// delete user
export const deleteUser = (userId)=>{
    return async(dispatch, getState)=>{ 
        try {
            let res = await deleteUserService(userId);
            if (res && res.errCode === 0) {           
                toast.info('🚀 Delete user user succeed');
                dispatch(deleteUsersSuccess());
                dispatch(fetchAllUSersStart())
            }else{
                toast.error('Delete user user error');
                dispatch(createUserFailed());
            }
        } catch (e) {
            toast.error('Delete user user error');
           dispatch( createUserFailed());
            console.log('createUser error', e);
        }
    }
}
export const deleteUsersSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
    
}) 
export const deleteUsersFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED,
}) 
export const editAUser = (data)=>{
    return async(dispatch, getState)=>{ 
        try {
            let res = await editUserService(data);
            if (res && res.errCode === 0) {           
                toast.info('🚀 Update user user succeed');
                dispatch(editUsersSuccess());
                dispatch(fetchAllUSersStart())
            }else{
                toast.error('Update user user error');
                dispatch(editUsersFailed());
            }
        } catch (e) {
            toast.error('Update user user error');
           dispatch( editUsersFailed());
            console.log('createUser error', e);
        }
    }
}
export const editUsersSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS,
    
}) 
export const editUsersFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED,
})

//let resDoctor = await getTopDoctorHomeService('');
//action doctor
export const fetchTopDoctor = () => {
    return async(dispatch, getState)=>{ 
        try {
            let res = await getTopDoctorHomeService('');
            
            if(res && res.errCode===0){
                dispatch({
                    type:actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctor:res.data
                })
            }else{
                dispatch({
                    type:actionTypes.FETCH_TOP_DOCTORS_FAILED,
                    
                })
            }
        } catch (e) {
            console.log('FETCH_TOP_DOCTORS_FAILED');
            dispatch({
                type:actionTypes.FETCH_TOP_DOCTORS_FAILED,
                
            })
        }
    }
}
//action get all doctor
export const fetchAllDoctors = () => {
    return async(dispatch, getState)=>{ 
        try {
            let res = await getAddDoctors();
            
            if(res && res.errCode===0){
                dispatch({
                    type:actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                    dataDoctors:res.data
                })
            }else{
                dispatch({
                    type:actionTypes.FETCH_ALL_DOCTORS_FAILED,
                    
                })
            }
        } catch (e) {
            
            dispatch({
                type:actionTypes.FETCH_ALL_DOCTORS_FAILED,
                
            })
        }
    }
}
export const saveDetailDoctor = (data) => {
    return async(dispatch, getState)=>{ 
        try {
            let res = await saveDetailDoctorService(data);
            
            if(res && res.errCode===0){
                toast.info('🚀 Save formation success!');
                dispatch({
                    type:actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
                   
                })
            }else{
                toast.error('Save information error');
                dispatch({
                    type:actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
                    
                })
            }
        } catch (e) {
            toast.error('Save information error');
            dispatch({
                type:actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
                
            })
        }
    }
}
export const getDetailDoctor = (id) => {
    return async(dispatch, getState)=>{ 
        try {
            let res = await getDetailDoctorService(id);
            
            if(res && res.errCode===0){
               
                dispatch({
                    type:actionTypes.GET_DETAIL_DOCTOR_SUCCESS,
                    detailDoctor:res.data
                })
            }else{
                
                dispatch({
                    type:actionTypes.GET_DETAIL_DOCTOR_FAILED,
                    
                })
            }
        } catch (e) {
            
            dispatch({
                type:actionTypes.GET_DETAIL_DOCTOR_FAILED,
                
            })
        }
    }
}