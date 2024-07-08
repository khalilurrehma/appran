"use client";

import { Dropdown, DropdownButton } from "react-bootstrap";
import DashNav from "../component/DashNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";
import ManageGlossary from "../component/ManageGlossary";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <DashNav />
      <div className="container-fluid my-3">
        <div className="float-end text-right">
          <DropdownButton
            className="userBtn"
            id="dropdown-basic-button"
            title={
              <span>
                <FontAwesomeIcon icon={faUser} /> Account
              </span>
            }
            variant="dark"
          >
            <Dropdown.Item href="#/action-3">
              <FontAwesomeIcon icon={faRightFromBracket} /> Logout
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div className="clearfix"></div>
      <div className="d-flex justify-content-center my-5">
        <div className="d-grid gap-2 col-md-5">
          <Link
            href="/add-glossary"
            className="btnStyles fs-6 fw-bold rounded-2 px-5 py-3 border-0 text-center text-white text-decoration-none"
          >
            Add Glossary
          </Link>
        </div>
      </div>
      <div className="container">
        <ManageGlossary />
      </div>
      <div className="dashBoardNav mt-3 text-center text-white fs-6 py-4 mt-5">
        <div className="container">Copyright © 2024 appran.com</div>
      </div>
    </>
  );
}
