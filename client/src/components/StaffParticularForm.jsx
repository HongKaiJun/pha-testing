import React, { Component } from 'react'
import LOGO1 from "../images/employeelogo.png";
import '../StaffForm.css';
import Footer from './Footer';
import axios from 'axios';
import EmployeeService from '../service/EmployeeService';

class StaffParticularForm extends Component {
    constructor(props){
        super(props)

        this.state= {
            employee: [],
            EmployeeEmail:'kaijun.hong@sicmsb.com'
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeesByEmail(this.state.EmployeeEmail)
            .then(res => {
                this.setState({ employee : res.data });
            })
            .catch(function(error) {
                console.log(error);
            })
    }


    render() {
        console.log("Employee =>" + JSON.stringify(this.state.employee))
        const {employee} = this.state;

        return (
            <form>
                <img src= {LOGO1} style={{position:"absolute",top:"8px",left:"20px"}} alt="Employee_Logo"></img>
                <div className="Staff_Form_Title">
                    <h2 style={{textAlign:"left", marginLeft:"50px"}} > Staff Particular Form   (Year 2020/2021)</h2>
                </div>
                
                {employee.map((employee,e) =>
                    <div>
                        <div class="card">
                            <div class="card-body">
                                <h4 style={{textAlign:"left",color:"red"}} >Personal Details </h4>
                                <br />
                                <div class="row">
                                    <div class="col-4" style={{textAlign:"left"}}>
                                        Name: {employee.empName}
                                    </div>
                                    <div class="col-4" style={{textAlign:"left"}}>
                                        EmployeeID: {employee.lanId}
                                    </div>
                                </div>
                                <br/>
                                <div class="row">
                                    <div class="col" style={{textAlign:"left"}}>
                                        <label>Passport No:</label>
                                        <br/> 
                                        <input placeholder="Passport No" name="PasswordNo" className="Password_no form-control" defaultValue={employee.passportNo}></input>
                                        <input placeholder="Expired Date" name="ExpiredDate" className="Expired_date form-control" defaultValue={employee.passportNo}></input>
                                    </div>
                                    <div class="col" style={{textAlign:"left"}}>
                                        <label>Passport/NRIC Photocopy:</label>
                                        {/*need to add image and onclick to upload stuff*/}
                                        <div className = "passport_file form-control-file">
                                            <input type = "file" className= "passport_photocopy" id="inputFile"></input>
                                        </div>
                                    </div>
                                    <div class="col" style={{textAlign:"left"}}>
                                        <div class="form-group">
                                            <label>Marital Status:</label>
                                            <br/>
                                            <select className="custom-select form-control" id="MaritalStatus" defaultValue={employee.maritalStatus}>
                                                <option value>Single</option>
                                                <option value>Married</option>
                                                <option value>Window</option>
                                                <option value>Divorcee</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label> Do you have children? </label>
                                            <input className ="GotChild" type="checkbox" checked></input>
                                            <label> Yes </label>
                                            <input className ="NoChild" type="checkbox"></input>
                                            <label> No </label>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>Mobile No:</label>
                                        <br />
                                        {/*need add the dropdown box for different country number */}
                                        <select className="custom-select form-control" id="PhoneNum1">
                                            <option value>(+60 Malaysia)</option>
                                            <option value>(+852 Hong Kong)</option>
                                            <option value>(+65 Singapore)</option>
                                            <option value>(+86 China)</option>
                                            <option value>(+886 Taiwan)</option>
                                        </select>
                                        <input placeholder="Mobile No" name="MobileNo" className="Mobile_no form-control" defaultValue= {employee.phoneNum}></input>
                                    </div>

                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>2nd Mobile No(Optional):</label>
                                        <br />
                                        {/*need add the dropdown box for different country number */}
                                        <select className="custom-select form-control" id="PhoneNum1">
                                            <option value>(+60 Malaysia)</option>
                                            <option value>(+852 Hong Kong)</option>
                                            <option value>(+65 Singapore)</option>
                                            <option value>(+86 China)</option>
                                            <option value>(+886 Taiwan)</option>
                                        </select>
                                        <input placeholder="Mobile No" name="MobileNo" className="Mobile_no form-control"></input>
                                    </div>

                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>Email Address (Personal):</label>
                                        <br />
                                        <input placeholder="Email Address" name="EmailAddress" className="Email_address form-control" defaultValue={employee.empEmail}></input>
                                    </div>
                                </div>
                                <br />
                                <div class="row" style={{textAlign:"left"}}>
                                    <label>Address(Permanent)</label>
                                </div>
                                <div class="row">
                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>Address Line 1:</label>
                                        <input placeholder="-" name="PAddressLine1" className="P_Address_line1 form-control" defaultValue={employee.pAddress}></input>
                                    </div>

                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>City:</label>
                                        <br />
                                        <input placeholder="Please select" name="PCity" className="P_City form-control"defaultValue={employee.EmployeeAddress}></input>
                                    </div>

                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>State:</label>
                                        <input placeholder="Please select" name="PState" className="P_State form-control" defaultValue={employee.pState}></input>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>Address Line 2:</label>
                                        <input placeholder="-" name="PAddressLine1" className="P_Address_line2 form-control"></input>
                                    </div>

                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>Postcode:</label>
                                        <br />
                                        <input placeholder="Please select" name="PPostcode" className="P_Postcode form-control" defaultValue={employee.pPostcode}></input>
                                    </div>

                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>Country:</label>
                                        <input placeholder="Malaysia" name="PCountry" className="P_Country form-control" defaultValue={employee.pCountry}></input>
                                    </div>
                                </div>
                                <br />
                                <div class="row" style={{textAlign:"left"}}>
                                    <label>Address(Current)</label>
                                </div>
                                <div class="row">
                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>Address Line 1:</label>
                                        <input placeholder="-" name="CAddressLine1" className="C_Address_line1 form-control" defaultValue={employee.cAddress}></input>
                                    </div>

                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>City:</label>
                                        <br />
                                        <input placeholder="Please select" name="CCity" className="C_City form-control" defaultValue={employee.cCity}></input>
                                    </div>

                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>State:</label>
                                        <input placeholder="Please select" name="CState" className="C_State form-control" defaultValue={employee.cState}></input>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>Address Line 2:</label>
                                        <input placeholder="-" name="CAddressLine2" className="C_Address_line2 form-control"></input>
                                    </div>

                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>Postcode:</label>
                                        <br />
                                        <input placeholder="Please select" name="CPostcode" className="C_Postcode form-control" defaultValue={employee.cPostcode}></input>
                                    </div>

                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>Country:</label>
                                        <input placeholder="Malaysia" name="CCountry" className="C_Country form-control" defaultValue={employee.cCountry}></input>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <h4 style={{textAlign:"left",color:"red"}} >Emergency Contact </h4>
                                <br />
                                <div class="row">
                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>1. Name:</label>
                                        <br />
                                        <input placeholder="Spounse's Name" name="SpounseName" className="Spounse_name form-control" defaultValue={employee.EmergencyContact}></input>
                                    </div>

                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>Relationship:</label>
                                        <br />
                                        <input placeholder="Husband" name="Relationship" className="Relationship form-control" defaultValue={employee.relationship1}></input>
                                    </div>

                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>Contact No:</label>
                                        <br />
                                        <select className="custom-select form-control" id="PhoneNum3">
                                            <option value>(+60 Malaysia)</option>
                                            <option value>(+852 Hong Kong)</option>
                                            <option value>(+65 Singapore)</option>
                                            <option value>(+86 China)</option>
                                            <option value>(+886 Taiwan)</option>
                                        </select>
                                        <input placeholder="Mobile No" name="MobileNo" className="Mobile_no form-control" defaultValue={employee.contactNum1}></input>
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>1. Name:</label>
                                        <br />
                                        <input placeholder="Parents Name" name="SpounseName" className="Spounse_name form-control" defaultValue={employee.name2}></input>
                                    </div>

                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>Relationship:</label>
                                        <br />
                                        <input placeholder="Parent" name="Relationship" className="Relationship form-control" defaultValue={employee.relationship2}></input>
                                    </div>

                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>Contact No:</label>
                                        <br />
                                        <select className="custom-select form-control" id="PhoneNum3">
                                            <option value>(+60 Malaysia)</option>
                                            <option value>(+852 Hong Kong)</option>
                                            <option value>(+65 Singapore)</option>
                                            <option value>(+86 China)</option>
                                            <option value>(+886 Taiwan)</option>
                                        </select>
                                        <input placeholder="Mobile No" name="MobileNo" className="Mobile_no form-control" defaultValue={employee.contactNum2}></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="card">
                            <div class="card-body">
                                <h4 style={{textAlign:"left",color:"red"}}>Spouse Particular </h4>
                                <br />
                                <div class="row">
                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>Spouse's Name:</label>
                                        <br />
                                        <input placeholder="Husband / Wife Name" name="SpounseName" className="Spounse_name form-control" defaultValue={employee.SpouseDetail}></input>
                                    </div>

                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>Occupation:</label>
                                        <br />
                                        <input placeholder="Job" name="Occupation" className="form-control" defaultValue={employee.occupation}></input>
                                    </div>

                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>Contact No:</label>
                                        <br />
                                        <select className="custom-select form-control" id="PhoneNum3">
                                            <option value>(+60 Malaysia)</option>
                                            <option value>(+852 Hong Kong)</option>
                                            <option value>(+65 Singapore)</option>
                                            <option value>(+86 China)</option>
                                            <option value>(+886 Taiwan)</option>
                                        </select>
                                        <input placeholder="Mobile No" name="MobileNo" className="Mobile_no form-control" defaultValue={employee.contactNum}></input>
                                    </div>
                                </div>
                                <br />
                                <div class="row">
                                    <div class="col-4" style={{textAlign:"left"}}>
                                        <label>Marriage Certificate:</label>
                                        <br />
                                        <div className = "passport_file form-control-file">
                                            <input type = "file" className= "passport_photocopy" id="inputFile"></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">                   
                            <div class="card-body">
                                <h4 style={{textAlign:"left",color:"red"}} >Education Background (Additional Certificate Professional / Training Certifications</h4>
                                <br />
                                <table className="table table-sm table-dark table-bordered">
                                    <thead>
                                        <tr>
                                            <th>NO.</th>
                                            <th>NAME OF COLLEGE/UNIVERSITY/TRAINING CENTER</th>
                                            <th>YEAR OBTAINED (YYYY)</th>
                                            <th>CERTIFICATION</th>
                                            <th>CERTIFICATION COPY</th>
                                        </tr>
                                    </thead>

                                    
                                    {(typeof(employee.educationDetailsResponse) == 'object')?
                                        <tbody>
                                            {employee.educationDetailsResponse.map((education,edu) =>
                                                <tr>
                                                    <td></td>
                                                    <td><input placeholder="" name="" className="" defaultValue ={education.collegeName}></input></td>
                                                    <td><input placeholder="" name="" className="" defaultValue ={education.yearObtain}></input></td>
                                                    <td><input placeholder="" name="" className="" defaultValue ={education.certificate}></input></td>
                                                    <td><input type = "file" className= "passport_photocopy" id="inputFile"></input></td>    
                                                </tr>
                                            )}
                                        </tbody>
                                        :
                                        null
                                    }
                                </table>
                            </div>
                        </div>
                        
                        <div class="card">                   
                            <div class="card-body">
                                <h4 style={{textAlign:"left",color:"red"}} >Child Details</h4>
                                <br />
                                <table className="table table-sm table-dark table-bordered">
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

                                    {(typeof(employee.childrenResponse) == 'object')?
                                        <tbody>
                                            {employee.childrenResponse.map((child,c) =>
                                                <tr>
                                                    <td></td>
                                                    <td><input placeholder="" name="" className="" defaultValue ={child.childName}></input></td>
                                                    <td><input placeholder="" name="" className="" defaultValue ={child.childDate}></input></td>
                                                    <td><input type = "file" className= "passport_photocopy" id="inputFile"></input></td>
                                                    <td><input placeholder="" name="" className="" defaultValue ={child.nationality}></input></td>
                                                    <td><input placeholder="" name="" className="" defaultValue ={child.occu}></input></td>  
                                                </tr>
                                            )}
                                        </tbody>
                                        :
                                        null
                                    }
                                </table>
                            </div>
                        </div>


                    </div>
                )}
    

                

                <div class="card">                   
                    <div class="card-body">
                        <h4 style={{textAlign:"left",color:"red"}} >PDPA Consent Clause</h4>
                        <br />
                        <p/>
                        <p>By submitting this Form, you hereby agree that Software International Corporation may collect,obtaion,store and process your personal information that you provide in this From.</p>
                        <p> Tired to type all. My fault</p>
                        <p>I hereby declare that all information given herein is true and complete and will be responsible to any consequences due to discrepancy od the information provided*</p>
                        <input className ="Agree_PDPA" type="checkbox"></input>
                        <label> Yes </label>
                        <p/>
                        <button  style={{textAlign:"right", marginRight:"50px"}} className = "Cancel_Button">Cancel</button>
                        <button  style={{textAlign:"right"}} className = "Submit_Button">Submit</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default StaffParticularForm;