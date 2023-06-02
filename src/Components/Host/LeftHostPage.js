import React,{useState} from 'react';
import './LeftHostPage.css';


function LeftHostPage(props){

    const [flat,setFlat] = useState(false)
    const [bunglow,setBunglow] = useState(false)
    const [rowHouse,setRowHouse] = useState(false)


    const [oneRk,setoneRk] = useState(false)
    const [oneBhk,setoneBhk] = useState(false)
    const [twoBhk,settwoBhk] = useState(false)
     const [threeBhk,setthreeBhk] = useState(false)
    const [fourBhk,setfourBhk] = useState(false)


    const[range,setRange]= useState(0)

    const [family,setfamily] = useState(false)
    const [bachelor,setbachelor] = useState(false)
    const [company,setcompany] = useState(false)

    
    const [full,setfull] = useState(false)
    const [semi,setSemi] = useState(false)
    const [none,setNone] = useState(false)

      
    const [gym,setgym] = useState(false)
    const [lift,setlift] = useState(false)
    const [swimingpool,setswimingPool] = useState(false)

      
    const [twowheeler,settwowheeler] = useState(false)
    const [fourwheeler,setfourwheeler] = useState(false)

    const [immediate,setImmediate] = useState(false)
    const [withinweek,setwithinweek] = useState(false)
    const [withintwoweek,setwithintwoweek] = useState(false)



    // 1
    const flatHandler = (event) => {
        flat ? setFlat(false):setFlat(true)
    }
    // 2
    const bunglowHandler = () => {
        bunglow ?  setBunglow(false): setBunglow(true)
    }
    // 3
    const rowHouseHandler = () => {
        rowHouse ? setRowHouse(false) : setRowHouse(true)  
    }
    // 4
    const OnerkHandler = () => {
        oneRk ? setoneRk(false) :  setoneRk(true)    
    }
    // 5
    const OnebhkHandler = () => {
        oneBhk ? setoneBhk(false) : setoneBhk(true)  
            
    }
    // 6
    const twobhkHandler = () => {
        twoBhk ? settwoBhk(false) :  settwoBhk(true)
    }
    // 7
    const threeBhkHandler = () => {
        threeBhk ? setthreeBhk(false) :  setthreeBhk(true)   
    }
    // 8
    const fourBhkHandler = () => {
        fourBhk ? setfourBhk(false) :  setfourBhk(true)  
        
    }
    //9
    const familyHandler = () => {
        family ? setfamily(false) :  setfamily(true)  

    }
    //10
    const bachelorHandler = () => {
        bachelor ? setbachelor(false) :  setbachelor(true)  
            
    }
    //11
    const companyHandler = () => {
        company ? setcompany(false) :  setcompany(true)
    }

    //12
    const fullHandler = () =>{
        full ? setfull(false) :  setfull(true) 
    }
    const semiHandler = () =>{
       semi ? setSemi(false) :  setSemi(true) 
    }
    //13 
    const noneHandler = () =>{
        none ? setNone(false) :  setNone(true)  
            
    }
    //14
    const gymHandler = () =>{
        gym ? setgym(false) :  setgym(true)  
              
    }
    //15
    const liftHandler = () =>{
        lift ? setlift(false) :  setlift(true)  
    }
    //16 
    const swimingpoolHandler = () =>{
        swimingpool ? setswimingPool(false) :  setswimingPool(true)  
            
            
    }
    //17
    const twowheelerHandler = () =>{
       twowheeler ? settwowheeler(false) :  settwowheeler(true)  
                
              
    }
    //18
    const fourwheelerHandler = () =>{
        fourwheeler ? setfourwheeler(false) : setfourwheeler(true)  
              
    }
    //19 
    const immediateHandler = () => {
        immediate ? setImmediate(false) :  setImmediate(true)
    }

    //20 
    const withinweekHandler = () =>{
        withinweek ? setwithinweek(false) :  setwithinweek(true)  
              
            
            
    }
    //21
    const withintwoweekHandler = () =>{
       withintwoweek ? setwithintwoweek(false) :setwithintwoweek(true) 
                
              
    }
    


    const HostDataHandler = (event) =>{
        event.preventDefault();



            // flat ? setFlat(true):setFlat(false)
            // bunglow ?  setBunglow(true): setBunglow(false)
            // rowHouse ? setRowHouse(true) : setRowHouse(false)  
            // oneRk ? setoneRk(true) :  setoneRk(false)  
            // oneBhk ? setoneBhk(true) : setoneBhk(false)  
            // twoBhk ? settwoBhk(true) :  settwoBhk(false)  
            // threeBhk ? setthreeBhk(true) :  setthreeBhk(false)  
            // fourBhk ? setfourBhk(true) :  setfourBhk(false)  
            // range ? setRange(true) :  setRange(false)  
            // family ? setfamily(true) :  setfamily(false)  
            // bachelor ? setbachelor(true) :  setbachelor(false)  
            // company ? setcompany(true) :  setcompany(false)  
            // full ? setfull(true) :  setfull(false)  
            // semi ? setSemi(true) :  setSemi(false)  
            // none ? setNone(true) :  setNone(false)  
            // gym ? setgym(true) :  setgym(false)  
            // lift ? setlift(true) :  setlift(false)  
            // swimingpool ? setswimingPool(true) :  setswimingPool(false)  
            // twowheeler ? settwowheeler(true) :  settwowheeler(false)  
            // fourwheeler ? setfourwheeler(true) : setfourwheeler(false)  
            // immediate ? setImmediate(true) :  setImmediate(false)  
            // withinweek ? setwithinweek(true) :  setwithinweek(false)  
            // withintwoweek ? setwithintwoweek(true) :setwithintwoweek(false) 

        const HostFormDataObject = {
            flat:flat,
            bunglow:bunglow,
            rowHouse:rowHouse,
            oneRk:oneRk,
            oneBhk:oneBhk,
            twoBhk:twoBhk,
            threeBhk:threeBhk,
            fourBhk:fourBhk,
            range:range,
            family:family,
            bachelor:bachelor,
            company:company,
            full:full,
            semi:semi,
            none:none,
            gym:gym,
            lift:lift,
            swimingpool:swimingpool,
            twowheeler:twowheeler,
            fourwheeler:fourwheeler,
            immediate:immediate,
            withinweek:withinweek,
            withintwoweek:withintwoweek,
        }
        console.log(HostFormDataObject);

    }

    return(
        <form onSubmit={HostDataHandler}>
            <div className="MainHostPageContainer">
                <div className="HostPageLeftMainContainer">
                    <div className="HostLeftPageCheckbox">
                        <p>What type of place you want to host ?</p>
                        <div>< input value={flat} type="checkbox"  onClick={flatHandler} /><label>Flat</label></div>
                        <div>< input value={bunglow} type="checkbox"  onClick={bunglowHandler} /><label>Bunglow</label></div>
                        <div>< input value={rowHouse} type="checkbox"  onClick={rowHouseHandler} /><label>Row House</label></div>
                    </div>
                    <div className="HostLeftPageCheckbox">
                        <p>Appartment Type ?</p>
                        <div>< input value={oneRk} type="checkbox"  onClick={OnerkHandler}/><label>1RK</label></div>
                        <div>< input value={oneBhk} type="checkbox"  onClick={OnebhkHandler}/><label>1BHK</label></div>
                        <div>< input value={twoBhk} type="checkbox"  onClick={twobhkHandler}/><label>2BHK</label></div>
                        <div>< input value={threeBhk} type="checkbox"  onClick={threeBhkHandler}/><label>3BHK</label></div>
                        <div>< input value={fourBhk} type="checkbox"  onClick={fourBhkHandler}/><label>4BHK</label></div>
                    </div>
                    <div className="HostLeftPageCheckbox">
                        <p>Rent Range (per month) ?</p>
                        < input value={range} type="range"/>
                    </div>
                    <div className="HostLeftPageCheckbox">
                        <p>Preferred Tenents ?</p>
                        <div>< input value={family} type="checkbox"  onClick={familyHandler}/><label>Family</label></div>
                        <div>< input value={bachelor} type="checkbox"  onClick={bachelorHandler}/><label>Bachelor</label></div>
                        <div>< input value={company} type="checkbox"  onClick={companyHandler}/><label>Company</label></div>
                    </div>
                    <div className="HostLeftPageCheckbox">
                        <p>Furnishing ?</p>
                        <div>< input value={full} type="checkbox"  onClick={fullHandler}/><label>Full</label></div>
                        <div>< input value={semi} type="checkbox"  onClick={semiHandler}/><label>Semi</label></div>
                        <div>< input value={none} type="checkbox"  onClick={noneHandler}/><label>None </label></div>
                    </div>
                    <div className="HostLeftPageCheckbox">
                        <p>Amenities ?</p>
                        <div>< input value={gym} type="checkbox"  onClick={gymHandler}/><label>Gym</label></div>
                        <div>< input value={lift} type="checkbox"  onClick={liftHandler}/><label>Lift</label></div>
                        <div>< input value={swimingpool} type="checkbox"  onClick={swimingpoolHandler}/><label>SwimSwming Pool</label></div>
                    </div>
                    <div className="HostLeftPageCheckbox">
                        <p>Parking ?</p>
                        <div>< input value={twowheeler} type="checkbox"  onClick={twowheelerHandler}/><label>2 Wheeler</label></div>
                        <div>< input value={fourwheeler} type="checkbox"  onClick={fourwheelerHandler}/><label>4 Wheeler</label></div>
                    </div>
                    <div className="HostLeftPageCheckbox">
                        <p>Possession ?</p>
                        <div>< input value={immediate} type="checkbox"  onClick={immediateHandler}/><label>Immediate</label></div>
                        <div>< input value={withinweek} type="checkbox"  onClick={withinweekHandler}/><label>Within a Week</label></div>
                        <div>< input value={withintwoweek} type="checkbox"  onClick={withintwoweekHandler}/><label>WithWithin 2 Week</label></div>
                    </div>
                </div>
                <div className="HostPageRightMainContainer">
                    <p>Description ?</p>
                    <input type="comment"/>
                    <br />
                    <p>Add items </p>
                    <br />
                    <p>State ?</p>
                    <select className="HostRightPageFilterselection" name="city" id="city">
                            <option value="Mumbai">Mumbai</option>
                            <option value="Mumbai">Pune</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Mumbai">Mumbai</option>
                        </select>
                    <br />
                    <p>City ?</p>
                    <select className="HostRightPageFilterselection" name="city" id="city">
                            <option value="Mumbai">Mumbai</option>
                            <option value="Mumbai">Pune</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Mumbai">Mumbai</option>
                        </select>

                    <br />
                    <p>Address ?</p>
                    <input type="text"/>
                    <br />
                    <button type="submit" className="HostRightpagebtn">Save</button>
                </div>
            </div>
        </form>

    );
}

export default LeftHostPage;