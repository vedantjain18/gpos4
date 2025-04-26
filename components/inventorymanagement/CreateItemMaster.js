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
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Item Name<span className="text-danger"> *</span></label> <input type="text" id="ItemName" name="ItemName" placeholder="Item Name" onBlur="validate(1)" /> </div>
                        <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Item Print name<span className="text-danger"> *</span></label> <input type="text" id="ItemPrintName" name="ItemPrintName" placeholder="Item Print Name" onBlur="validate(2)" /> </div>
                    </div>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-4 flex-column d-flex"> <label className="form-control-label px-3">Item Category<span className="text-danger"> * <a href="" rel="noreferrer">Create Category</a></span></label> <input type="text" id="ItemCategoryId" name="ItemCategoryId" placeholder="Item Category" onBlur="validate(3)" /> </div>
                        <div className="form-group col-sm-4 flex-column d-flex"> <label className="form-control-label px-3">Item Group<span className="text-danger"> * <a href="" rel="noreferrer">Create Group</a></span></label> <input type="text" id="ItemGroupId" name="ItemGroupId" placeholder="Item Group" onBlur="validate(4)" /> </div>
                        <div className="form-group col-sm-4 flex-column d-flex"> <label className="form-control-label px-3">Item Sub Group<span className="text-danger"> * <a href="" rel="noreferrer">Create Sub-Group</a></span></label> <input type="text" id="ItemSubGroupId" name="ItemSubGroupId" placeholder="Item Sub Group" onBlur="validate(4)" /> </div>
                    </div>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-3 flex-column d-flex"> <label className="form-control-label px-3">Item GST Group<span className="text-danger"> *</span></label> <input type="text" id="ItemTaxMasterId" name="ItemTaxMasterId" placeholder="Item GST Group" onBlur="validate(5)" /> </div>
                        <div className="form-group col-sm-3 flex-column d-flex"> <label className="form-control-label px-3">Item HSN Code<span className="text-danger"> *</span></label> <input type="text" id="ItemHsnId" name="ItemHsnId" placeholder="Item HSN Code" onBlur="validate(5)" /> </div>
                        <div className="form-group col-sm-3 flex-column d-flex"> <label className="form-control-label px-3">Item Unit<span className="text-danger"> *</span></label> <input type="text" id="ItemUnitId" name="ItemUnitId" placeholder="Item Unit" onBlur="validate(5)" /> </div>
                        <div className="form-group col-sm-3 flex-column d-flex"> <label className="form-control-label px-3">Item Size<span className="text-danger"> *</span></label> <input type="text" id="ItemSize" name="ItemSize" placeholder="Item Size" onBlur="validate(5)" /> </div>
                    </div>
                        <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-3 flex-column d-flex"> <label className="form-control-label px-3">Item Master Product Code<span className="text-danger"> *</span></label> <input type="text" id="ItemMasterProductId" name="ItemMasterProductId" placeholder="Item Master Product Code" onBlur="validate(5)" /> </div>
                        <div className="form-group col-sm-3 flex-column d-flex"> <label className="form-control-label px-3">Item Case Size<span className="text-danger"> *</span></label> <input type="text" id="ItemCaseSize" name="ItemCaseSize" placeholder="Item Case Size" onBlur="validate(5)" /> </div>
                        <div className="form-group col-sm-3 flex-column d-flex"> <label className="form-control-label px-3">Item Shell Size<span className="text-danger"> *</span></label> <input type="text" id="ItemShell" name="ItemShell" placeholder="Item Shell Size" onBlur="validate(5)" /> </div>
                        <div className="form-group col-sm-3 flex-column d-flex"> <label className="form-control-label px-3">Item Type<span className="text-danger"> *</span></label> <input type="text" id="ItemTypeId" name="ItemTypeId" placeholder="Item Type" onBlur="validate(5)" /> </div>
                    </div>

                    <div className="row justify-content-between text-left">
                        <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">Item Description<span className="text-danger"> *</span></label> <input type="text" id="ItemDesc" name="ItemDesc" placeholder="Item Description" onBlur="validate(6)" /> </div>
                    </div>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">Item Ingredients<span className="text-danger"> *</span></label> <input type="text" id="ItemIngredients" name="ItemIngredients" placeholder="Item Ingredients" onBlur="validate(6)" /> </div>
                    </div>
                    <div className="row justify-content-between text-center">
                        <div className="form-group col-sm-12"> <button type="submit" className="btn-block btn btn-primary">CREATE ITEM</button> </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    )
  }
  
  export default CreateItemMaster