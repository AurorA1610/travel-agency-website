import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ManageSingleBooking from '../ManageSingleBooking/ManageSingleBooking';

const ManageBookings = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch(`https://chilling-castle-31521.herokuapp.com/allbookings`)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            });
    }, []);
    // Delete a booking
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure if you want to cancel this booking?");
        if(proceed) {
            fetch(`https://chilling-castle-31521.herokuapp.com/allbookings/${id}`, {
            method: 'DELETE'
        }).then(res => res.json()).then(data => {
            if(data.deletedCount > 0) {
                alert('deleted successfully');
                const remainingBookings = bookings.filter(booking => booking._id !== id);
                setBookings(remainingBookings); 
            }
        });
        }
    };
    return (
        <section>
                <h1 className="mt-5 mb-2 packages-heading">" Manage All Bookings "</h1>
                {
                    bookings.length === 0 ? <h4 className="text-danger my-5 py-5">You Have Not Booked Any Package Yet ...</h4> :
                    <Row sm={1} md={1} className="py-3 px-md-5 mx-md-5 g-5">
                        {
                            bookings.map(singleBooking => <ManageSingleBooking
                                                        key={singleBooking._id} 
                                                        singleBooking={singleBooking}
                                                        handleDelete={handleDelete}
                                                    ></ManageSingleBooking>)
                        }
                    </Row>
                }
        </section>
    );
};

export default ManageBookings;