import react,{useState} from 'react';
import {Link} from "react-router-dom";
import LeftSignup from '../Signup/LeftSignup';

import './LeftLoginPage.css';

function LeftLoginPage(props){

    let gettedemail = props.userData.email;
    let gettedpassword = props.userData.password;


    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('');

  
    const setEmailHandler = (event) =>{
        setEmail(event.target.value)
    }  
    const setPasswordHandler = (event) =>{
        setPassword(event.target.value)
    }    
      
    const submitHandler = (event) =>{
        event.preventDefault();
        
        const UserLoginData = {
            email : email,
            password : password,
        }

        console.log(UserLoginData);

        setEmail('')
        setPassword('')
            const checker =(gettedemail,gettedpassword)=>{
                if((gettedemail==email) && (gettedpassword==password)){
                    console.log("UserLoginSuccessFull");
                }
                else{
                    console.log("UserLoginUnsuccesfull")
                }
            }
            checker(gettedemail,gettedpassword);
        
    }


    return(
        <div className="LoginMainContainer">
        <div className="LeftLoginMainContainer">
            <div className="Loginwelcomesection">
                <h2>Welcome Back</h2>
                <p>Don't have an account?<Link to="../signup" className="signupdirect"><span className="signupdirect">Register</span></Link></p>
            </div>
            <form onSubmit={submitHandler}>
                <div className="LeftLoginFormMainContaner">
                    <div className="label__input__styler">
                        <label htmlFor="phone">
                            Email
                        </label>
                        <br />
                        <input type="text" value={email} onChange={setEmailHandler} placeholder="Enter Phone Number" />
                    </div>
                    <div className="label__input__styler">
                        <label htmlFor="password">
                            Password
                        </label>
                        <br />
                        <input type="text" value={password} onChange={setPasswordHandler} placeholder="Enter Password" />
                    </div>
                    <button type="submit" className="loginactions">Login</button>
                </div>
            </form>
        </div>
        <LeftSignup></LeftSignup>
        </div>
    );
}

export default LeftLoginPage;