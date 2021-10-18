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
                <form className ="company_logo">
                    

                        <button className = "btn btn-danger">USER</button>
                        <button className = "btn btn-danger">SYSTEM USER</button>

        
 
                </form>

            </div>
            
        );
    }
}

export default Userlogin;