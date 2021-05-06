import React from 'react'
import { Form,Checkbox,Button} from 'semantic-ui-react'
import { connect }from 'react-redux'
import Msg from '../messages/Msg'
import {loginaction , messageclose} from '../../actionCreater/index';
import {Redirect} from 'react-router-dom';

class Signin extends  React.Component{
	constructor(props){
		super(props)
		this.state={}
	}
	getfieldvalue=(e)=>{
		this.setState({[e.target.name]:e.target.value},function(){
			console.log(this.state)
		})
	}
	submitform = (e)=>{
		this.props.loginform(this.state);
	}
	closemsg=()=>{
		this.props.msgclose()
	}
	render(){

		if(this.props.isAuthenticated){
			//localStorage.setItem("token", this.props.token);
			//return <Redirect to="/register" />
		}

		return(
		<Form onSubmit={this.submitform}>
		<Msg msg={this.props.message} color={this.props.color} title={this.props.title} dismismsg={this.closemsg} status={this.props.msgstatus} />
			<Form.Field>
				<label>UserName</label>
				<input onChange={this.getfieldvalue}  name="username" placeholder='First Name' />
			</Form.Field>
			<Form.Field>
				<label>Password</label>
				<input onChange={this.getfieldvalue} name="password" placeholder='Last Name' />
			</Form.Field>			
			<Button type='submit'>Login</Button>
		</Form>
  	)
	}
}

const mapStateToProps=(state)=>({
	message:state.message,	
	title:state.title,
	msgstatus:state.msgstatus,
	color:state.color,
	isAuthenticated:state.token != null,
	token:state.token?state.token:'' ,
})

const mapDispatchToProps=(dispatch)=>({
	loginform: (state) => { dispatch(loginaction(state)) },
	msgclose: () => {dispatch(messageclose())}
})

Signin=connect(mapStateToProps,mapDispatchToProps)(Signin)

export default Signin
