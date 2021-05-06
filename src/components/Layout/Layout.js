import React, {Component} from 'react';
import Nav from '../header/Nav';

class Layout extends Component {


    render(){
        return (
            <>
                <Nav />
                {this.props.children}
            </>
        )
        
    }
}

export default Layout;