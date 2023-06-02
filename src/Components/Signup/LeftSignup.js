import './LeftSignup.css';
import img from '../../Images/newyork.png'

function LeftSignup(){
    return(
        <div className="SignupPageRightSide-Container"> 
            <div className="SignupPageimage-card">
                <img src={img} alt="background"/>
            </div>
        </div>
    );
}

export default LeftSignup;