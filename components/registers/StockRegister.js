"use client";

import { useEffect, useState } from "react";

const StockRegisterALL = () => {
    const [items, setItems] = useState([
        // {itembarcode: 1, itemname: "item1", itemqty: 10, itemmrp: 100, itempurrate: 90, itemsalerate: 110, itemtaxid: 10},
        // {itembarcode: 2, itemname: "item2", itemqty: 20, itemmrp: 200, itempurrate: 190, itemsalerate: 210, itemtaxid: 20},
    ]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/main/api/stock-register-all/")
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