"use client";
import "@/components/styles/loginstyles.css";
import { setCokies } from "@/utils/cookieUtils";
import { redirect } from "next/navigation";
import { useState } from "react";

const OwnerRegistration = () => {
    const [ownerData, setOwnerData] = useState({
      fullname: "",
      username: "",
      password: "",
      password2: "",
      email: "",
      mobile: "",
      whatsapp: "",
      address1: "",
      address2: "",
      city: "",
      pincode: "",
      district: "",
      state: "",
      country: ""
  });
    
    function handleFormSubmit(event) {  
        event.preventDefault();
        console.log(event.target);
        console.log(ownerData);

        fetch('http://127.0.0.1:8000/api/v1/mastercreate/owner-manage/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ownerData),
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          // ookies.set('ownerId', data.data)
          setCokies('ownerId', data.data)
          redirect('/businessregistration')
        })

    }
    
    function changeOwnerInputs(e) {
        setOwnerData({...ownerData, [e.target.name]:e.target.value})
    }

  return (
    
    <div className="login">
    <h1>Owner Registration</h1>
    <form id="OwnerRegistrationForm" onSubmit={handleFormSubmit}>
        
        <input type="text" name="fullname" onChange={changeOwnerInputs} value={ownerData.fullname} placeholder="Name" id="FullName" minLength="3" maxLength="20" required />
        <input type="text" name="username" onChange={changeOwnerInputs} value={ownerData.username} placeholder="Choose A UserName" id="UserName" minLength="3" maxLength="20" required /><a href="./.html" className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Check Availability</a>
        <br /><br />
        <input type="password" name="password" onChange={changeOwnerInputs} value={ownerData.password} placeholder="Choose A Password" id="Password" minLength="8" maxLength="20" required /> {/*</br>*password should be atleast 9 characters long with one special character */}
        <input type="password" name="password2" onChange={changeOwnerInputs} value={ownerData.password2} placeholder="Confirm Password" id="Password2" minLength="8" maxLength="20" required />
        <input type="text" name="email" onChange={changeOwnerInputs} value={ownerData.email} placeholder="Email ID" id="Email" minLength="6" maxLength="30" required />
        <input type="text" name="mobile" onChange={changeOwnerInputs} value={ownerData.mobile} placeholder="Mobile Number (+91)" id="Mobile" minLength="10" maxLength="10" required />
        <input type="text" name="whatsapp" onChange={changeOwnerInputs} value={ownerData.whatsapp} placeholder="Whatsapp Number (If Any)" id="Whatsapp" minLength="10" maxLength="10" required />
        <input type="text" name="address1" onChange={changeOwnerInputs} value={ownerData.address1} placeholder="Address Line 1" id="Address1" minLength="3" maxLength="60" required />
        <input type="text" name="address2" onChange={changeOwnerInputs} value={ownerData.address2} placeholder="Address Line 2" id="Address2" minLength="0" maxLength="60" required />
        <input type="text" name="city" onChange={changeOwnerInputs} value={ownerData.city} placeholder="City" id="City" minLength="3" maxLength="20" required />
        <input type="text" name="pincode" onChange={changeOwnerInputs} value={ownerData.pincode} placeholder="Pincode" id="Pincode" minLength="3" maxLength="6" required />
        <input type="text" name="district" onChange={changeOwnerInputs} value={ownerData.district} placeholder="District" id="District" minLength="3" maxLength="30" required />
        <input type="text" name="state" onChange={changeOwnerInputs} value={ownerData.state} placeholder="State" id="State" minLength="3" maxLength="20" required />
        <input type="text" name="country" onChange={changeOwnerInputs} value={ownerData.country} placeholder="Country" id="Country" minLength="3" maxLength="20" required />

        <div id="errors" className="error"></div>
        <div id="success" className="success"></div>

        <input type="submit" id="ContinueUserRegistration" value="Continue" />
        
    </form>
</div>
  )
}

export default OwnerRegistration