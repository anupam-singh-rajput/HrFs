import './Left.css'
import {Link} from 'react-router-dom'

const Left = () => {
    return(
        <div className="left-body">
            <h1>Rent, Host, <br/> Explore.</h1>
            <h6 >HrFs provide you with the <br/> best service for house <br/> renting and hosting . </h6>
            <div className="btn-container">
            <div className="Button"><Link to="/host"> <p className="btn1">Become a Host</p></Link></div>
            <div className="Button"><Link to="/rent"><p className="btn2">Rent a House</p></Link></div>
            </div>
        </div>
    )
}
export default Left;

