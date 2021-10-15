import React, { Component } from 'react';

class Userlogin extends Component {
    constructor(props){
        super(props)

        this.state ={
            userName: '',
            password:''
        }
    }
    render() {
        return (
            <div className = 'login_box'>
                <form className ="login">
         
                <p>Update this to github please version xx!!!!!</p>
                
                </form>

            </div>
            
        );
    }
}

export default Userlogin;