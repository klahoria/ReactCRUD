import React from 'react'
import { Form,Button} from 'semantic-ui-react'
import { connect } from 'react-redux'
import Msg from '../messages/Msg'
import { UPLOADFILE } from '../../actionCreater/type'
import {fileuplad,filesize,messageclose} from '../../actionCreater/index'


class Files extends React.Component{
	constructor(props){
		super(props)
		this.state={ 
		}
	}	
	onchangeaction=(e)=>{
		e.preventDefault();
		const file=e.target.files[0]
		if(e.target.files[0] && e.target.files[0].size > 13423711){
			var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
			if (307200 == 0) return '0 Byte';
			var i = parseInt(Math.floor(Math.log(307200) / Math.log(1024)));
			console.log(i,"i")
			let filesize=Math.round(307200 / Math.pow(1024, i), 2) + ' ' + sizes[i]
			this.props.imagefilesize()
			console.log(this.state)
		}
		else if(e.target.files[0]){

			let reader = new FileReader();
			reader.readAsDataURL(file)
			reader.onload=(e)=>{			
				this.setState({filename:e.target.result},()=>{console.log(this.state,'hello')})
			}
		}
		else{
			this.setState({filename:""})
			alert('please add any image file')
		}
	}
	submitfile=(e)=>{
		e.preventDefault();
		this.props.passdatatodispatch(this.state)
	}
	closemsg=()=>{
		this.props.msgclose()
	}
	render(){
		// console.log(this.props,"file action")
		return(
			<Form>
			<Msg msg={this.props.message} color={this.props.color} title={this.props.title} dismismsg={this.closemsg} status={this.props.msgstatus} />
				<Form.Field>
					<label>Files</label>
					<input type="file" onChange={this.onchangeaction} name="filename" placeholder='Enter the password' />
				</Form.Field>
				{ this.state.filename && this.state.filename?(<img src={this.state.filename}  width="200" height="100" />):""}
				{ this.state.filename === "" && this.state.filename?(<video autoPlay="true" src={this.state.filename} width="200" height="100" />):""}
				<Button type='submit' onClick={this.submitfile}>Upload</Button>
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
	passdatatodispatch: (state) => {dispatch(fileuplad(state))},
	imagefilesize: () => {dispatch(filesize())},
	msgclose: () => {dispatch(messageclose())}
})

Files= connect(mapStateToProps,mapDispatchToProps)(Files)
export default Files;