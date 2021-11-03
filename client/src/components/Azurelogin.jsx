import React, { Component } from 'react'
import {config} from '../AzureConfig';
import { PublicClientApplication } from '@azure/msal-browser';
import {Redirect} from "react-router-dom";

class Azurelogin extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          error : null,
          isAuthenticated: false,
          user:[],
          isLogin: true
        };
    
        this.login  = this.login.bind(this);
    
        //Initialize the HSAL application object 
        this.PublicClientApplication = new PublicClientApplication({
          auth:{
            clientId: config.appId,
            redirectUri: config.redirectUri,
            authority: config.authority
            
          },
          cache:{
            cacheLocation: "SessionStorage",
            storeAuthStateInCookie: true
          }
        });
    
      }

      componentDidMount(){
        //console.log("SHOW ME THIS");
        //display azure sign in pop up form here 
        if (this.state.isLogin){
          this.login();
        }
        

      }

      async login(){
        try{
          //Pop up the Azure login form 
          await this.PublicClientApplication.loginPopup(
          {
            scopes: config.scopes,
            prompt:'select_account'
          });
          this.setState({isAuthenticated:true})

          
        }
        catch(err){
    
          this.setState({
            isAuthenticated: false,
            user:{},
            error: err
    
          });
          this.setState({isLogin:false})

    
        }
      }



      logout(){
        this.PublicClientApplication.logout();
      }


        render() {
          console.log("Counter CHILDREN is calling");

            return (
                <div>
                    {this.state.isLogin?null:<Redirect to="/"/>}

                    {this.state.isAuthenticated? <Redirect to="/azure/staff-form-display"/> : null}

                </div>
            )
        }
}

export default Azurelogin;