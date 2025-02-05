
const DayEndReport = () => {
    return (

        <div className="container mt-3">
    <h4 className="alert alert-info text-center mb-1 p-1"> Day End Report </h4>
    <div className="row">
    <div className="col-sm-2">
    <form className="" id="logout" method="post" action="../loginauth/logout.php">
            User:
            </form><br />
            <form className="col-sm-12" id="datesubmit" method="post" action="">

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
                <p><u><strong>Date Range:</strong></u></p>
                <input type="date" className="form-control" id="datePickerf" name="purdate1" min="" max="" value="" required />
                <input type="date" className="form-control" id="datePickert" name="purdate2" min="" max="" value="" required />
                
                <button type="submit" className="btn btn-info" id="datesubmitbtn">Fetch</button>

                <div id="msgcstr"></div>

            </form><br />
    </div>

    <div className="col-sm-10 text-center">
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Account</th>
                    <th scope="col">Total</th>
                    <th scope="col">Cash</th>
                    <th scope="col">Card Swipe</th>
                    <th scope="col">UPI (PhonePe)</th>
                    <th scope="col">Credit Sale</th>
                    <th scope="col">R/O</th>                
                    <th scope="col">Other Charges</th>
                    <th scope="col">Other  Discounts</th>

                </tr>
        </thead>
        <tbody id="tbody"></tbody>
        <tbody id="tbody2"></tbody>
        <tbody id="tbody3"></tbody>
        </table>
        
        </div>
        </div>
        </div>
    )
  }
  
  export default DayEndReport