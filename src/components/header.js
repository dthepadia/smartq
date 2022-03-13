import React from 'react'
import logo from "../images/Logo.png"
import {TextField } from "@mui/material"
import { Card, CardBody,Input, Row } from 'reactstrap'

const Header = () => {
  return (
    <div>
        <Card className="card">
          <CardBody>
        <nav className=" header navbar justify-content-between">
            <img src={logo} />
        <form class="form-inline">
        <div className="filter-section">
            <Input type="text" placeholder="Search Item"/>
          </div>
        </form>
        </nav>
        </CardBody>
        </Card>
        
    </div>
  )
}

export default Header