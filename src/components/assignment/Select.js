import React from 'react'
import { Form,Button,Select} from 'semantic-ui-react'
import { connect } from 'react-redux'
import Msg from '../messages/Msg'
import { UPLOADFILE } from '../../actionCreater/type'
import {fileuplad,filesize,messageclose,selectsave,selecteddelete} from '../../actionCreater/index'
class Selectform extends React.Component{
	constructor(props){
		super(props)
		this.state={
			selectname:'',
			showdelete:false
		}
	}	
	onchangeaction=(e)=>{
		this.setState({[e.target.name]:e.target.value})
	}
	deleteselected=(e)=>{
		this.props.selecteddelete({name:this.state.selectname})
	}
	submitaction=(e)=>{
		e.preventDefault();
		this.props.selectsubmit(this.state)
		this.setState({showdelete:false})
	}
	closemsg=()=>{
		this.props.msgclose()
	}
	selectchange=(e,data)=>{
		this.setState({selectname:data.value,showdelete:true})
	}
	render(){
		const  options=this.props.data?this.props.data:[]
		return(
			<Form>
				<Msg msg={this.props.message} color={this.props.color} title={this.props.title} dismismsg={this.closemsg} status={this.props.msgstatus} />
				<Form.Field>
					<label>Last Name</label>
					<input placeholder='Last Name' onChange={this.onchangeaction} value={this.state.selectname} name="selectname" />
				</Form.Field>
				<Button type='submit' onClick={this.submitaction}>Submit</Button>
				<Select options={options} selected onChange={this.selectchange} value={this.state.selected} />
				{this.state.showdelete?(<Button type='submit' onClick={this.deleteselected}>Delete</Button>):""}
			</Form>
		)
	}
}
 
const mapStateToProps=(state)=>({
	message:state.message,	
	title:state.title,
	msgstatus:state.msgstatus,
	data:state.data,
	color:state.color,
})
const mapDispatchToProps=(dispatch)=>({
	selectsubmit: (state) => {dispatch(selectsave(state))},	 
	msgclose: () => {dispatch(messageclose())},
	selecteddelete: (state) => {dispatch(selecteddelete(state))},
})

Selectform= connect(mapStateToProps,mapDispatchToProps)(Selectform)
export default Selectform;