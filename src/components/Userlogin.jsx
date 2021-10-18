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
                        <button style={{fontSize:"16px",width:"320px", height:"90px"}} className = "btn btn-danger">SYSTEM USER</button>
                        <button style={{fontSize:"16px",width:"320px", height:"90px"}} className = "btn btn-danger">USER</button>

                        <input style={{fontSize:"16px",borderRadius: "10px", marginTop: "20px",width:"500px", height:"50px"}} 
                        placeholder="  Username" name = "UserName" className="form-control" value ={this.state.userName} onChange={this.changeUserNameHandler}/>

                        <input  style={{fontSize:"16px",borderRadius: "10px", marginTop: "20px",width:"500px", height:"50px"}} 
                        placeholder="  Password" name = "UserName" className="form-control" value ={this.state.password} onChange={this.changePasswordHandler}/>
                        <br/>
                        <button  style={{boxShadow:"none",fontSize:"16px",marginRight:"400px",borderRadius: "10px", marginTop: "40px",marginBottom: "20px",width:"100px", height:"50px",backgroundColor:"red",color:"white"}} 
                        onClick = {this.Login} className = "btn btn-danger">LOGIN</button>
        
 
                </form>

            </div>
            
        );
    }
}

export default Userlogin;