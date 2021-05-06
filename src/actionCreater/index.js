import {REGISTER,LOGIN,UPLOADFILE,MESSAGECLOSE,FILESIZENMESSAGE,SELECTSAVEACTION,UPDATESELECT,CRUDSAVE,LOGOUT,GETLISTING} from './type'
import { CommentAction } from 'semantic-ui-react';
const axios = require('axios');
// FOR REGISTER FUNCTIONALITY
export  const registerFunction=(state)=>(

	dispatch=>{
		axios.post('http://127.0.0.1:4000/register',state)
		.then(response=>{
			dispatch ({
				type:REGISTER,
				payload:state
			})
		})
		.catch(err=>{
		  	console.log(err,"error section")
		})		
	}
)

export const logout = ()=>{
	localStorage.clear()
	return {
		type:LOGOUT,
		
	}
}

const checkAuthTime = (expireIn)=>{
	return dispatch=>{
		setTimeout(()=>{
			dispatch(logout());
		},expireIn *1000)
	}
}

const authSuccess = (response,colorstatus)=>{
	// console.log(response.data.data,"responce section")
	return {
		type:LOGIN,
		payload:{msgstatus:true,color:colorstatus,message:response.data.message,title:response.data.title,data:response.data.data.token}
	}
}

// FOR LOGIN FUNCTIONALITY
export  const loginaction=(state)=>{
	return dispatch=>{
		axios.post('http://127.0.0.1:4000/login',state)
		.then(response=>{
			console.log(response.data.status)
			var colorstatus=(response.data.status=="error")?'red':'green';
			dispatch (authSuccess(response,colorstatus));
			console.log(response.data.data.expiresIn,'887')
			dispatch(checkAuthTime(response.data.data.expiresIn));
			const expirtDate = new Date(new Date().getTime()+response.data.data.expiresIn*1000);
			localStorage.setItem('token',response.data.data.token);
			localStorage.setItem('expireIn',expirtDate);

		})
		.catch(err=>{
		  	console.log(err,"error section")
		})
	}
}

// FOR SHOW MESSAGE FUNCTIONALITY
export  const messageclose=()=>(
	dispatch=>{
		dispatch({
			type:MESSAGECLOSE
		})
	}
)

// FOR CRUDSAVE MESSAGE FUNCTIONALITY
export  const savecrud=(state)=>(	
	dispatch => {
		axios.post('http://127.0.0.1:4000/savecrud', state,{
			headers: {
	'Content-Type': 'application/json',
	'Authorization': 'Bearer '+localStorage.getItem('token')
  }
		  })
		.then(response=>
			{
				dispatch({
					type:CRUDSAVE,
					payload:response.data
				})
			}
		)
		.catch(err=>{
		  	console.log(err,"error section")
		})	
	}
)




export  const getListingData=(state)=>(
	dispatch => {
		axios.get('http://127.0.0.1:4000/getcrud',{
			headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer '+localStorage.getItem('token')
			}
		})
		.then(response=>
			{
				dispatch({
					type:GETLISTING,
					payload:response.data
				})
			}
		)
		.catch(err=>{
		  	console.log(err,"error section")
		})	
	}
)

// FOR FILE UPLAOD FUNCTIONALITY
export  const fileuplad=(state)=>(
	dispatch => {
		axios.post('http://127.0.0.1:4000/fileupload',state)
		.then(response=>
			{
				dispatch({
					type:UPLOADFILE,
					payload:response.data
				})
			}
		)
		.catch(err=>{
		  	console.log(err,"error section")
		})	
	}
)

// FOR FILE SIZE FUNCTIONALITY
export  const filesize=()=>(
	dispatch => {
		dispatch({
			type:FILESIZENMESSAGE
		})
	}
)

// FOR SELECT SAVE FUNCTIONALITY
export  const selectsave=(state)=>(
	dispatch => {
		axios.post('http://127.0.0.1:4000/selectsave',state)
			.then(response=>{					  
					dispatch({
						type:SELECTSAVEACTION,
						payload:response.data
					})	
				}			 
			)
			.catch(err=>{
			  	console.log(err,"error section")
		})
	}
)

// FOR SELECT SAVE FUNCTIONALITY
export  const selecteddelete=(state)=>(
	dispatch => {
		axios.post('http://127.0.0.1:4000/deleteselectsave',state)
			.then(response=>{					  
					dispatch({
						type:UPDATESELECT,
						payload:response.data
					})	
				}			 
			)
			.catch(err=>{
			  	console.log(err,"error section")
		})
	}
)

export const autoSignIn = (state)=>{
	return dispatch=>{
		const token = localStorage.getItem('token');
		if(!token){
			dispatch(logout());
		}else{
			const expiryDate = localStorage.getItem('expireIn');
			if( new Date().getTime() <= new Date(expiryDate).getTime()){
				const newtime= new Date(expiryDate).getTime() - new Date().getTime()
				console.log(newtime/1000)
				dispatch(authSuccess({msgstatus:true,color:'',message:'',title:'',data:{data:{token:token}}},''))
				dispatch(checkAuthTime(newtime/1000));
			}else{
				console.log("here")
				dispatch(logout());
			}
		}
	}
}
