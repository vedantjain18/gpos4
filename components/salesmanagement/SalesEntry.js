

const SalesEntry = () => {
  return (
                
<div className="container mt-3">
<h4 className="alert alert-info text-center mb-1 p-1">  SALES (SCAN POS) </h4>
<div className="row">
    <div className="col-sm-2">
    User: <br /><br />
            <form className="col-sm-12" id="custid" method="post" action="">
               
                <input type="text" className="form-control" id="custmobno" name="custmobno" placeholder="Enter Mobile No" required />
                <input type="text" className="form-control" id="custname" name="custname" placeholder="Customer Name" required />
                <textarea className="form-control" rows="2" id="custaddress" name="custaddress" placeholder="Address"></textarea>

                <button type="submit" className="invisible" id="custadd">Add</button>
            <div id="msgcstr"></div>
            </form><hr />

            <form className="col-sm-12" id="subskuid" method="post" action="">
               
                <input type="text" className="form-control" id="skuid" name="skuid" placeholder="Scan Barcode"/><br />
                <input type="text" className="form-control" id="namesearch" name="namesearch" placeholder="Search Name"/>
                

                <button type="submit" className="btn btn-info" id="btnadd">Add</button><hr />
                <div id="msg"></div>
            </form>
           
            <div className="col-sm-12">
            Bill Total:<div id="billtotal"></div>
            </div>
            
            <form className="col-sm-12" id="savebtn" method="post" action="">
                <input type="text" className="form-control" id="cashsale" name="cashsale" placeholder="Cash Received"/>
                <input type="text" className="form-control" id="cardsale" name="cardsale" placeholder="Card Amount"/>
                <input type="text" className="form-control" id="paytmsale" name="paytmsale" placeholder="PayTM Amount"/>
                <input type="text" className="form-control" id="mopcreditsale" name="mopcreditsale" placeholder="Credit Sale"/>
                <input type="text" className="form-control" id="dunzo" name="dunzo" placeholder="Dunzo"/>
                <br /><b>Balance Return:</b>
                <div id="msgchange"></div>
                <br /><button type="submit" className="btn btn-info" id="btnsave">SAVE BILL</button>
            </form>

    </div>
    <div className="col-sm-10 text-center">
    <div className="list-group" id="show-list"></div>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Barcode</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">MRP</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Quantity</th>
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

export default SalesEntry