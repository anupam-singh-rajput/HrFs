import './RoomsInformation.css'
import img from '../../Images/newyork.png'

function RoomsInformation(){
    return(
        <div className="BaseDiv">
            <div className="Roomsimage-card">
                <img src={img} alt="background"/>
            </div>
            <div className="RInfo">
                <h1 className="Rtitle">ABC</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit totam laborum.</p>
                <button className="RSizebtn">1 BHK</button>
                <h2 className="Rtitle">RS.1000</h2>
            </div>
        </div>
    );
}

export default RoomsInformation;