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
                        {/*<img src= {require("./images/employeelogo.png")} alt="Employee_Logo"></img></div>*/}
                        <br/>
                        <button style={{fontSize:"16px",width:"320px", height:"100px"}} className = "btn btn-danger">SYSTEM USER</button>
                        <button style={{fontSize:"16px",width:"320px", height:"100px"}} className = "btn btn-danger">USER</button>

                        <input style={{borderRadius: "10px", marginTop: "20px",width:"500px", height:"50px"}} placeholder="Username" name = "UserName" className="form-control"/>

                        <input  style={{borderRadius: "10px", marginTop: "20px",width:"500px", height:"50px"}} placeholder="Password" name = "UserName" className="form-control"/>
                        <br/>
                        <button  style={{marginRight:"400px",borderRadius: "10px", marginTop: "40px",marginBottom: "20px",width:"100px", height:"50px"}} className = "btn btn-danger">LOGIN</button>
        
 
                </form>

            </div>
            
        );
    }
}

export default Userlogin;