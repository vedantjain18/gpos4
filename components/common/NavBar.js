"use client";

import { useEffect } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function NavBar() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          GoRamu
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" href="../loginauth">
                Home
              </Link>
            </li>
            
            {/* Sales Management Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="salesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sales Management
              </a>
              <ul className="dropdown-menu" aria-labelledby="salesDropdown">
                <li>
                  <Link className="dropdown-item" href="../salesmanagement/salesentry">
                    SALES
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../salesmanagement/salesreturn">
                    SALES Return
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../salesmanagement/salesorder">
                    SALES Order
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../salesmanagement/salesquotation">
                    SALES Quotation
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="../registers/salesregister">
                    Sales Register
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../registers/salesreturnregister">
                    Sales Return Register
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../registers/salesorderregister">
                    Sales Order Register
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../registers/salesquotationregister">
                    Sales Quotation Register
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="../Reports/SalesRegister.php">
                    Cash Handover
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../Reports/SalesRegister.php">
                    Cash Handover Register
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../Reports/SalesRegister.php">
                    Day End Report
                  </Link>
                </li>
              </ul>
            </li>

            {/* Purchase Management Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="purchaseDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Purchase Management
              </a>
              <ul className="dropdown-menu" aria-labelledby="purchaseDropdown">
              <li>
                  <Link className="dropdown-item" href="../purchase_mgmt/index.php">
                    Purchase Invoice
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../purchase_mgmt/index.php">
                    Purchase Invoice Register
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../purchase_mgmt/index.php">
                    Purchase Returns
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../purchase_mgmt/index.php">
                    Purchase Returns Register
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../purchase_mgmt/index.php">
                    Purchase Challan
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../purchase_mgmt/index.php">
                    Purchase Challan Register
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../Reports/PurchaseRegister.php">
                    Purchase Order
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../purchase_mgmt/index.php">
                    Purchase Order Register
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="../purchase_mgmt/index.php">
                    Purchase Formula
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="../purchase_mgmt/index.php">
                    Create Distributor/Supplier
                  </Link>
                </li>
              </ul>
            </li>

            {/* Inventory Management Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="inventoryDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Inventory Management
              </a>
              <ul className="dropdown-menu" aria-labelledby="inventoryDropdown">
                <li>
                  <Link className="dropdown-item" href="../voucher/itemcreation.php">
                    Create/Edit Item Master
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../voucher/ratechange.php">
                    Rate Change Voucher
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../voucher/ratechange.php">
                    Bulk Rate Change Voucher
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../voucher/ratechange.php">
                    Stock Adjustment Voucher
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../voucher/ratechange.php">
                    Add Barcode
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="../voucher/ratechange.php">
                  Stock Transfer{/* Will Include Same GSTIN/Different GSTIN + Franchise Transfer */}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../voucher/ratechange.php">
                    Accept Stock Transfer
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../voucher/ratechange.php">
                    Stock Transfer Register
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="../voucher/ratechange.php">
                    Stock Register
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../voucher/ratechange.php">
                    Stock Replenishment
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../voucher/ratechange.php">
                    Item ledger
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="../voucher/ratechange.php">
                    Physical Stock Taking
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../voucher/ratechange.php">
                    Opening Stock Entry
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../voucher/ratechange.php">
                    Stock Consumption/Production Voucher
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../voucher/ratechange.php">
                    Stock Missing/Damage/Theft Voucher
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="../voucher/ratechange.php">
                  Print Barcode {/* Will Have 1. Last Purchase 2. Choose Bill/Challan/Transfers 3. Manual Selection (Sinlge/Brand Wise/Company Wise) */}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../voucher/ratechange.php">
                    Print Price Labels {/* Will Have 1. Last Purchase 2. Choose Bill/Challan/Transfers 3. Manual Selection (Sinlge/Brand Wise/Company Wise) */}
                  </Link>
                </li>
              </ul>
            </li>

            {/* Accounting Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="accountingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Accounting
              </a>
              <ul className="dropdown-menu" aria-labelledby="accountingDropdown">
                <li>
                  <Link className="dropdown-item" href="../accounting/vcepayment.php">
                    Create/Edit Account
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../accounting/vceReceipt.php">
                    Accounts Ledger
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../accounting/vceReceipt.php">
                    Voucher Entry - Payment/Receipt/Contra
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../accounting/vceReceipt.php">
                  Create/Edit Group Of Accounts
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../accounting/vceReceipt.php">
                    Mode Of Payment Settings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../accounting/vceReceipt.php">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../accounting/vceReceipt.php">
                    Profit & Loss Statement
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../accounting/vceReceipt.php">
                    GST Returns & Reports
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../accounting/vceReceipt.php">
                    Balance Sheet
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../accounting/vceReceipt.php">
                    Generate Authorization Token(s)
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../accounting/vceReceipt.php">
                    Accounts Ledger
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="accountingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Customer Management
              </a>
              <ul className="dropdown-menu" aria-labelledby="accountingDropdown">
                <li>
                  <Link className="dropdown-item" href="../accounting/vcepayment.php">
                    Create/Edit Customer
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../accounting/vceReceipt.php">
                    Settings - Send Promotions - SMS/Email
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../accounting/vceReceipt.php">
                    Settings - Send Transaction  - SMS/Email
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="accountingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Employee Management
              </a>
              <ul className="dropdown-menu" aria-labelledby="accountingDropdown">
                <li>
                  <Link className="dropdown-item" href="../accounting/vcepayment.php">
                    Create/Edit Employee
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../accounting/vceReceipt.php">
                    Record Attendance
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../accounting/vceReceipt.php">
                    View/Edit Attendance
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../accounting/vceReceipt.php">
                    Employee Salary Formula
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="accountingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Settings
              </a>
              <ul className="dropdown-menu" aria-labelledby="accountingDropdown">
                <li>
                  <Link className="dropdown-item" href="../accounting/vcepayment.php">
                    Import Data
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../accounting/vceReceipt.php">
                    Export Data
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../accounting/vceReceipt.php">
                    Edit Owner Details
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../accounting/vceReceipt.php">
                    Manage Business Master
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../accounting/vceReceipt.php">
                    Location Master
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../accounting/vceReceipt.php">
                    Export Data
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../accounting/vceReceipt.php">
                    Export Data
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
