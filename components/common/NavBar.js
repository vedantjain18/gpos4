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
                  <Link className="dropdown-item" href="../sales_page">
                    SALE-SCAN POS
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../SalesReturn/SalesReturn.php">
                    Sales Return
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../Reports/SalesRegister.php">
                    Sales Register
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
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
                  <Link className="dropdown-item" href="../Reports/PurchaseRegister.php">
                    Purchase Register (All)
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
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
                    Create Item Master
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../voucher/ratechange.php">
                    Rate Change Voucher
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
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
                    Voucher Entry - Payment
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="../accounting/vceReceipt.php">
                    Voucher Entry - Receipt
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
