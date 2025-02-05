
const CashHandover = () => {
    return (
        <div className="container mt-3">
    <h4 className="alert alert-info text-center mb-1 p-1"> Cash Handover </h4>
    <div className="row">
    <div className="col-sm-2">
    User: 
    <br /><br /><br />
    <b>Select Submission Date:</b>
    <form className="col-sm-12" id="datesubmit" method="post" action="">    
    <input type="date" className="form-control" id="datePicker" name="cashhandoverdate" value="" required /><br />
    
    <div id="msgcstr"></div>
    </form><br /><br /><br /><br /><br />
    <b>To Re-Print Handover Slip, Select Date:</b><br /><br />
    <form className="col-sm-12" id="datesubmit" method="post" action="">           
    <input type="date" className="form-control" id="datePicker2" name="cashhandoverdate2" value="curdate" required /><br />
    <button type="submit" className="btn btn-info" id="reprinthandoverdate">Re-Print Handover Slip</button>
    <div id="msgdate"></div>
    </form><br />

    </div>
    <div className="col-sm-2 text-center"></div>
    <div className="col-sm-4 text-center">
    <form className="col-sm-12" id="cashsubmit" method="post" action="">
    <table className="table table-hover" id="table">
    <thead>
                <tr>
                    <th scope="col">Denomination</th>
                    <th scope="col">Enter Qty</th>

                </tr>
        </thead>
        <tbody id="tbody">
                <tr>
                    <td scope="col">2000 X </td>
                    <td scope="col"><input type="text" className="form-control" id="N2000" onkeypress='validate(event)' /></td>

                </tr>
                <tr>
                    <td scope="col">500 X </td>
                    <td scope="col"><input type="text" className="form-control" id="N500" onkeypress='validate(event)' /></td>

                </tr>
                <tr>
                    <td scope="col">200 X </td>
                    <td scope="col"><input type="text" className="form-control" id="N200" onkeypress='validate(event)' /></td>

                </tr>
                <tr>
                    <td scope="col">100 X </td>
                    <td scope="col"><input type="text" className="form-control" id="N100" onkeypress='validate(event)' /></td>

                </tr>
                <tr>
                    <td scope="col">50 X </td>
                    <td scope="col"><input type="text" className="form-control" id="N50" onkeypress='validate(event)' /></td>

                </tr>
                <tr>
                    <td scope="col">20 X </td>
                    <td scope="col"><input type="text" className="form-control" id="N20" onkeypress='validate(event)' /></td>

                </tr>
                <tr>
                    <td scope="col">10 X </td>
                    <td scope="col"><input type="text" className="form-control" id="N10" onkeypress='validate(event)' /></td>

                </tr>
                <tr>
                    <td scope="col">5 X </td>
                    <td scope="col"><input type="text" className="form-control" id="N5" onkeypress='validate(event)' /></td>

                </tr>
                <tr>
                    <td scope="col">2 X </td>
                    <td scope="col"><input type="text" className="form-control" id="N2" onkeypress='validate(event)' /></td>

                </tr>
                <tr>
                    <td scope="col">1 X </td>
                    <td scope="col"><input type="text" className="form-control" id="N1" onkeypress='validate(event)' /></td>

                </tr>
                
        
                <tr>
                    <td scope="col">TOTAL </td>
                    <td scope="col"></td>

                </tr>
                </tbody>
  
    </table>

                <button type="submit" className="btn btn-info" id="submitcash">Submit Cash</button>
                <div id="msgcstr2"></div>
            </form><br />

    </div>
    </div>
</div>
    )
  }
  
  export default CashHandover