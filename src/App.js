import React from 'react';
import { Input, Menu ,Container} from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';
import { connect }from 'react-redux';
import 'semantic-ui-css/semantic.min.css';

import Signup from './components/users/Signup'
import Signin from './components/users/Signin'
import Files from './components/assignment/Files'
import Select from './components/assignment/Select'
import Crud from './components/assignment/Crud';
import Layout from './components/Layout/Layout';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import {autoSignIn} from './actionCreater/index';

// console.log(initionstate

class  App extends React.Component  {

  componentDidMount(){
    this.props.onAutoSiginIn();
  }

  render(){  
    return (
        <Container>
          <Switch>
           <Route exact path="/" render={()=><Layout><Signin /></Layout>}></Route>
            <Route path="/register" render={()=><Layout><Signup /></Layout>}></Route>
            <Route path="/select" render={()=><Layout><Select /></Layout>}></Route>
            <Route path="/crud" render={()=><Layout><Crud /></Layout>}></Route>
            <Route path="/login" render={()=><Layout><Signin /></Layout>}></Route>
            <Route path="/fileupload" render={()=><Layout><Files /></Layout>}></Route>
          </Switch>
        </Container>
      
    );
  }
}

const mapStateToProps=(state)=>({
	isAuthenticated:state.token != null,
})

const mapDispatchToProps=(dispatch)=>{
  return {
    onAutoSiginIn:()=>{ dispatch(autoSignIn()) }
  }
}

App=connect(mapStateToProps,mapDispatchToProps)(App)
export default App;
