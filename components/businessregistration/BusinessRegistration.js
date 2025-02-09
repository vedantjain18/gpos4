
"use client";
import "@/components/styles/formstyles.css";

const BusinessRegistration = () => {
    function handleFormSubmit(event) {  
        event.preventDefault();
      }

  return (
		<div className="login">
			<h1>Business Registration</h1>
            <form id="OwnerRegistrationForm" onSubmit={handleFormSubmit}>
				
				
				<input type="text" name="OwnerId" placeholder="Owner Id" id="OwnerId" minLength="3" maxLength="20" required disabled />
                <input type="text" name="BizName" placeholder="Business Name" id="BizName" minLength="3" maxLength="20" required />
				<input type="text" name="UserName" placeholder="Choose A UserName" id="UserName" minLength="3" maxLength="20" required /><a href="./.html" className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Check Availability</a>
                <br /><br /> 

				<input type="text" name="BizEmail" placeholder="Business Email ID" id="BizEmail" minLength="6" maxLength="30" required />
				<input type="text" name="BizMobile" placeholder="Business Mobile Number (+91)" id="BizMobile" minLength="10" maxLength="10" required />
				<input type="text" name="BizWhatsapp" placeholder="Business Whatsapp Number (If Any)" id="BizWhatsapp" minLength="10" maxLength="10" required />
				<input type="text" name="BizAddress1" placeholder="Business Address Line 1" id="BizAddress1" minLength="3" maxLength="60" required />
				<input type="text" name="BizAddress2" placeholder="Business Address Line 2" id="BizAddress2" minLength="0" maxLength="60" required />
				<input type="text" name="City" placeholder="City" id="City" minLength="3" maxLength="20" required />
				<input type="text" name="Pincode" placeholder="Pincode" id="Pincode" minLength="3" maxLength="6" required />
				<input type="text" name="District" placeholder="District" id="District" minLength="3" maxLength="30" required />
				<input type="text" name="State" placeholder="State" id="Country" minLength="3" maxLength="20" required />
				<input type="text" name="Country" placeholder="Country" id="Country" minLength="3" maxLength="20" required />
                <input type="text" name="Gstin" placeholder="Registered GSTIN" id="Gstin" minLength="15" maxLength="15" required />

				<div id="errors" className="error"></div>
                <div id="success" className="success"></div>

				<input type="submit" id="ContinueUserRegistration" value="Continue" />
                
			</form>
		</div>
  )
}

export default BusinessRegistration