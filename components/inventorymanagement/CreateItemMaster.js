"use client";

import "@/components/styles/formstyles.css";


const CreateItemMaster = () => {
    return (
        <div className="container-fluid px-1 py-5 mx-auto">
    <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
           
            <div className="card">
                <h5 className="text-center mb-4">Create Item</h5>
                <form className="form-card" onsubmit="event.preventDefault()">
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Item Name<span className="text-danger"> *</span></label> <input type="text" id="fname" name="fname" placeholder="Enter your first name" onBlur="validate(1)" /> </div>
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Item Print name<span className="text-danger"> *</span></label> <input type="text" id="lname" name="lname" placeholder="Enter your last name" onBlur="validate(2)" /> </div>
                    </div>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-4 flex-column d-flex"> <label className="form-control-label px-3">Item Category<span className="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="" onBlur="validate(3)" /> </div>
                        <div className="form-group col-sm-4 flex-column d-flex"> <label className="form-control-label px-3">Item Group<span className="text-danger"> *</span></label> <input type="text" id="mob" name="mob" placeholder="" onBlur="validate(4)" /> </div>
                        <div className="form-group col-sm-4 flex-column d-flex"> <label className="form-control-label px-3">Item Sub Group<span className="text-danger"> *</span></label> <input type="text" id="mob" name="mob" placeholder="" onBlur="validate(4)" /> </div>
                    </div>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Job title<span className="text-danger"> *</span></label> <input type="text" id="job" name="job" placeholder="" onBlur="validate(5)" /> </div>
                    </div>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">What would you be using Flinks for?<span className="text-danger"> *</span></label> <input type="text" id="ans" name="ans" placeholder="" onBlur="validate(6)" /> </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="form-group col-sm-6"> <button type="submit" className="btn-block btn btn-primary">Request a demo</button> </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    )
  }
  
  export default CreateItemMaster