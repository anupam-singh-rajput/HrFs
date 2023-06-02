import './RightRentPage.css'

function RightRentPage(){
    return(
        <div className="main-container">
        <div>
             <h1 className="RentPageTitle">Let us Guide you Home!</h1>
        </div>
        <div className="Filter">
                <h1 className="Ftitle">Filters</h1>
                <br />
                <br />
                <br />

                <p className="Pname">Place type :</p>
                <br />
                <button className="f-btn">Flat</button>
                 <button className="f-btn">Bunglow</button>
                 <br />
                 <br />


                 <p className="Pname">Apartment type :</p>
                 <br />
                <button className="f-btn">1 BHK</button>
                 <button className="f-btn">2 BHK</button>
                  <button className="f-btn">3 BHK</button>
                <br /><br />


                <p className="Pname">Rent Range</p>
                <br />
                <input type="range" min="1000" max="25000" />
                {/* <div class="rangeslider">
                  <input type="range" min="1" max="100" value="10" class="myslider" id="sliderRange"/><br />
                    <p>Value: <span id="demo"></span></p>
                </div>  */}

                <br/>
                <br />


                  <p className="Pname">Availablity:</p>
                  <br />
                  <input type="radio" name="immediate"/><label for="immediate">Immediate</label>
                  <input type="radio" name="w30days"/><label for="w30days">Within 30 days</label>
                  <input type="radio" name="a30days"/><label for="a30days">After 30 days</label>
                <br />
                <br/>


                <p className="Pname">Furnishing:</p>
                <br/>
                <input type="checkbox" name="full"/><label for="full">Full</label>
                <input type="checkbox" name="semi"/><label for="semi">Semi</label>
                <input type="checkbox" name="none"/><label for="none">none</label>
                <br />
                <br />


                <p className="Pname">Ammenities:</p>
                <br />
                <input type="checkbox" name="gym"/><label for="gym">Gym</label>
                <input type="checkbox" name="lift"/><label for="lift">Lift</label>
                <input type="checkbox" name="sp"/><label for="sp">Swimming Pool</label>
                <br />
                <br />


               <label for="city" className="Exception-label">City: </label>
                <select className="Filterselection" name="city" id="city">
                    <option value="Mumbai">Mumbai</option>
                    <option value="Mumbai">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Mumbai">Mumbai</option>
                </select>
                <br />
                <br />


                <button type="button" className="submit-btn">Save</button>
            </div>
            </div>
    );
}

export default RightRentPage;