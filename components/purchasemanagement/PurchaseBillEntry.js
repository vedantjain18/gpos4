'use client'
import { getCokies } from "@/utils/cookieUtils"
import { useEffect, useState } from "react"
import axiosInstance from "../../utils/apiUtils";

const PurchaseBillEntry = () => {

    const [distName, setDistname] = useState('')
    const [filteredDists, setFilteredDists] = useState([])
    const [dists, setDists] = useState([])
    const [selectedDist, setSelectedDist] = useState({})

    const [itemName, setItemName] = useState('')
    const [filteredItems, setFilteredItems] = useState([])
    const [items, setItems] = useState([])
    const [selectedItem, setSelectedItem] = useState({})

    const [purchaseBillNo, setPurchaseBillNo] = useState('')
    const [purchaseBillDate, setPurchaseBillDate] = useState('')
    const [purchasePending, setPurchasePending] = useState([])

    const [dataUpdated, setDataUpdated] = useState(false);
    const [gstSymbols, setGstSymbols] = useState([]);

    useEffect(() => {
        const businessId = getCokies('businessId')
        const employeeId = getCokies('employeeId')
        // Get items
        axiosInstance.get(`/inventorymgmt/item-master?business_id=${businessId}`)
        .then(response => response.data)
        .then(data => {
            console.log(data)
            setItems(data.data);
        })

        // Get Distributors
        axiosInstance.get(`/accounts/accounts-master?business_id=${businessId}`)
        .then(response => response.data)
        .then(data => {
            console.log(data)
            setDists(data.data);
        })

        axiosInstance.get(`/purchasemgmt/purchase-invoice-pending?business_id=${businessId}&employee_master_id=${employeeId}`)
        .then(response => response.data)
        .then(data => {
            console.log(data)
            setPurchasePending(data.data);
        })

        axiosInstance.get(`/main/item-tax-master?business_id=${businessId}`)
        .then(response => response.data)
        .then(data => {
            console.log("/main/item-tax-master", data)
            setGstSymbols(data.data)
        })
        .catch(err => console.log("Error fetching: /main/item-tax-master", err))

    }, [])

    useEffect(() => {
        const businessId = getCokies('businessId')
        const employeeId = getCokies('employeeId')
        axiosInstance.get(`/purchasemgmt/purchase-invoice-pending?business_id=${businessId}&employee_master_id=${employeeId}`)
        .then(response => response.data)
        .then(data => {
            console.log(data)
            setPurchasePending(data.data);
        })
    }, [dataUpdated])

    const filterItem = (itemName) => {
        setItemName(itemName)
        if(itemName === '') {
            setFilteredItems([])
        } else {
            const filtered = items.filter(item => item.item_name.toLowerCase().includes(itemName.toLowerCase()));
            setFilteredItems(filtered)
            return filtered
        }
    }

    const handleItemClick = (itemName) => {
        const selectedItem = filterItem(itemName)
        setSelectedItem(selectedItem[0])
        setFilteredItems([])
        console.log(selectedItem)
    }

    const filterDist = (distName) => {
        setDistname(distName)
        if(distName === '') {
            setFilteredDists([])
        } else {
            const filtDists = dists.filter(dist => dist.acc_name.toLowerCase().includes(distName.toLowerCase()));
            setFilteredDists(filtDists)
            return filtDists
        }
    }

    const handleDistClick = (distName) => {
        const selectedDist = filterDist(distName)
        setSelectedDist(selectedDist[0])
        setFilteredDists([])
        console.log(selectedDist)
    }

    const handleAddPurhase = (e) => {
        e.preventDefault()
        const {item_tax_container_id, id: itemId, item_name} = selectedItem;
        const { id: distId } = selectedDist;
        const businessId = getCokies('businessId')
        const employeeId = getCokies('employeeId')
        const locationMasterId = getCokies('locationMasterId')

        console.log("purchasePending", purchasePending);
        const existingItem = purchasePending.find(
            (item) => item.item_master_id === itemId
        );

        console.log("existingItem", existingItem);
        
        if (existingItem) {
            const newQty = parseFloat(existingItem.item_child_sales_qty || 0) + 1;
            axiosInstance.patch(
                `/purchasemgmt/purchase-invoice-pending/`,
                {
                    id: existingItem.id,
                    field: 'item_child_sales_qty',
                    value: newQty,
                }
            )
            .then((data) => {
                console.log("Field updated:", data);
                setDataUpdated(!dataUpdated)
                const updatedItem = data.data;
                setPurchasePending((prev) =>
                    prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
                );
            })
            .catch((err) => console.error("Update error:", err));
        } else {
            axiosInstance.post('/purchasemgmt/purchase-invoice-pending/', {
                businessId,
                locationMasterId,
                purchaseBillNo,
                purchaseBillDate,
                accountId: distId,
                itemMasterId: itemId,
                itemName: item_name,
                itemChildSalesQty: 1,
                itemTaxId: item_tax_container_id,
                createdBy: employeeId
            })
            .then(response => response.data)
            .then(data => {
                console.log("Item Added", data)
                setDataUpdated(!dataUpdated)
                const updatedItem = data.data;
                setPurchasePending((prev) => [...prev, updatedItem]);
            })
            .catch(err => console.log(err))
        }
    }

    const handleRowChange = async (e, id, field) => {
        const valueRaw = e.target?.innerText?.trim();
        let value = valueRaw;
        
        let prevValue;
        setPurchasePending((prev) => {
            const updated = prev.map((row) => {
                if (row.id === id) {
                    // Deep clone if it's an object
                    prevValue = typeof row[field] === "object" && row[field] !== null
                        ? JSON.parse(JSON.stringify(row[field]))
                        : row[field];

                    return { ...row, [field]: value };
                }
                return row;
            });
            return updated;
        });

        if (field === "item_tax_id") {
            const newGstSymbol = gstSymbols.find(gstSymbol => gstSymbol.item_tax_symbol === valueRaw);
            
            if (!newGstSymbol) {
                console.warn("Invalid GST symbol:", valueRaw);
                // Revert back if invalid GST
                setPurchasePending((prev) =>
                    prev.map((row) =>
                        row.id === id ? { ...row, [field]: prevValue } : row
                    )
                );
                return;
            }

            value = newGstSymbol;
        } else if (!isNaN(valueRaw) && valueRaw !== "") {
            value = parseFloat(valueRaw).toFixed(2);
        }

        axiosInstance.patch('/purchasemgmt/purchase-invoice-pending/', {
            id,
            field,
            value,
        })
        .then(response => {
            console.log("Field updated:", response.data);
        })
        .catch(err => {
            console.error("Update error:", err);
            setPurchasePending((prev) =>
                prev.map((row) =>
                    row.id === id ? { ...row, [field]: prevValue } : row
                )
            );
        });
    };

    const handleDelete = (e, id) => {
        console.log("handleDelete", id)
        axiosInstance.delete(`/purchasemgmt/purchase-invoice-pending/`, { data: { id } })
        .then(data => {
            console.log("handleDelete:", data)
            setDataUpdated(!dataUpdated)
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handlePurchaseSave = (e) => {
        e.preventDefault()
        // POST: /purchase-invoice-register
        // POST: /purchase-invoice-register-details
        // POST: /stock-register
        // DELETE: /purchase-invoice-pending
    }

    return (

        <div className="container mt-3">
            <h4 className="alert alert-info text-center mb-1 p-1"> Purchase (SCAN POS) </h4>
            <div className="row">
            <div className="col-sm-2">
            <form className="" id="logout" method="post" action="../loginauth/logout.php">
                User:

            </form><br />
            <form className="col-sm-12" id="distinfo" method="post" action="">

                <input type="text" className="form-control" value={selectedDist.id} id="distid" name="distid" placeholder="Dist ID"/>
                <input type="text" onChange={(e) => filterDist(e.target.value)} value={distName} className="form-control" id="distname" name="distname" placeholder="Dist Name" required/>
                <div className="list-group" id="show-list">
                {filteredDists && filteredDists.map((dist, index) => (
                        <div key={index} className="list-group-item list-group-item-action" onClick={() => { handleDistClick(dist.acc_name) }}>
                            {dist.acc_name}
                        </div>
                    ))}
                </div>
                
                <input type="text" className="form-control" id="distmob" value={selectedDist.acc_mob} name="distmob" placeholder="Dist Mobile" readOnly/>
                <input type="text" className="form-control" id="distgst" value={selectedDist.acc_gstin} name="distgst" placeholder="Dist GST" readOnly/>


                <button type="submit" className="btn btn-info" id="distadd">Add Dist</button><br /><br />
                <input type="text" className="form-control" value={purchaseBillNo} onChange={(e) => setPurchaseBillNo(e.target.value)} id="purbillno" name="purbillno" placeholder="Bill No." required/>
                <input type="date" className="form-control" value={purchaseBillDate} onChange={(e) => setPurchaseBillDate(e.target.value)} id="datePicker" name="purdate" min="2021-04-01" max="2022-03-31" required/>

                <div id="msgcstr"></div>

            </form><br />



            <form className="col-sm-12" id="subskuid">
            <h6 className=" p-1"> Scan Items</h6>    
                <input type="text" className="form-control" id="skuid" name="skuid" placeholder="Scan Barcode"/><br />
                <input type="text" onChange={(e) => filterItem(e.target.value)} value={itemName} className="form-control" id="namesearch" name="namesearch" placeholder="Search Name"/>
                <div className="list-group" id="show-list2">
                    {filteredItems && filteredItems.map((item, index) => (
                        <div key={index} className="list-group-item list-group-item-action" onClick={() => { handleItemClick(item.item_name) }}>
                            {item.item_name}
                        </div>
                    ))}
                </div>

                <button type="submit" onClick={handleAddPurhase} className="btn btn-info" id="btnadd">Add Item</button>
                <div id="msg"></div>
            </form><br />

            <div className="col-sm-12">
            GST Total:
            <div id="gsttotal"></div>
            Bill Total:
            <div id="billtotal"></div>
            Net Amount:
            <div id="netamount"></div>
            
            </div><br />

            <form className="col-sm-12" id="chargeForm">
                <input type="text" className="form-control" id="othrchrgs" name="othrchrgs" placeholder="Other Charges[->(-)GST]"/>
                <input type="text" className="form-control" id="othrdis" name="othrdis" placeholder="Other Discounts[->(-)GST]"/>
                <input type="text" className="form-control" id="othrchrgs" name="othrchrgs" placeholder="Other Charges->Ledger"/>
                <input type="text" className="form-control" id="othrdis" name="othrdis" placeholder="Other Discounts->Ledger"/>
                <input type="text" className="form-control" id="freight" name="freight" placeholder="Freight"/>
            </form>
            <button className="btn btn-info" id="btnsave" onClick={handlePurchaseSave}>SAVE PURCHASE</button>

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
                <tbody id="tbody">
                {purchasePending && purchasePending.map((p, key) => (
                    <tr key={key}>
                        <td scope="col">{p["id"]}</td>
                        <td scope="col">{p["item_barcode"]}</td>
                        <td scope="col">{p["item_name"]}</td>
                        <td>
                            <div
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) =>
                                    handleRowChange(e, p.id, "item_child_mrp")
                                }
                                style={{ minWidth: "80px" }}
                            >
                                {p.item_child_mrp}
                            </div>
                        </td>

                        <td>
                            <div
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) =>
                                    handleRowChange(e, p.id, "item_child_sales_qty")
                                }
                                style={{ minWidth: "80px" }}
                            >
                                {p.item_child_sales_qty}
                            </div>
                        </td>

                        <td>
                            <div
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) =>
                                    handleRowChange(e, p.id, "item_child_purchase_rate")
                                }
                                style={{ minWidth: "80px" }}
                            >
                                {p.item_child_purchase_rate}
                            </div>
                        </td>

                        <td>
                            <div
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) =>
                                    handleRowChange(e, p.id, "item_child_sales_rate")
                                }
                                style={{ minWidth: "80px" }}
                            >
                                {p.item_child_sales_rate}
                            </div>
                        </td>
                        <td scope="col">
                            <div
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={(e) => handleRowChange(e, p.id, 'item_tax_id')}
                                style={{ minWidth: "80px" }}
                            >
                                {p.item_tax_id.item_tax_symbol}
                            </div>
                        </td>
                        <td scope="col">{(
                            parseFloat(p.item_child_sales_qty) *
                            parseFloat(p.item_child_purchase_rate)
                        ).toFixed(2)}
                        </td>
                        <td><button className="btn btn-secondary" id="btndelete" onClick={(e) => handleDelete(e, p.id)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </div>
        </div>
    )
  }
  
  export default PurchaseBillEntry