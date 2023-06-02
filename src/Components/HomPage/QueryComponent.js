import React, {useState} from 'react'
import './QueryComponent.css'
function QueryComponent(props){
    const [checkclick,setClick] = useState(false);

    const clickHandler = (event) =>{
        checkclick ? setClick(false) : setClick(true);
        console.log(checkclick);        
    }
    return(
        <div className="RighHelpPageFormMainContaner">                   
                  <p>{props.question}</p>  
                  <span className="HelpPageAnswer" value={checkclick} onClick={clickHandler}><i class="fa fa-chevron-circle-down" aria-hidden="true"></i></span>  
                  <p className="HelpPageAnswerSection">{props.answer}</p>             
        </div>
    );
}

export default QueryComponent;