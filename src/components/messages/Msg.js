import React from 'react'
import {Message} from 'semantic-ui-react'
class Msg extends React.Component{
	constructor(props){
		super(props)
		console.log(props)
	}
	render(){
		const result =(this.props.status)?(
				<Message
					onDismiss={this.props.dismismsg}
					header={this.props.title}
					color={this.props.color}
					content= {this.props.msg}  
				/>
			):""

		return (
			result
		)
	}
}
export default Msg;