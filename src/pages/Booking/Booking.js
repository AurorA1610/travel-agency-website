import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './Booking.css';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const { packageId } = useParams(); 
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [packageDetails, setPackageDetails] = useState({});
    useEffect(() => {
        fetch(`https://chilling-castle-31521.herokuapp.com/packages/${packageId}`).then(res => res.json()).then(data => setPackageDetails(data));
    }, []);

    const onSubmit = data => {
        data.order = {
            name: packageDetails?.name,
            img: packageDetails?.img,
            price: packageDetails?.pricePerPerson,
            destinations: packageDetails?.destinations,
            duration: packageDetails?.duration
        };
        fetch('https://chilling-castle-31521.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            if(data.insertedId) {
                alert('Order processed successfully');
                reset();
            }
        })
    };

    return (
        <Row className="m-4 p-5">
            <h2>Welcome <span className="text-success">{user.displayName}</span></h2>
            <h6 className="pb-5">{user.email}</h6>
            <Col xs={12} md={8}>
                <h1 className="package-header mb-3">{ packageDetails?.name }</h1>
                <img className="rounded shadow-lg img-fluid" src={ packageDetails?.img } alt="" />
                <p className="my-5">{ packageDetails?.description }</p> 
                <h4>The package will cover</h4>
                <h4 className="text-danger">{ packageDetails?.destinations }</h4>
                <h5 className="my-5">Duration: { packageDetails?.duration }</h5>
                <h3>Price Per Person: ${ packageDetails?.pricePerPerson }</h3>
                <h5>Package Includes: { packageDetails?.included }</h5>
                <h5>Package Doesn't Include: { packageDetails?.notIncluded }</h5>
            </Col>

            <Col xs={12} md={4} className="border border-2 py-3 mt-4"  id="place-order-form">
            <div className="mt-4">
                <h1 className="mb-4 fw-bold">Place Order</h1>
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="place-order-form">
                        <label for="name">Name: </label>
                        <input className="w-75 ms-4" defaultValue={user.displayName} {...register("name")} />
                        <br /> <br />
                        <label for="email">Email: </label>
                        <input className="w-75 ms-4"  defaultValue={user.email} {...register("email", { required: true })} />
                        <br /> <br />
                        {errors.email && <span className="error">This field is required</span>}
                        <label for="address">Address: </label>
                        <input className="w-75 ms-4"  placeholder="Address" defaultValue="" {...register("address")} />
                        <br /> <br />
                        <label for="postcode">Post code: </label>
                        <input className="w-75 ms-4"  placeholder="Post Code" defaultValue="" {...register("postcode")} />
                        <br /> <br />
                        <label for="postcode">Travel Date: </label>
                        <input className="w-75 ms-4"  placeholder="Travel Date" defaultValue="" {...register("traveldate")} />
                        <br /> <br />
                        <label for="phone">Phone no.: </label>
                        <input className="w-75 ms-4"  placeholder="Phone number" defaultValue="" {...register("phone")} />
                        <br /> <br />
                    </div>
                    <input className="mx-auto px-4 py-2 bg-secondary text-light" type="submit" />
                </form>
            </div>
            </Col>
        </Row>
    );
};

export default Booking;