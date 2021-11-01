import React, { Component } from 'react'
import LOGO1 from "../images/employeelogo.png";
import '../StaffForm.css';
import Footer from './Footer';

class StaffParticularForm extends Component {
    constructor(props){
        super(props)

        this.state= {

        }
    }

    render() {
        return (
            <div className ="Staff_Form">
                <img src= {LOGO1} style={{position:"absolute",top:"8px",left:"20px"}} alt="Employee_Logo"></img>
                <div className="Staff_Form_Title">
                    <h2 style={{textAlign:"left", marginLeft:"50px"}} > Staff Particular Form   (Year 2020/2021)</h2>
                </div>
                
                <div className ="Personal_Details">
                <h3 style={{textAlign:"left", marginLeft:"50px",color:"red"}} >Personal Details </h3>
                <label>Name:</label>
                <input placeholder="Name" name="StaffName" className="staff_name"></input>
                <label>Employee Number:</label>
                <input placeholder="Employee Number" name="EmployeeNum" className="Employee_num"></input>
                <br/>
                <label>Passport/NRIC No.</label>
                <input placeholder="Password No" name="PasswordNo" className="Password_no"></input>
                <input placeholder="Expired Date" name="ExpiredDate" className="Expired_date"></input>
                <br/>
                <label>Passport/NRIC Photocopy:</label>
                {/*need to add image and onclick to upload stuff*/}
                <div className = "passport_file">
                    <input type = "file" className= "passport_photocopy" id="inputFile"></input>
                </div> 
                <br/>
                <label>Marital Status:</label>
                <select className="custom-select" id="MaritalStatus">
                    <option value>Single</option>
                    <option value>Married</option>
                    <option value>Window</option>
                    <option value>Divorcee</option>
                </select>
                <label> Do you have children? </label>
                <input className ="GotChild" type="checkbox"></input>
                <label> Yes </label>
                <input className ="NoChild" type="checkbox"></input>
                <label> No </label>
                <br/>
                <label>Mobile No:</label>
                {/*need add the dropdown box for different country number */}
                <select className="custom-select" id="PhoneNum1">
                    <option value>(+60 Malaysia)</option>
                    <option value>(+852 Hong Kong)</option>
                    <option value>(+65 Singapore)</option>
                    <option value>(+86 China)</option>
                    <option value>(+886 Taiwan)</option>
                </select>
                <input placeholder="Mobile No" name="MobileNo" className="Mobile_no"></input>
                <label>House No:</label>
                {/*need add the dropdown box for different country number */}
                <select className="custom-select" id="PhoneNum2">
                    <option value>(+60 Malaysia)</option>
                    <option value>(+852 Hong Kong)</option>
                    <option value>(+65 Singapore)</option>
                    <option value>(+86 China)</option>
                    <option value>(+886 Taiwan)</option>
                </select>
                <input placeholder="House No" name="HouseNo" className="House_no"></input>
                <label>Email Address (Personal):</label>
                <input placeholder="Email Address" name="EmailAddress" className="Email_address"></input>
                <br/>
                <br/>
                <label>Address(Permanent)</label>
                <br/>
                <label>Address Line 1:</label>
                <input placeholder="-" name="PAddressLine1" className="P_Address_line1"></input>
                <label>City:</label>
                
                <input placeholder="Please select" name="PCity" className="P_City"></input>
                <label>State</label>
                <input placeholder="Please select" name="PState" className="P_State"></input>
                <br/>
                <label>Address Line 2:</label>
                <input placeholder="-" name="PAddressLine2" className="P_Address_line2"></input>
                <label>Postcode:</label>
                <input placeholder="-" name="PPostcode" className="P_Postcode"></input>
                <label>Country:</label>
                <input placeholder="Malaysia" name="PCountry" className="P_Country"></input>
                <br/>
                <br/>
                <label>Address(Current)</label>
                {/**add the clickbox to copy the permanent address as current */}
                <br/>
                <label>Address Line 1:</label>
                <input placeholder="-" name="CAddressLine1" className="C_Address_line1"></input>
                <label>City:</label>
                <input placeholder="Please select" name="CCity" className="C_City"></input>
                <label>State</label>
                <input placeholder="Please select" name="CState" className="C_State"></input>
                <br/>
                <label>Address Line 2:</label>
                <input placeholder="-" name="CAddressLine2" className="C_Address_line2"></input>
                <label>Postcode:</label>
                <input placeholder="-" name="CPostcode" className="C_Postcode"></input>
                <label>Country:</label>
                <input placeholder="Malaysia" name="CCountry" className="C_Country"></input>
                </div>

                <div className ="Emergency_Contact">
                <h3 style={{textAlign:"left", marginLeft:"50px",color:"red"}} >Emergency Contact </h3>
                <label>1. Name:</label>
                <input placeholder="Spounse's Name" name="SpounseName" className="Spounse_name"></input>
                <label>Relationship:</label>
                <input placeholder="Husband" name="SpounseRelationship" className="Spounse_relationship"></input>
                <label>Contact No:</label>
                {/*Add the dropdown box for the contact number. Different country */}
                <select className="custom-select" id="PhoneNum3">
                    <option value>(+60 Malaysia)</option>
                    <option value>(+852 Hong Kong)</option>
                    <option value>(+65 Singapore)</option>
                    <option value>(+86 China)</option>
                    <option value>(+886 Taiwan)</option>
                </select>
                <input placeholder="Spounse's ContactNum" name="SpounseContactNum" className="Spounse_contactnum"></input>
                <br/>
                <label>2. Name:</label>
                <input placeholder="Parent's Name" name="ParentName" className="Parent_name"></input>
                <label>Relationship:</label>
                <input placeholder="Father" name="ParentRelationship" className="Parent_relationship"></input>
                <label>Contact No:</label>
                {/*Add the dropdown box for the contact number. Different country */}
                <select className="custom-select" id="PhoneNum4">
                    <option value>(+60 Malaysia)</option>
                    <option value>(+852 Hong Kong)</option>
                    <option value>(+65 Singapore)</option>
                    <option value>(+86 China)</option>
                    <option value>(+886 Taiwan)</option>
                </select>
                <input placeholder="Parent's ContactNum" name="ParentContactNum" className="Parent_contactnum"></input>
                </div>
                
                <div className ="Spouse_Particular">
                <h3 style={{textAlign:"left", marginLeft:"50px",color:"red"}} >Spouse Particular (If Married) </h3>
                <label>Spounse's Name:</label>
                <input placeholder="Husband /Wife Name" name="SpounseName2" className="Spounse_name2"></input>
                <label>Relationship:</label>
                <input placeholder="Husband" name="SpounseRelationship2" className="Spounse_relationship2"></input>
                <label>Contact No:</label>
                {/*Add the dropdown box for the contact number. Different country */}
                <select className="custom-select" id="PhoneNum5">
                    <option value>(+60 Malaysia)</option>
                    <option value>(+852 Hong Kong)</option>
                    <option value>(+65 Singapore)</option>
                    <option value>(+86 China)</option>
                    <option value>(+886 Taiwan)</option>
                </select>
                <input placeholder="Spounse's ContactNum" name="SpounseContactNum2" className="Spounse_contactnum2"></input>
                <br/>
                <label>Marriage Certificate:</label>
                <input placeholder="Marriage Cert" name="MarriageCert" className="Marriage_Cert"></input>
                <br/>
                </div>

                <div className = "Education_Background">
                <h3 style={{textAlign:"left", marginLeft:"50px",color:"red"}} >Education Background (Additional Certificate Professional / Training Certifications</h3>
                    <table className="table table-dark table-bordered">
                    <thead>
                        <tr>
                            <th>NO.</th>
                            <th>NAME OF COLLEGE/UNIVERSITY/TRAINING CENTER</th>
                            <th>YEAR OBTAINED (YYYY)</th>
                            <th>CERTIFICATION</th>
                            <th>CERTIFICATION COPY</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input placeholder="" name="" className=""></input></td>
                            <td><input placeholder="" name="" className=""></input></td>
                            <td><input placeholder="" name="" className=""></input></td>
                            <td><input placeholder="" name="" className=""></input></td>
                        </tr>
                    </tbody>
                </table>
                {/*popup te table for child details  */}
                <div className ="Child_Details">
                <h3 style={{textAlign:"left", marginLeft:"50px",color:"red"}} >Child Details</h3>
                <table className="table table-dark table-bordered">
                    <thead>
                        <tr>
                            <th>NO.</th>
                            <th>CHILDREN'S NAME</th>
                            <th>BIRTH DATE (DD/MM/YYYY)</th>
                            <th>BIRTH CERTIFICATE PHOTOCOPY</th>
                            <th>NATIONALITY</th>
                            <th>OCUPATION/SCHOOL/INSTITUTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                     <tr>
                            <td><input placeholder="" name="" className=""></input></td>
                            <td><input placeholder="" name="" className=""></input></td>
                            <td><input placeholder="" name="" className=""></input></td>
                            <td><input placeholder="" name="" className=""></input></td>
                        </tr>
                    </tbody>
                </table>
                </div>
                </div>

                <div className ="PDPA">
                <h3 style={{textAlign:"left", marginLeft:"50px",color:"red"}} >PDPA Consent Clause</h3>   
                </div>
                <p/>
                <p>By submitting this Form, you hereby agree that Software International Corporation may collect,obtaion,store and process your personal information that you provide in this From.</p>
                <p> Tired to type all. My fault</p>
                <p>I hereby declare that all information given herein is true and complete and will be responsible to any consequences due to discrepancy od the information provided*</p>
                <input className ="Agree_PDPA" type="checkbox"></input>
                <label> Yes </label>
                <p/>
                <button  style={{textAlign:"right", marginRight:"50px"}} className = "Cancel_Button">Cancel</button>
                <button  style={{textAlign:"right"}} className = "Submit_Button">Submit</button>
                <Footer/>
            </div>
        )
    }
}

export default StaffParticularForm;