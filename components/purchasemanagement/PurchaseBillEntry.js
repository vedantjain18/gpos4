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

    const [purchasePending, setPurchasePending] = useState(null)

    useEffect(() => {
        const businessId = getCokies('businessId')
        axiosInstance.get(`/inventorymgmt/item-master?business_id=${businessId}`)
        .then(response => response.data)
        .then(data => {
            console.log(data)
            setItems(data.data);
            console.log(data);
        })

        axiosInstance.get(`/inventorymgmt/account-master?business_id=${businessId}`)
        .then(response => response.data)
        .then(data => {
            console.log(data)
            setItems(data.data);
            console.log(data);
        })
    }, [])

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

    const handleAddPurhase = () => {
        const {item_tax_container_id, id, item_name} = selectedItem;
        const { id: distId } = selectedDist;
        const businessId = getCokies('businessId')
        const employeeId = getCokies('employeeId')
        
        axiosInstance.post('/purchasemgmt/purchase-invoice-pending/', {
            businessId,
            itemTaxContainerId: item_tax_container_id,
            itemMasterId: id,
            itemName: item_name,
            distId,
            employeeId,

        })
        .then(response => response.data)
        .then(data => {
            console.log(data)
            setPurchasePending(data);
        })
        .catch(err => console.log(err))
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

                <input type="text" className="form-control" id="distid" name="distid" placeholder="Dist ID"/>
                <input type="text" onChange={(e) => filterDist(e.target.value)} value={distName} className="form-control" id="distname" name="distname" placeholder="Dist Name" required/>
                <div className="list-group" id="show-list">
                {filteredDists && filteredDists.map((dist, index) => (
                        <div key={index} className="list-group-item list-group-item-action" onClick={() => { handleDistClick(dist.acc_name) }}>
                            {dist.acc_name}
                        </div>
                    ))}
                </div>
                
                <input type="text" className="form-control" id="distmob" name="distmob" placeholder="Dist Mobile" readOnly/>
                <input type="text" className="form-control" id="distgst" name="distgst" placeholder="Dist GST" readOnly/>


                <button type="submit" className="btn btn-info" id="distadd">Add Dist</button><br /><br />
                <input type="text" className="form-control" id="purbillno" name="purbillno" placeholder="Bill No." required/>
                <input type="date" className="form-control" id="datePicker" name="purdate" min="2021-04-01" max="2022-03-31" required/>

                <div id="msgcstr"></div>

            </form><br />



            <form className="col-sm-12" id="subskuid" onSubmit={handleAddPurhase}>
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

                <button type="submit" className="btn btn-info" id="btnadd">Add Item</button>
                <div id="msg"></div>
            </form><br />

            <div className="col-sm-12">
            GST Total:
            <div id="gsttotal"></div>
            Bill Total:
            <div id="billtotal"></div>
            
            </div><br />

            <form className="col-sm-12" id="savebtn" method="post" action="">
                <input type="text" className="form-control" id="othrchrgs" name="othrchrgs" placeholder="Other Charges[->(-)GST]"/>
                <input type="text" className="form-control" id="othrdis" name="othrdis" placeholder="Other Discounts[->(-)GST]"/>
                <input type="text" className="form-control" id="othrchrgs" name="othrchrgs" placeholder="Other Charges->Ledger"/>
                <input type="text" className="form-control" id="othrdis" name="othrdis" placeholder="Other Discounts->Ledger"/>
                <input type="text" className="form-control" id="freight" name="freight" placeholder="Freight"/>
                <button type="submit" className="btn btn-info" id="btnsave">SAVE PURCHASE</button>
            </form>

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
            {purchasePending && (
                <tr>
                {Object.keys(purchasePending).map((objKeys, key) => (
                    <td key={key} scope="col">{purchasePending[objKeys]}</td>
                ))}
                <td><button className="btn btn-secondary" id="btndelete">Delete</button></td>
                </tr>
            )}
            </tbody>
        </table>
        
        </div>
        </div>
        </div>
    )
  }
  
  export default PurchaseBillEntry