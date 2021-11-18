import React, { Component } from 'react'

class SystemUserlogin extends Component {
    constructor(props){
        super(props)

        this.state = {
            userName: '',
            password:'',
           
        }

        this.changeUserNameHandler= this.changeUserNameHandler.bind(this);
        this.changePasswordHandler= this.changePasswordHandler.bind(this);

    }

    Login =(e)=>{
        e.preventDefault();
        console.log("Username:"+this.state.userName+ "Password:" +this.state.password );
    }
    

    changeUserNameHandler =(event)=>{
        this.setState({userName:event.target.value});
    }

    changePasswordHandler =(event)=>{
        this.setState({password:event.target.value});
    }

    render() {
        return (
            <div>
                <input style={{fontSize:"16px",borderRadius: "10px", marginTop: "20px",width:"80%", height:"50px",border: "2px solid rgb(207, 200, 200)" }} 
                        placeholder="  Username" name = "UserName" className="input_username" value ={this.state.userName} onChange={this.changeUserNameHandler}/>

                        <input  style={{fontSize:"16px", borderRadius: "10px", marginTop: "20px",width:"80%", height:"50px",border: "2px solid rgb(207, 200, 200)"}} 
                        placeholder="  Password" name = "UserName" className="input_password" value ={this.state.password} onChange={this.changePasswordHandler}/>
                        <br/>
                        <button  style={{fontSize:"16px", borderRadius: "10px", marginTop: "40px",marginBottom: "20px",width:"100px", height:"50px"}} 
                        onClick = {this.Login} className = "Login_Button">LOGIN</button>
            </div>
        )
    }


}

export default SystemUserlogin;
