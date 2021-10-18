import React, { Component } from 'react';
import LOGO1 from "../images/employeelogo.png";


class Userlogin extends Component {
    constructor(props){
        super(props)

        this.state = {
            userName: '',
            password:'',
        }

    }

    // ComponenetDidMount to fetch the employeedata from the backend to check for login purpose

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
            <div className = 'login_box'>
                <form className ="main_page">
                        {/*<img src= {require("./images/employeelogo.png")} alt="Employee_Logo"></img></div>*/}
                        <img src= {LOGO1} style={{width:"85%", height:"60px",marginBottom:"20px"}} alt="Employee_Logo"></img>
                        <br/>
                        <button style={{fontSize:"16px",width:"320px", height:"90px"}} className = "User_Button">SYSTEM USER</button>
                        <button style={{fontSize:"16px",width:"320px", height:"90px"}} className = "System_User_Button">USER</button>

                        <input style={{fontSize:"16px",borderRadius: "10px", marginTop: "20px",width:"500px", height:"50px",border: "2px solid rgb(207, 200, 200)"}} 
                        placeholder="  Username" name = "UserName" className="input_username" value ={this.state.userName} onChange={this.changeUserNameHandler}/>

                        <input  style={{fontSize:"16px",borderRadius: "10px", marginTop: "20px",width:"500px", height:"50px",border: "2px solid rgb(207, 200, 200)"}} 
                        placeholder="  Password" name = "UserName" className="input_password" value ={this.state.password} onChange={this.changePasswordHandler}/>
                        <br/>
                        <button  style={{fontSize:"16px",marginRight:"400px",borderRadius: "10px", marginTop: "40px",marginBottom: "20px",width:"100px", height:"50px"}} 
                        onClick = {this.Login} className = "Login_Button">LOGIN</button>
        
 
                </form>

            </div>
            
        );
    }
}

export default Userlogin;