/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link'
import React from 'react'

const DashNav = () => {
  return (
    <div className='dashBoardNav'>
    <div className='container-fluid'>
      <Link href="/" className='text-white fs-2 fw-bold text-left d-inline-block my-3'>appran.</Link>
    </div>
    </div>
  )
}

export default DashNav
