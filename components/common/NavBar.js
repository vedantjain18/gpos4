"use client";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">GoRamu</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="../loginauth">Home</a>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sales Management
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="../sales_page">SALE-SCAN POS</a></li>
            <li><a className="dropdown-item" href="../SalesReturn/SalesReturn.php">Sales Return</a></li>
            
            <li><a className="dropdown-item" href="../Reports/SalesRegister.php">Sales Register</a></li>
            <li><a className="dropdown-item" href="../Reports/SalesRegisterCard.php">Sales Register (Card)</a></li>
            <li><a className="dropdown-item" href="../Reports/SalesRegisterPayTM.php">Sales Register (PayTM)</a></li>
            <li><a className="dropdown-item" href="../Reports/SalesRegisterCredit.php">Sales Register (Credit)</a></li>
            <li><a className="dropdown-item" href="../SalesReturnRegister/SalesReturnRegister.php">Sales Return Register</a></li>
            <li><a className="dropdown-item" href="../Reports/SalesRegistercw.php">Sales (Customer Wise)</a></li>
            <li><a className="dropdown-item" href="../SalesReturnRegisterCW/SalesReturnRegisterCW.php">Sales Return (Customer Wise)</a></li>
            <li><a className="dropdown-item" href="../sales_page2">SALE - DTW</a></li>
            <li><a className="dropdown-item" href="../Reports/DayEndReport.php">Day End Report</a></li>
            <li><a className="dropdown-item" href="../Reports/DayEndReportAll.php">Day End Report (ALL)</a></li>
            <li><a className="dropdown-item" href="../Reports/SalesRegisterCashALL.php">Sales Register (Cash ALL)</a></li>
            <li><a className="dropdown-item" href="../Reports/SalesRegisterCardALL.php">Sales Register (Card ALL)</a></li>
            <li><a className="dropdown-item" href="../Reports/SalesRegisterPayTMALL.php">Sales Register (PayTM ALL)</a></li>
            <li><a className="dropdown-item" href="../Reports/SalesRegisterCreditALL.php">Sales Register (Credit ALL)</a></li>
            <li><a className="dropdown-item" href="../Reports/SalesRegisterDunzoALL.php">Sales Register (Dunzo ALL)</a></li>
            <li><a className="dropdown-item" href="../Reports/SalesRegisterAllALL.php">Sales Register (ALL-ALL)</a></li>
            <li><a className="dropdown-item" href="../sales_page/cashHandover.php">Cash Handover</a></li>
            <li><hr className="dropdown-divider" /></li>
           
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Purchase Management
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="../purchase_mgmt/index.php">Purchase Invoice</a></li>
            <li><a className="dropdown-item" href="../Reports/PurchaseRegister.php">Purchase Register (All)</a></li>
            <li><a className="dropdown-item" href="../Reports/PurchaseRegisterSW.php">Purchase Register (Supplier Wise)</a></li>
            <li><a className="dropdown-item" href="../FranchiseePurchase/index.php">Franchisee Transfer Purchase</a></li>
            <li><a className="dropdown-item" href="">Purchase Challan</a></li>
            <li><a className="dropdown-item" href="">Purchase Returns</a></li>
            <li><a className="dropdown-item" href="">Supplier List</a></li>
            
            <li><hr className="dropdown-divider" /></li>
            
          </ul>
        </li>
        

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Inventory Management
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="../voucher/itemcreation.php">Create Item Master</a></li>
            <li><a className="dropdown-item" href="../voucher/ratechange.php">Rate Change Voucher</a></li>
            <li><a className="dropdown-item" href="../bulk_rate_changer/index.php">Bulk Rate Change Voucher</a></li>
            <li><a className="dropdown-item" href="../bulk_stock_adjust/index.php">Bulk Stock Adjustment</a></li>
            <li><a className="dropdown-item" href="../voucher/updatebarcode.php">Barcode Change Voucher</a></li>
            <li><a className="dropdown-item" href="../voucher/updatename.php">Name Change Voucher</a></li>
            <li><a className="dropdown-item" href="../stock_transfer/stocktranstosamegst.php">Stock Transfer [Same GSTIN]</a></li>
            <li><a className="dropdown-item" href="../stock_transfer/stocktranstoothergst.php">Stock Transfer [Other GSTIN]</a></li>
            <li><a className="dropdown-item" href="../stock_transfer/stocktransballygunge.php">Stock Transfer [Ballygunge]</a></li>
            <li><a className="dropdown-item" href="../stock_transfer/stocktransreturnothergst.php">Stock Transfer Return [Other GSTIN]</a></li>
            <li><a className="dropdown-item" href="../stock_transfer/stocktransferregister.php">Stock Transfer Register</a></li>
            <li><a className="dropdown-item" href="../stock_transfer/stockreturnregister.php">Stock Transfer Return Register</a></li>
            <li><a className="dropdown-item" href="../Reports/StockRegister.php">Stock Register (Current)</a></li>
            <li><a className="dropdown-item" href="../RodeoAPI/StockRegisterRodeo.php">Stock Register (Rodeo)</a></li>
            <li><a className="dropdown-item" href="../Reports/ItemLedger.php">Item Ledger</a></li>
            <li><a className="dropdown-item" href="../PhyStkTak/PhysicalStockTaking.php">Physical Stock Taking</a></li>
            <li><a className="dropdown-item" href="../stock_transfer2/stocktranstoothergst.php">Stock Transfer [OG-NSTK]</a></li>
            <li><a className="dropdown-item" href="../voucher/openingstockvchr.php">Opening Stock Entry</a></li>
            <li><a className="dropdown-item" href="../voucher/StockConsumptionVCHR.php">Stock Consumption Voucher</a></li>
            <li><a className="dropdown-item" href="../voucher/StockProductionVCHR.php">Stock Production Voucher</a></li>
            <li><a className="dropdown-item" href="../voucher/StockMissingVCHR.php">Stock Missing Entry</a></li>
            <li><a className="dropdown-item" href="../voucher/StockDamageVCHR.php">Stock Damage/Expiry Entry</a></li>
            <li><a className="dropdown-item" href="../BarcodePrint/BarcodePrint.php">Print Barcode (Last Purchase)</a></li>
            <li><a className="dropdown-item" href="../PriceLabelingGeneral/PriceLabelingGeneral.php">Print Price Labeling [General]</a></li>
            <li><a className="dropdown-item" href="../PriceBrandRange/PriceBrandRange.php">Print Price Brand [Brand Range]</a></li>
            </ul>
            </li>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Accounting
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="../accounting/vcepayment.php">Voucher Entry - Payment</a></li>
            <li><a className="dropdown-item" href="../accounting/vceReceipt.php">Voucher Entry - Recepit</a></li>
            <li><a className="dropdown-item" href="../accounting/vceContra.php">Voucher Entry - Contra</a></li>
            <li><a className="dropdown-item" href="../accounting/accLedger.php">Accounts Ledger</a></li>
            <li><a className="dropdown-item" href="../gst_returns/gstr_sales_b2c.php">GST Returns - Sales - B2C</a></li>
            <li><a className="dropdown-item" href="../gst_returns/gstr_sales_b2b.php">GST Returns - Sales - B2B</a></li>
            <li><a className="dropdown-item" href="../accounting/gstrPurchase.php">GST Returns - Purchase</a></li>

            </ul>
            </li>
            <li><hr className="dropdown-divider" /></li>
            
          
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Customer Management
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="../voucher/customercreation.php">Create New Customer</a></li>
            <li><a className="dropdown-item" href="../voucher/distcreation.php">Create New Supplier</a></li>
            
            <li><hr className="dropdown-divider" /></li>
            
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="../loginauth/logout.php">Logout</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  );
}

export default NavBar;