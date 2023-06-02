import react,{useState} from 'react';
import {Link} from "react-router-dom";
import LeftSignup from './LeftSignup';

import './RightSignup.css';

function RightSignup(props){

    let [firstName,setFirstName] = useState('');
    let [lastName,setLastName] = useState('');
    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('');
    let [phonenumber,setPhonenumber] = useState(''); 

    const setFirstNameHandler = (event) =>{
        setFirstName(event.target.value)
    }  
    const setLastNameHandler = (event) =>{
        setLastName(event.target.value)
    }  
    const setEmailHandler = (event) =>{
        setEmail(event.target.value)
    }  
    const setPasswordHandler = (event) =>{
        setPassword(event.target.value)
    }    
    const setPhonenumberHandler = (event) =>{
        setPhonenumber(event.target.value)
    }  
      
    const submitHandler = (event) =>{
        event.preventDefault();
        
        const UserSignupData = {
            id: Math.random().toString,
            fname : firstName,
            lname : lastName,
            email : email,
            password : password,
            phonenumber : phonenumber
        }

        console.log(UserSignupData);
        props.onSaveExpense(UserSignupData);

        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setPhonenumber('')
    }

    return(
        <div className="MainContainer">
        <div className="RightSignupMainContainer">
            <div className="welcomesection">
                <p>START FROM HERE</p>
                <h2>Create new account</h2>
                <p>Already a member? <Link to="login" className="logindirect"><span className="logindirect">Log In</span></Link></p>
            </div>
            <form onSubmit={submitHandler}>
                <div className="RightSignupFormMainContaner">
                    <div className="containerforfirstlastname">
                        <div className="firstName">
                            <label htmlFor="firstName">
                                First Name
                            </label>
                            <br />
                            <input type="text" value={firstName} onChange={setFirstNameHandler} placeholder="First Name"/>
                        </div>
                        <div className="lastName" >
                            <label>
                                Last Name
                            </label>
                            <br />
                            <input type="text" value={lastName} onChange={setLastNameHandler} placeholder="Last Name"/>
                        </div>
                    </div>
                    
                    <div className="label__input__styler">
                        <label>
                            Email
                        </label>
                        <br />
                        <input type="email" value={email} onChange={setEmailHandler} placeholder="Enter Email" />
                    </div>
                    <div className="label__input__styler">
                        <label htmlFor="password">
                            Password
                        </label>
                        <br />
                        <input type="text" value={password} onChange={setPasswordHandler} placeholder="Enter Password" />
                    </div>
                    <div className="label__input__styler">
                        <label htmlFor="phone">
                            Phone
                        </label>
                        <br />
                        <input type="text" value={phonenumber} onChange={setPhonenumberHandler} placeholder="Enter Phone Number" />
                    </div>
                    <button type="submit" className="actions">Create Account</button>
                </div>
            </form>
        </div>
        <LeftSignup></LeftSignup>
        </div>
    );
}

export default RightSignup;