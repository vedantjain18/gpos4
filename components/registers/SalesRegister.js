
const SalesRegister = () => {
    return (

        <div className="container mt-3">
    <h4 className="alert alert-info text-center mb-1 p-1"> Sales Register </h4>
    <div className="row">
    <div className="col-sm-2">
    <form className="" id="logout" method="post" action="">
                User:<br />

            
            </form><br />


            <form className="col-sm-12" id="datesubmit" method="post" action="">

                <p><u><strong>Select Customer(s): </strong></u><br />
                (Null Returns All)</p>
                <input type="text" className="form-control" id="namesearch" name="namesearch" placeholder="Customer Name"/>
                <div className="list-group" id="show-list"></div>
                <hr />


                
                <p><u><strong>Payment Method(s):</strong></u></p>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Select ALL
                </label>
                </div>                
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" defaultChecked />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Cash
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Card Payment (Swipe)
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    UPI (PayTM)
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" defaultChecked />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    UPI (PhonePe)
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" defaultChecked />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Credit Sale
                </label>
                </div>
                <hr />

                <p><u><strong>User(s):</strong></u></p>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Select ALL
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" defaultChecked />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Vedant
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                    Rahul
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Doli
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" defaultChecked />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Priya
                </label>
                </div>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" defaultChecked />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Sanjay
                </label>
                </div>
                <hr />

                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    Show Returns Register
                </label>
                </div>
                <hr />

                <p><u><strong>Date Range:</strong></u></p>
                <input type="date" className="form-control" id="datePickerf" name="purdate1" min="" max="" required/>
                <input type="date" className="form-control" id="datePickert" name="purdate2" min="" max="" required/>
                <br />
                <button type="submit" className="btn btn-info" id="datesubmitbtn">Fetch</button>

                <div id="msgcstr"></div>

            </form><br />
    </div>

    <div className="col-sm-10 text-center">
    <table className="table table-striped table-hover">
    <thead>
                <tr>
                    <th scope="col">Bill No.</th>
                    <th scope="col">Bill Date</th>
                    <th scope="col">Cust Name</th>
                    <th scope="col">Bill Total</th>
                    <th scope="col">Cash</th>
                    <th scope="col">Credit Card</th>
                    <th scope="col">UPI (PhonePe)</th>
                    <th scope="col">Credit Sale</th>
                    <th scope="col">User</th>
                    <th scope="col">Action</th>

                </tr>
        </thead>
        <tbody id="tbody"></tbody>
        <tbody id="tbodyttl"></tbody>

  
</table>
</div>
</div>
</div>
    )
  }
  
  export default SalesRegister