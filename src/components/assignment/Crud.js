import React from 'react'
import { Button,Form, Grid, Segment,Divider,Checkbox,Table,Label,Menu,Icon} from 'semantic-ui-react'
import { connect } from 'react-redux'
import Msg from '../messages/Msg'
import { UPLOADFILE } from '../../actionCreater/type'
import {messageclose,savecrud,getListingData} from '../../actionCreater/index'
class Crud extends React.Component{
	constructor(props){
		super(props)
		this.state={
		}
	}	 
	closemsg=()=>{
		this.props.msgclose()
	}
	onchangeEvent=(e)=>{
		this.setState({[e.target.name]:e.target.value})
	}
	checkvisible=(e,data)=>{
		this.setState({checkedstatus:data.checked})
	}
	componentDidMount=()=>{
    this.props.getListingData()
  }
	submitAction=(e,data)=>{
		this.props.savecrud(this.state)
	}  

	render(){
		const  data=this.props.data?this.props.data:[]
    console.log(this.props,"*************")
    let table=data.map((key,index)=>{
        return (<Table.Row key={index}>
        <Table.Cell>{key.fname}</Table.Cell>
        <Table.Cell>{key.lname}</Table.Cell>
        <Table.Cell>{key.visible}</Table.Cell>
      </Table.Row>)
    })
    console.log(table,"hjhhh  ")
		return(
			<Segment placeholder>
			<Msg msg={this.props.message} color={this.props.color} title={this.props.title} dismismsg={this.closemsg} status={this.props.msgstatus} />
    <Grid columns={2} relaxed='very' stackable>
    <Grid.Column>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='FNAME'
            name='fname'
            onChange={this.onchangeEvent}
            placeholder='Username'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='LNAME'
            name="lname"
            onChange={this.onchangeEvent}
            type='password'
            placeholder='Lastname'
          />
          <Checkbox onClick={this.checkvisible} name='visible' label='Make my profile visible' />

          <Button onClick={this.submitAction} content='Submit' primary />
        </Form>
      </Grid.Column>

      <Grid.Column>
       <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
        <Table.HeaderCell>Header</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>   
       {table}
    </Table.Body>     
  </Table>
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
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
  savecrud: (state) => {dispatch(savecrud(state))},  
	getListingData: (state) => {dispatch(getListingData())},	 
	msgclose: () => {dispatch(messageclose())}	
})

Crud= connect(mapStateToProps,mapDispatchToProps)(Crud)
export default Crud;