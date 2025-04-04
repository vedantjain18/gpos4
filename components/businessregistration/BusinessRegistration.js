
"use client";
import "@/components/styles/formstyles.css";
import { getCokies } from "@/utils/cookieUtils";
import { setCokies } from "@/utils/cookieUtils";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const BusinessRegistration = () => {
	// const [ownerId, setOownerId] = useState('');
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
		Gstin: ""
	});

	useEffect(() => {
		const OwnerId = getCokies('ownerId')
		setBusinessData({...BusinessData, OwnerId})
	}, [])
	
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
	  	setCokies('businessId', data.data)
		redirect('/storecreation')
	})

}

function changeBusinessInputs(e) {
	setBusinessData({...BusinessData, [e.target.name]:e.target.value})
}

  return (
		<div className="login">
			<h1>Business Registration</h1>
            <form id="BusinessRegistrationForm" onSubmit={handleFormSubmit}>
				
				
				<input type="text" name="OwnerId" value={BusinessData.OwnerId} placeholder="Owner Id" id="OwnerId" maxLength="20" required disabled />
                <input type="text" name="BusinessName" onChange={changeBusinessInputs} value={BusinessData.fullname} placeholder="Business Name" id="BusinessName" minLength="3" maxLength="20" required />
				
                <br /><br /> 

				<input type="text" name="BusinessEmail" onChange={changeBusinessInputs} value={BusinessData.fullname} placeholder="Business Email ID" id="BusinessEmail" minLength="6" maxLength="30" required />
				<input type="text" name="BusinessMobile" onChange={changeBusinessInputs} value={BusinessData.fullname} placeholder="Business Mobile Number (+91)" id="BusinessMobile" minLength="10" maxLength="10" required />
				<input type="text" name="BusinessWhatsapp" onChange={changeBusinessInputs} value={BusinessData.fullname} placeholder="Business Whatsapp Number (If Any)" id="BusinessWhatsapp" minLength="10" maxLength="10" required />
				<input type="text" name="BusinessAddress1" onChange={changeBusinessInputs} value={BusinessData.fullname} placeholder="Business Address Line 1" id="BusinessAddress1" minLength="3" maxLength="60" required />
				<input type="text" name="BusinessAddress2" onChange={changeBusinessInputs} value={BusinessData.fullname} placeholder="Business Address Line 2" id="BusinessAddress2" minLength="0" maxLength="60" required />
				<input type="text" name="City" onChange={changeBusinessInputs} value={BusinessData.fullname} placeholder="City" id="City" minLength="3" maxLength="20" required />
				<input type="text" name="Pincode" onChange={changeBusinessInputs} value={BusinessData.fullname} placeholder="Pincode" id="Pincode" minLength="3" maxLength="6" required />
				<input type="text" name="District" placeholder="District" id="District" minLength="3" maxLength="30" required />
				<input type="text" name="State" onChange={changeBusinessInputs} value={BusinessData.fullname} placeholder="State" id="Country" minLength="3" maxLength="20" required />
				<input type="text" name="Country" onChange={changeBusinessInputs} value={BusinessData.fullname} placeholder="Country" id="Country" minLength="3" maxLength="20" required />
                <input type="text" name="Gstin" onChange={changeBusinessInputs} value={BusinessData.fullname} placeholder="Registered GSTIN" id="Gstin" minLength="15" maxLength="15" required />

				<div id="errors" className="error"></div>
                <div id="success" className="success"></div>

				<input type="submit" id="ContinueBusinessRegistration" value="Continue" />
                
			</form>
		</div>
  )
}

export default BusinessRegistration