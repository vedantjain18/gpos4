
"use client";

import { getCokies } from "@/utils/cookieUtils";
import { useEffect, useState } from "react";

const StoreCreation = () => {
    // const [ownerId, setOownerId] = useState('');
    const [centralLocationTypes, setCentralLocationTypes] = useState([]);
    const [selctedLocationType, setSelctedLocationType] = useState();
    const [BusinessData, setBusinessData] = useState({
        OwnerId: "",
        BusinessName: "",
        BusinessEmail: "",
        BusinessMobile: "",
        BusinessWhatsapp: "",
        BusinessAddress1: "",
        BusinessAddress2: "",
        City: "",
        Pincode: "",
        District: "",
        State: "",
        Country: "",
        Gstin: "",
        Pan: "",
        selctedLocationType: {},
    });

    useEffect(() => {
        const businessId = getCokies('businessId')
        setBusinessData({...BusinessData, businessId})

        fetchCentralLocationTypes();
    }, [])

    const handleSelectLocationType = (e) => {
        const locationName = e.target.value
        console.log(locationName);
        const selectedLocation = centralLocationTypes.length > 0 && centralLocationTypes.filter(type => type.location_type_name === locationName)[0]
        selctedLocationType(selectedLocation)
        setBusinessData({...BusinessData, selectedLocationType:selectedLocation})
    }

    const fetchCentralLocationTypes = () => {
        console.log("fetchCentralLocationTypes")
        fetch('http://127.0.0.1:8000/api/v1/main/central-location-type/')
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

      fetch('http://127.0.0.1:8000/api/v1/mastercreate/business-create/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(BusinessData),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })

}

function changeBusinessInputs(e) {
    setBusinessData({...BusinessData, [e.target.name]:e.target.value})
}

  return (
            <div className="container mt-3">
            <h4 className="alert alert-info text-center mb-1 p-1"> LOCATION CREATION </h4>
            <div className="row">
            <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <form id="BusinessRegistrationForm" onSubmit={handleFormSubmit}>
                        <input type="text" className="form-control" name="OwnerId" value={BusinessData.businessId} placeholder="Owner Id" id="businessId" maxLength="20" required disabled /><br />
                        <input type="text" className="form-control" name="BusinessName" onChange={changeBusinessInputs} value={BusinessData.BusinessName} placeholder="Location Name" id="BusinessName" minLength="3" maxLength="20" required />
                        <br />
                        
                        <select onSelect={handleSelectLocationType}>
                            <option>Choose Type</option>
                            {centralLocationTypes.map((type, index) => (<option key={index} value={type.location_type_name}>{type.location_type_name}</option>))}
                        </select>
                        
                        
                        <input type="text" className="form-control" name="BusinessEmail" onChange={changeBusinessInputs} value={BusinessData.BusinessEmail} placeholder="Location Email ID" id="BusinessEmail" minLength="6" maxLength="30" required /><br />
                        <input type="text" className="form-control" name="BusinessMobile" onChange={changeBusinessInputs} value={BusinessData.BusinessMobile} placeholder="Business Mobile Number (+91)" id="BusinessMobile" minLength="10" maxLength="10" required /><br />
                        <input type="text" className="form-control" name="BusinessWhatsapp" onChange={changeBusinessInputs} value={BusinessData.BusinessWhatsapp} placeholder="Business Whatsapp Number (If Any)" id="BusinessWhatsapp" minLength="10" maxLength="10" required /><br />
                        <input type="text" className="form-control" name="BusinessAddress1" onChange={changeBusinessInputs} value={BusinessData.BusinessAddress1} placeholder="Business Address Line 1" id="BusinessAddress1" minLength="3" maxLength="60" required /><br />
                        <input type="text" className="form-control" name="BusinessAddress2" onChange={changeBusinessInputs} value={BusinessData.BusinessAddress2} placeholder="Business Address Line 2" id="BusinessAddress2" minLength="0" maxLength="60" required /><br />
                        <input type="text" className="form-control" name="City" onChange={changeBusinessInputs} value={BusinessData.City} placeholder="City" id="City" minLength="3" maxLength="20" required /><br />
                        <input type="text" className="form-control" name="Pincode" onChange={changeBusinessInputs} value={BusinessData.Pincode} placeholder="Pincode" id="Pincode" minLength="3" maxLength="6" required /><br />
                        <input type="text" className="form-control" name="District" placeholder="District" id="District" minLength="3" maxLength="30" required /> <br /> 
                        <input type="text" className="form-control" name="State" onChange={changeBusinessInputs} value={BusinessData.State} placeholder="State" id="Country" minLength="3" maxLength="20" required /><br /> 
                        <input type="text" className="form-control" name="Country" onChange={changeBusinessInputs} value={BusinessData.Country} placeholder="Country" id="Country" minLength="3" maxLength="20" required /><br /> 
                        <input type="text" className="form-control" name="Gstin" onChange={changeBusinessInputs} value={BusinessData.Gstin} placeholder="Registered GSTIN" id="Gstin" minLength="15" maxLength="15" required /><br />
                        <input type="text" className="form-control" name="Pan" onChange={changeBusinessInputs} value={BusinessData.Pan} placeholder="Pan Number" id="Pan" minLength="15" maxLength="15" required /><br />

                        <div id="errors" className="error"></div>
                        <div id="success" className="success"></div>

                        <input type="submit" className="btn btn-primary" id="ContinueBusinessRegistration" value="Continue" />

                    
                    </form>  
                </div>
        </div>
        </div>
  )
}

export default StoreCreation