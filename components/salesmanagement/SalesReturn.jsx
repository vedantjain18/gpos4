"use client";

import { URL } from '@/utils/config';
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/apiUtils";

const SalesReturnBillPending = () => {
    const [SalesReturnBillPending, setSalesReturnBillPending] = useState([

    ]);

    const business_id = 1;
    const employee_master_id = 1;

    useEffect(() => {
        axiosInstance.get(`/salesmgmt/api/sales-return-bill-pending/?business_id=${business_id}?employee_master_id=${employee_master_id}`)
            .then((res) => res.json())
            .then((data) => setSalesReturnBillPending(data.data));
    }, []);

  return (
    <div className="container mt-3">
            <h4 className="alert alert-info text-center mb-1 p-1"> Sales Return (Scan) </h4>
            <div className="row">
            <div className="col-sm-2">
            User: <br /><br />
            <form className="col-sm-12" id="salesadd" method="post">

                <input type="text" className="form-control" id="billnum" name="distid" placeholder="Enter Bill Number" required />
                <input type="text" className="form-control" id="custmobno" name="custmobno" placeholder="Customer Mob" required disabled />
                <input type="text" className="form-control" id="custname" name="custname" placeholder="Customer Name" disabled />
                <button type="submit" className="btn btn-info" id="salesbilladd">Fetch Details</button>
                <div id="msgcstr"></div>

            </form>  <hr/>

            <form className="col-sm-12" id="subskuid" method="post" action="">
            <h6 className=" p-1"> Scan Items</h6>    
                <input type="text" className="form-control" id="itembarcode" name="itembarcode" placeholder="Scan Barcode"/>
                <input type="text" className="form-control" id="namesearch" name="namesearch" placeholder="Search Name"/>
                

                <button type="submit" className="btn btn-info" id="btnadd">Add Item</button>
                <div id="msg"></div>
            </form><hr/> 

            <div className="col-sm-12">
            Bill Total:
            <div id="billtotal"></div>
            
            </div>

            <form className="col-sm-12" id="savebtn" method="post" action="">
                <input type="text" className="form-control" id="cashsale" name="cashsale" placeholder="Cash Amount"/>
                <input type="text" className="form-control" id="mopcreditsale" name="mopcreditsale" placeholder="Credit Sale"/>
                <button type="submit" className="btn btn-info" id="btnsave">SAVE RETURN</button>
            </form>

            </div>

            <div className="col-sm-10 text-center">
            <div className="list-group" id="show-list2"></div>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Bill No</th>
                        <th scope="col">Barcode</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">MRP</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">SaleRate</th>                
                        <th scope="col">GST</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Action</th>

                    </tr>
            </thead>
            <tbody id="tbody">
                {SalesReturnBillPending.map((i, key) => (
                    <tr key={key}>
                        <td>{i.sales_bill_number}</td>
                        <td>{i.item_barcode}</td>
                        <td>{i.item_name}</td>
                        <td>{i.item_mrp}</td>
                        <td>{i.item_qty}</td>
                        <td>{i.item_sale_rate}</td>
                        <td>{i.item_gst}</td>
                        <td>{i.item_qty*i.item_sale_rate}</td>
                        <td>actions</td>
                    </tr>
                ))}

            </tbody>
            </table>
            
            </div>
            </div>
            </div>
  )
}

export default SalesReturnBillPending