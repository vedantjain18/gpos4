"use client";

// Item Master Search by Name starts here:
import { URL } from '@/utils/config';
import { useState, useEffect } from 'react';

const SalesOrder = () => {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const business_id = 1;
    const employee_master_id = 1;

    const fetchAllIitems = async () => {
        try {
            const fetchedItemsResponse = await fetch(`${URL}api/item-master-search-by-name?business_id=${business_id}&employee_master_id=${employee_master_id}`);
            const fetchedItems = await fetchedItemsResponse.json();
            console.log(fetchedItems);

            return fetchedItems.data;
        } catch(err) {
            console.log(err);
            return [];
        }
    }

    useEffect(()=> {
        fetchAllIitems().then((fetchedItems) => {
            console.log(fetchedItems);
            if(fetchedItems) {
                setItems(fetchedItems);
                // setFilteredItems(fetchedItems);
            }
        })
        
    }, [])

    const filterItems = (searchTerm) => {
        if(searchTerm === '') {
            return []
        }
        const regex = new RegExp(searchTerm, 'i');
        console.log(regex);
        const filteredItems = items.filter(item => regex.test(item.item_name));
        return filteredItems;
    }

    const handleSearchByText = (event) => {
        const searchTerm = event.target.value;
        const filteredItems = filterItems(searchTerm);
        console.log(filteredItems);
        
        setFilteredItems(filteredItems);
    }

//Sales Bill Pending View Starts Here:
    //import { useEffect, useState } from "react";

// const SalesBillPending = () => {
    const [items_sales_bill_pending, setItems_sales_bill_pending] = useState([

    ]);
//     const business_id = 1;
//     const employee_master_id = 1;

    useEffect(() => {
        fetch(`${URL}salesmgmt/api/sales-bill-pending?business_id=${business_id}&employee_master_id=${employee_master_id}`)
            .then((res) => res.json())
            .then((data) => setItems_sales_bill_pending(data.data));
    }, []);

return (
    <div className="container mt-3">
    <h4 className="alert alert-info text-center mb-1 p-1"> SALES ORDER (SCAN POS) </h4>
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
                
                    <input type="text" className="form-control" id="skuid" name="skuid" placeholder="Scan Barcode" /><br />
                    <input type="text" className="form-control" id="namesearch" name="namesearch" placeholder="Search Name" onChange={handleSearchByText} />
                    

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
                    <br /><button type="submit" className="btn btn-info" id="btnsave">SAVE ORDER</button>
                    <br /><br /><button type="submit" className="btn btn-info" id="TransferToOrder">To S. Order</button>
                    <br /><button type="submit" className="btn btn-info" id="TransferToQuotation">To S. Quotation</button>
                </form>

        </div>
        <div className="col-sm-10 text-center">
        <div className="list-group" id="show-list">
            {filteredItems.map((item, key) => (
                <li key={key} className="list-group-item list-group-item-action list-group-item-info">{item.item_name}</li>
            ))}
        </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">S.No.</th>
                        <th scope="col">Barcode</th>
                        <th scope="col">Child Barcode</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">MRP</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">GST</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Action</th>
                    </tr>
            </thead>
            <tbody id="tbody">
                {items_sales_bill_pending.map((i, key) => (
                    <tr key={key}>
                        <td>{i.item_master_id}</td>
                        <td>{i.item_barcode}</td>
                        <td>{i.item_child_barcode}</td>
                        <td>{i.item_name}</td>
                        <td>{i.item_mrp}</td>
                        <td>{i.item_sale_rate}</td>
                        <td>{i.item_qty}</td>
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


export default SalesOrder