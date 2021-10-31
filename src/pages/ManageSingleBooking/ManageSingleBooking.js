import React from 'react';
import { Button } from 'react-bootstrap';

const ManageSingleBooking = (props) => {
    const { _id, order } = props.singleBooking;
    const handleDelete = props.handleDelete;
    return (
        <div>
            <div className="border border-3 my-4 p-3 bg-secondary">
                <img className="rounded shadow-lg img-fluid" src={order.img} alt="" />
                <h1 className="package-header">{order.name}</h1>
                <h4 className="text-info">Destinations: {order.destinations}</h4>
                <h5>Duration: {order.duration}</h5>
                <h3>Price: ${order.price} per person</h3>
                <Button onClick={() => handleDelete(_id)} variant="danger">Remove Booking</Button>
            </div>
        </div>
    );
};

export default ManageSingleBooking;