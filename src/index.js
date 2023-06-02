import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'


ReactDOM.render(
  <App/>,
  document.getElementById('root')
  );





//  import React from 'react'
// import {useState} from 'react'

// const Signinpractice = () => {

//     //To manage the state of the input fields using the useState
//     const initialvalue = {username:"",email:"",password:"",}
//     //Now this the initial state of the input fields

//     //Creating a state
//     const {formValues, setFormValues} = useState(initialvalue);

//   return (    
//     <div className="container1">
//         <div className="app-wrapper">
//             <div>
//                 <h2 className="title">Create Account</h2>
//             </div>
//             <form className="form-wrapper">
//                 <div className="name">
//                     <label className="label">Username</label>
//                     <input className="input" 
//                     type="text" 
//                     name="fullname" 
//                     placeholder="Enter name" 
//                     value={formValues.username} 
//                     />
//                     {/* Binding initial value to username input field */}

//                 </div>
//                 <div className="email">
//                     <label className="label">Email</label>
//                     <input className="input" t
//                     ype="text"  
//                     name="email" 
//                     placeholder="Enter Email"
//                     value={formValues.email} 
//                     />
//                     {/* Binding initial value to email input field */}

//                 </div>

//                 <div className="password">
//                     <label className="label">Password</label>
//                     <input className="input" type="text" 
//                     name="password" 
//                     placeholder="Enter Password"
//                     value={formValues.password} 
//                     />
//                     {/* Binding initial value to password input field */}

//                 </div>
//                 <div>
//                     <button className="submit">Sign Up</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Signinpractice;
