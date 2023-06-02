import RoomsInformation from "./RoomsInformation";
import './RentMainPage.css'
import RightRentPage from "./RightRentPage";
import LeftRentPage from "./LeftRentPage";



function RentMainPage(){
            
    return(
        <div className="RentMainPage-Container" >
            {/* <h1 className="RentPageTitle">Let us Guide you Home!</h1> */}
            <RightRentPage/>
            <LeftRentPage/>
        </div>
    );
}

export default RentMainPage;



// var rangeslider = document.getElementById("sliderRange");
//             var output = document.getElementById("demo");
//             output.innerHTML = rangeslider.value;
//                 rangeslider.oninput = function() {
//                     <div class="rangeslider">
//                         <input type="range" min="1" max="100" value="10"
//                             class="myslider" id="sliderRange"/>
//                         <p>Value: <span id="demo"></span></p>
//                     </div>
//                     output.innerHTML = this.value;
//                 }

