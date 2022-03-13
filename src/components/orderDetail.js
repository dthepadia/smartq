import React from 'react'
import { Card, CardBody, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import {TextField ,Autocomplete,Button} from "@mui/material"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const OrderDetail = () => {
  return (
    <div>
        <Row className="orderDetailRow">
        <Col sm="8">
            <h3>
            Event Details
            </h3>
            <Card>
            <CardBody>
                <Row className="eventDetailRow">
                    <Col sm="6">
                        <div>Name</div>
                        <TextField 
                        className="form-control"
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined" 
                        />
                    </Col>
                    <Col sm="6">
                    <div>Contact Number</div>
                    <TextField
                    className="form-control" 
                        id="outlined-basic" 
                        label="Contact Number" 
                        variant="outlined" 
                        />
                    </Col>
                </Row> 
                <Row className="eventDetailRow">
                    <Col sm="6">
                    <div>Event Name</div>
                        <TextField 
                        className="form-control"
                        id="outlined-basic" 
                        label="Event Name" 
                        variant="outlined" 
                        />
                    </Col>
                    <Col sm="6">
                    <div>Event Location</div>
                    <TextField 
                    className="form-control"
                        id="outlined-basic" 
                        label="Event Location" 
                        variant="outlined" 
                        />
                    </Col>
                </Row> 
                <Row className="eventDetailRow">
                    <Col sm="6">
                    <div>Event Name</div>
                        <TextField 
                        className="form-control"
                        id="outlined-basic" 
                        label="Event Date" 
                        variant="outlined" 
                        />
                    </Col>
                    <Col sm="6">
                    <div>Event Name</div>
                    <Autocomplete
                    className="form-control"
                    disablePortal
                    id="combo-box-demo"
                    options={[]}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Select Delvery Mode" />}
/>
                    </Col>
                </Row>       
            </CardBody>
            </Card>
        </Col>
        <Col sm="4">
            <h3>
            Select Payment Method
            </h3>
            <Card>
                <CardBody className="paymentCard">
                    <Card className="p-2 m-2">
                    <i className="fas fa-address-card"></i>
                        Net Banking
                    </Card>
                    <Card className="p-2 m-2">
                    <i className="fas fa-address-card"></i>
                        Net Banking
                    </Card>
                    <hr></hr>
                    <p>Total Amount :</p>
                    <button type="button" className=" paymentButton btn btn-secondary">Make Payment</button>
                    </CardBody>
            </Card>
        </Col>
        </Row>
        <Row className="orderDetailCartRow">
            <Col sm="8">
                <h3>
                    Cart Summary
                </h3>
                
                <Card>
                <CardBody className="paymentCard">
                <Row>edit</Row>
                <Row>
                <Col sm="8">
                <ul className="itemList list-unstyled">
                                {/* title of list */}
                                <li className="grayBottomBorder pt-0">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="order-top-heading">
                                            Items
                                        </h6>
                                        <h6 className="order-top-heading">
                                            quantity
                                        </h6>
                                        <h6 className="order-top-heading">
                                            Sub-Total
                                        </h6>
                                    </div>
                                </li>
                                {/* repeat item from here */}
                                <li>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <div>
                                            <span>choose Topping</span>
                                        </div>
                                    </div>
                                    <div>
                                    <h5 className="quantity-heading">12</h5>
                                    </div>
                                    <div>
                                    <h5 className="quantity-heading ">12</h5>
                                    </div>
                                </div>
                                </li>
                                
                </ul>
                </Col>
                </Row>
                </CardBody>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default OrderDetail