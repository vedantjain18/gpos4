
const PurchaseRegister = () => {
    return (

        <div className="container mt-3">
    <h4 className="alert alert-info text-center mb-1 p-1"> Purchase Register </h4>
    <div className="row">
    <div className="col-sm-2">
    <form className="" id="logout" method="post" action="../loginauth/logout.php">
            User:

            </form><br />
            <form className="col-sm-12" id="datesubmit" method="post" action="">

            <input type="text" className="form-control" id="distname" name="distname" placeholder="Distributor Name" required/>
            <div className="list-group" id="show-list"></div>
                <input type="date" className="form-control" id="datePickerf" name="purdate1" min="2021-04-01" max="2022-03-31" value="curdate" required/>
                <input type="date" className="form-control" id="datePickert" name="purdate2" min="2021-04-01" max="2022-03-31" value="curdate" required/>
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
                    <th scope="col">Supplier Name</th>
                    <th scope="col">Bill Total</th>
                    <th scope="col">User</th>
                    <th scope="col">PurID</th>
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
  
  export default PurchaseRegister