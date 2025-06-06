
"use client";

import { getCokies } from "@/utils/cookieUtils";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import axiosInstance from "../../utils/apiUtils";

const StoreCreation = () => {
    // const [ownerId, setOownerId] = useState('');
    const [centralLocationTypes, setCentralLocationTypes] = useState([]);
    const [selctedLocationType, setSelctedLocationType] = useState();
    const [OwnerId, setOwnerId] = useState();

    const [LocationData, setLocationData] = useState({
        OwnerId: "",
        BusinessId: "",
        LocationName: "",
        LocationEmail: "",
        LocationMobile: "",
        LocationWhatsapp: "",
        LocationAddress1: "",
        // LocationAddress2: "",
        City: "",
        Pincode: "",
        District: "",
        State: "",
        Country: "",
        Pan: "",
        Gstin: "",
        selectedLocationType: {},
    });

    useEffect(() => {
        const OwnerId = getCokies('ownerId')
        setOwnerId(OwnerId)
        const BusinessId = getCokies('businessId')
        setLocationData({...LocationData, BusinessId})
        console.log(BusinessId, OwnerId)
        var delayInMilliseconds = 1000; //1 second 
        setTimeout(function() { console.log(LocationData) }, delayInMilliseconds);
        
        fetchCentralLocationTypes();
    }, [])

    const handleSelectLocationType = (e) => {
        const locationName = e.target.value
        console.log(locationName);
        const selectedLocation = centralLocationTypes.length > 0 && centralLocationTypes.filter(type => type.location_type_name === locationName)[0]
        console.log(selectedLocation, centralLocationTypes)
        setSelctedLocationType(selectedLocation)
        setLocationData({...LocationData, selectedLocationType:selectedLocation})
    }

    const fetchCentralLocationTypes = () => {
        console.log("fetchCentralLocationTypes")
        // fetch('http://127.0.0.1:8000/api/v1/main/central-location-type/')
        axiosInstance.get('/main/central-location-type')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setCentralLocationTypes(data.data);
            console.log(data);
        })
        .catch(err => console.log(err))
    }
    
    function handleFormSubmit(event) {
        event.preventDefault();
        setLocationData({...LocationData, OwnerId})
        // fetch('http://127.0.0.1:8000/api/v1/mastercreate/location-master/', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(LocationData),
        // })
        axiosInstance.post('/mastercreate/location-master/', LocationData)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            redirect('/inventorymanagement/createitemmaster')
        })
    }

function changeLocationInputs(e) {
    setLocationData({...LocationData, [e.target.name]:e.target.value})
}

  return (
            <div className="container mt-3">
            <h4 className="alert alert-info text-center mb-1 p-1"> LOCATION CREATION </h4>
            <div className="row">
            <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <form id="LocationRegistrationForm" onSubmit={handleFormSubmit}>
                        Owner   ID: <input type="text" className="form-control" name="OwnerId" disabled onChange={() => {}} value={OwnerId} placeholder="Owner Id" id="ownerId" maxLength="20" required /><br />
                        Business ID: <input type="text" className="form-control" name="BusinessId" disabled onChange={() => {}} value={LocationData.BusinessId} placeholder="Busniess Id" id="businessId" maxLength="20" required /><br />
                        Location Name:<input type="text" className="form-control" name="LocationName" onChange={changeLocationInputs} value={LocationData.LocationName} placeholder="Location Name" id="LocationName" minLength="3" maxLength="20" required />
                        <br />
                        Choose Location Type:
                        <select onChange={handleSelectLocationType}>
                            <option>Choose Type</option> 
                            {centralLocationTypes.map((type, index) => (<option key={index} value={type.location_type_name}>{type.location_type_name}</option>))}
                        </select><a href="" rel="noreferrer">Create Loc Type</a>
                        
                        <br /><br />
                        Location Email: <input type="text" className="form-control" name="LocationEmail" onChange={changeLocationInputs} value={LocationData.LocationEmail} placeholder="Location Email ID" id="LocationEmail" minLength="6" maxLength="30" required /><br />
                        Location Mobile: <input type="text" className="form-control" name="LocationMobile" onChange={changeLocationInputs} value={LocationData.LocationMobile} placeholder="Location Mobile Number (+91)" id="LocationMobile" minLength="10" maxLength="10" required /><br />
                        Location Whatsapp: <input type="text" className="form-control" name="LocationWhatsapp" onChange={changeLocationInputs} value={LocationData.LocationWhatsapp} placeholder="Location Whatsapp Number (If Any)" id="LocationWhatsapp" minLength="10" maxLength="10" required /><br />
                        Location Address: <input type="text" className="form-control" name="LocationAddress1" onChange={changeLocationInputs} value={LocationData.LocationAddress1} placeholder="Location Address Line 1" id="LocationAddress1" minLength="3" maxLength="60" required /><br />
                        Location City: <input type="text" className="form-control" name="City" onChange={changeLocationInputs} value={LocationData.City} placeholder="City" id="City" minLength="3" maxLength="20" required /><br />
                        Location Pincode: <input type="text" className="form-control" name="Pincode" onChange={changeLocationInputs} value={LocationData.Pincode} placeholder="Pincode" id="Pincode" minLength="3" maxLength="6" required /><br />
                        Location District: <input type="text" className="form-control" name="District" onChange={changeLocationInputs} value={LocationData.District} placeholder="District" id="District" minLength="3" maxLength="30" required /> <br /> 
                        Location State: <input type="text" className="form-control" name="State" onChange={changeLocationInputs} value={LocationData.State} placeholder="State" id="Country" minLength="3" maxLength="20" required /><br /> 
                        Location Country: <input type="text" className="form-control" name="Country" onChange={changeLocationInputs} value={LocationData.Country} placeholder="Country" id="Country" minLength="3" maxLength="20" required /><br /> 
                        Location PAN: <input type="text" className="form-control" name="Pan" onChange={changeLocationInputs} value={LocationData.Pan} placeholder="Pan" id="Pan" minLength="3" maxLength="20" required /><br /> 
                        Location GSTIN: <input type="text" className="form-control" name="Gstin" onChange={changeLocationInputs} value={LocationData.Gstin} placeholder="Gstin" id="Gstin" minLength="3" maxLength="20" required /><br /> 
                        <div id="errors" className="error"></div>
                        <div id="success" className="success"></div>
                        <input type="submit" className="btn btn-primary" id="ContinueLocationRegistration" value="Continue" />

                    </form>  
                </div>
        </div>
        </div>
  )
}

export default StoreCreation