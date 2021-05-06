import React from 'react'

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import { connect }from 'react-redux';
import { Input, Menu} from 'semantic-ui-react'
import { loginaction,logout } from '../../actionCreater';
class Nav extends React.Component{
	constructor(props){
		super(props)
	}
	callLogout=(e)=>{
		this.props.callLogoutAction()
	}
	//{!this.props.isAuthenticated && <Menu.Item name='login'as={Link}to="/login"/>}
	render(){		
		return(
		<Menu secondary>
	        <Menu.Item
	          name='home'
	          as={ Link }
	          to="/" 
	        />
			{this.props.isAuthenticated?(<Menu.Item name='Crud' as={Link} to="/crud" />):(<><Menu.Item name='login' as={Link} to="/login" /> <Menu.Item name='register' as={Link } to="/register" /></>)}
	        <Menu.Item
	          name='fileupload'
	          as={Link}
	          to="/fileupload"
	        />
	        <Menu.Item
	          name='select'
	          as={Link}
	          to="/select"
	        />
	         			
		
	       <Menu.Menu position='right'>
	          <Menu.Item>
	            <Input icon='search' placeholder='Search...' />
	          </Menu.Item>
			  {this.props.isAuthenticated?(<Menu.Item onClick={this.callLogout} name='Logout' />):<Menu.Item name='login' />}	          
	        </Menu.Menu>
	      </Menu>
      )
	}
 
}

const mapStateToProps=(state)=>({ 
	isAuthenticated:state.token != null,
})
const mapDispatchToProps=(dispatch)=>({
	callLogoutAction:()=>  {dispatch(logout())}
})

Nav=connect(mapStateToProps,mapDispatchToProps)(Nav)
export default Nav;