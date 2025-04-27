
"use client";

import { useEffect, useState } from "react";
import axiosInstance from "../../utils/apiUtils";

const PurchaseRegister = () => {
    const [items, setItems] = useState([
        // {itembarcode: 1, itemname: "item1", itemqty: 10, itemmrp: 100, itempurrate: 90, itemsalerate: 110, itemtaxid: 10},
        // {itembarcode: 2, itemname: "item2", itemqty: 20, itemmrp: 200, itempurrate: 190, itemsalerate: 210, itemtaxid: 20},
    ]);

    useEffect(() => {
        // fetch("http://127.0.0.1:8000/purchasemgmt/api/purchase-register-all/")
        axiosInstance.get('/purchasemgmt/purchase-register-all/')
            .then((res) => res.json())
            .then((data) => setItems(data.data));
    }, []);

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
        <tbody id="tbody">
                {items.map((i, key) => (
                    <tr key={key}>
                        <td>{i.itemid}</td>
                        <td>{i.itembarcode}</td>
                        <td>{i.itemname}</td>
                        <td>{i.itemqty}</td>
                        <td>{i.itemmrp}</td>
                        <td>{i.itempurrate}</td>
                        <td>{i.itemsalerate}</td>
                        <td>{i.id}</td>
                        <td>{i.itemqty*i.itempurrate}</td>
                    </tr>
                ))}
        </tbody>
        <tbody id="tbodyttl"></tbody>

  
</table>
</div>
</div>
</div>
    )
  }
  
  export default PurchaseRegister