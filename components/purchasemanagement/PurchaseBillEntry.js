
const PurchaseBillEntry = () => {
    return (

        <div className="container mt-3">
    <h4 className="alert alert-info text-center mb-1 p-1"> Purchase (SCAN POS) </h4>
    <div className="row">
    <div className="col-sm-2">
    <form className="" id="logout" method="post" action="../loginauth/logout.php">
                User: 

            </form><br />
            <form className="col-sm-12" id="distinfo" method="post" action="">

                <input type="text" className="form-control" id="distid" name="distid" placeholder="Dist ID"/>
                <input type="text" className="form-control" id="distname" name="distname" placeholder="Dist Name" required/>
                <div className="list-group" id="show-list"></div>
                
                <input type="text" className="form-control" id="distmob" name="distmob" placeholder="Dist Mobile" readonly/>
                <input type="text" className="form-control" id="distgst" name="distgst" placeholder="Dist GST" readonly/>


                <button type="submit" className="btn btn-info" id="distadd">Add Dist</button><br /><br />
                <input type="text" className="form-control" id="purbillno" name="purbillno" placeholder="Bill No." required/>
                <input type="date" className="form-control" id="datePicker" name="purdate" min="2021-04-01" max="2022-03-31" required/>

                <div id="msgcstr"></div>

            </form><br />



            <form className="col-sm-12" id="subskuid" method="post" action="">
            <h6 className=" p-1"> Scan Items</h6>    
                <input type="text" className="form-control" id="skuid" name="skuid" placeholder="Scan Barcode"/><br />
                <input type="text" className="form-control" id="namesearch" name="namesearch" placeholder="Search Name"/>
                <div className="list-group" id="show-list2"></div>

                <button type="submit" className="btn btn-info" id="btnadd">Add Item</button>
                <div id="msg"></div>
            </form><br />

            <div className="col-sm-12">
            GST Total:
            <div id="gsttotal"></div>
            Bill Total:
            <div id="billtotal"></div>
            
            </div><br />

            <form className="col-sm-12" id="savebtn" method="post" action="">
                <input type="text" className="form-control" id="othrchrgs" name="othrchrgs" placeholder="Other Charges[->(-)GST]"/>
                <input type="text" className="form-control" id="othrdis" name="othrdis" placeholder="Other Discounts[->(-)GST]"/>
                <input type="text" className="form-control" id="othrchrgs" name="othrchrgs" placeholder="Other Charges->Ledger"/>
                <input type="text" className="form-control" id="othrdis" name="othrdis" placeholder="Other Discounts->Ledger"/>
                <input type="text" className="form-control" id="freight" name="freight" placeholder="Freight"/>
                <button type="submit" className="btn btn-info" id="btnsave">SAVE PURCHASE</button>
            </form>

        </div>

        <div className="col-sm-10 text-center">
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Barcode</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">MRP</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">PurRate</th>
                    <th scope="col">SaleRate</th>                
                    <th scope="col">GST</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Action</th>

                </tr>
        </thead>
        <tbody id="tbody"></tbody>
        </table>
        
        </div>
        </div>
        </div>
    )
  }
  
  export default PurchaseBillEntry