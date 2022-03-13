import React from 'react'
import logo from "../images/Logo.png"
import {TextField } from "@mui/material"

const Header = () => {
  return (
    <div>
        <nav className=" header navbar justify-content-between">
            <img src={logo} />
        <form class="form-inline">
            <TextField className='Search' id="outlined-basic" label="Search Item" variant="outlined" />
        </form>
        </nav>
        <hr></hr>
    </div>
  )
}

export default Header