import React from 'react'
import { Form,Checkbox,Button} from 'semantic-ui-react'
import { connect }from 'react-redux'
import { LOGIN,REGISTER } from '../../actionCreater/type'
import {registerFunction,messageclose} from '../../actionCreater/index'
import Msg from '../messages/Msg'
import Nav from '../header/Nav'
class Signup extends  React.Component{
	constructor(props){
		super(props)
		this.state={
			//message:true
		}
	}
	getfieldvalue=(e)=>{
		this.setState({[e.target.name]:e.target.value})
	}
	submitform= (e)=>{
		this.props.submiToDispath(this.state)
	}
	closemsg=()=>{
		this.props.msgclose()
	}
	render(){
		return(	
		<Form onSubmit={this.submitform}>
			<Form.Field>
				<Msg msg={this.props.message} title={this.props.title} dismismsg={this.closemsg} color={this.props.color} status={this.props.msgstatus} />
				<label>First Name</label>
				<input onChange={this.getfieldvalue}  name="fname" placeholder='First Name' required />
			</Form.Field>
			<Form.Field>
				<label>Last Name</label>
				<input onChange={this.getfieldvalue} name="lname" placeholder='Last Name' required />
			</Form.Field>
			<Form.Field>
				<label>Email</label>
				<input type="email" onChange={this.getfieldvalue} name="email" placeholder='Email' required />
			</Form.Field>
			<Form.Field>
				<label>Password</label>
				<input type="password" onChange={this.getfieldvalue} name="password" placeholder='Enter the password' required />
			</Form.Field>			
			<Button type='submit'>Signup</Button>
		</Form>
  	)
	}
}

const mapStateToProps=(state)=>({
	message:state.message,	
	title:state.title,
	msgstatus:state.msgstatus,
	color:state.color,
})
const mapDispatchToProps=(dispatch)=>({
	submiToDispath: (state) => {dispatch(registerFunction(state))},
	msgclose: () => {dispatch(messageclose())}
})
Signup=connect(mapStateToProps,mapDispatchToProps)(Signup)
export default Signup