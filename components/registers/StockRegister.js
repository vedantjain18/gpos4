"use client";

import { useEffect, useState } from "react";

const StockRegisterALL = () => {
    const [items, setItems] = useState([

    ]);

    const business_id = 1;

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/inventorymgmt/api/stock-register-all?business_id=${business_id}`)
            .then((res) => res.json())
            .then((data) => setItems(data.data));
    }, []);

    return (
        <div className="container mt-5">
        <div className="col-sm-12 text-center">
        <table className="table table-striped table-hover">
        <thead>
                    <tr>
                        <th scope="col">S.No.</th>
                        <th scope="col">Item Barcode</th>
                        <th scope="col">Item Name</th>
                        <th scope="col">Item Qty</th>
                        <th scope="col">MRP</th>
                        <th scope="col">Item PurRate</th>
                        <th scope="col">Sale Rate</th>
                        <th scope="col">Item GST</th>
                        <th scope="col">Total Value</th>
                        
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
      
    </table>
    </div>
    </div>
    
    )
  }
  
  export default StockRegisterALL