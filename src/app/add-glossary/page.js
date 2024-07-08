"use client";

import { Dropdown, DropdownButton } from "react-bootstrap";
import DashNav from "../component/DashNav";
import AddGlossary from "../component/AddGlossary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";

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
      <AddGlossary />
    </>
  );
}
