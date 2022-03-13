import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardBody, CardHeader } from 'reactstrap';
import "./cart.css";

const Cart = ()=> {
    const cartItems = useSelector((state) => {

    });
    return (
        <div>
            <Card className="cart">
                <CardHeader className="cart-header">
                    Cart Summary
                </CardHeader>
                <CardBody className="cart-body">

                </CardBody>
            </Card>
        </div>
    )
}
export default Cart;