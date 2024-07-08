import React from 'react'
import DashNav from '../../component/DashNav'
import AddGlossary from '../../component/AddGlossary'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const AddGlossaryPage = () => {
  return (
    <>
     <DashNav/>
     <div className='container-fluid my-3'>
     <div className='float-end text-right'>
     <DropdownButton className='userBtn' id="dropdown-basic-button" title={<span><FontAwesomeIcon icon={faUser} /> Account</span>} variant="dark">
      {/* <Dropdown.Item onClick={handleShowEmailModal}>Change Email</Dropdown.Item>
      <Dropdown.Item onClick={handleShowPasswordModal}>Change Password</Dropdown.Item> */}
      <Dropdown.Item href="#/action-3"><FontAwesomeIcon icon={faRightFromBracket} /> Logout</Dropdown.Item>
    </DropdownButton>
          </div>
     </div>
     <div className='clearfix'></div>
      <AddGlossary/>

    </>
  )
}

export default AddGlossaryPage
