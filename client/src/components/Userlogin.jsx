import React, { Component } from 'react';
import LOGO1 from "../images/employeelogo.png";
import SystemUserlogin from './SystemUserlogin';
//import Azurelogin from './Azurelogin';
import {config} from '../AzureConfig';
import { PublicClientApplication } from '@azure/msal-browser';



class Userlogin extends Component {
    constructor(props){
        super(props)

        this.state = {
            isSystem: false,
            //AzureLoginSuccess: false,
 
        };

      
    }

      azurelogin(){
        this.props.history.push(`/azure`);
      }
    
      logout(){
        this.PublicClientApplication.logout();
      }
    
    setUser=(e)=>{
        e.preventDefault();
        this.setState({isSystem: false})
        console.log(this.state.isSystem);
    }

    setSystemUser=(e)=>{
        e.preventDefault();
        this.setState({isSystem: true})
        console.log(this.state.isSystem);
    }

    render() {

        let {isSystem}  = this.state;
        console.log("Counter parent is calling");
        //let {AzureLoginSuccess} = this.state;

        return (
            
            <div className = 'login_box'>
                <form className ="main_page">
                       
                        {/*<img src= {require("./images/employeelogo.png")} alt="Employee_Logo"></img></div>*/}

                        
                        <img src= {LOGO1} style={{width:"85%", height:"60px",marginBottom:"20px"}} alt="Employee_Logo"></img>
                        <br/>
                        
                        <button style={{fontSize:"16px",width:"320px", height:"90px"}} className = "User_Button" onClick={this.setUser}>USER</button>
                        <button style={{fontSize:"16px",width:"320px", height:"90px"}} className = "System_User_Button" onClick={this.setSystemUser}>SYSTEM USER </button>
                        

                        {/* conditional rerendering for different login display form*/}
                        {isSystem?
                        <SystemUserlogin/> :
                        <button  style={{fontSize:"16px",borderRadius: "10px", marginTop: "40px",marginBottom: "50px",width:"100px", height:"50px"}} 
                        className = "Login_Button" onClick= {()=>this.azurelogin()} >LOGIN</button>}

                         
                </form>

            </div>
            
        );
    }
}

export default Userlogin;