import './Right.css'
import img from '../../Images/newyork.png'


const Right = (props) =>{
    const classes = 'card ' + props.className;
    return(
       <div className="HomePageRightSide-Container"> 
            <div className="HomePageimage-card">
                <img src={img} alt="background"/>
            </div>
        </div>
    )
}

export default Right;