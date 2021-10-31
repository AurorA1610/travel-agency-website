import React from 'react';
import { useForm } from 'react-hook-form';

const AddPackage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch('https://chilling-castle-31521.herokuapp.com/packages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(data => {
            if(data.insertedId) {
                alert('New package added successfully');
                reset();
            }
        })
    };

    return (
        <div>
            <h2>Add a new package</h2>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label for="name">Name of the package:  </label> <br />
                        <input className="w-75 ms-4" {...register("name", { required: true })} />
                        <br /> <br />

                        <label for="img">Image (URL) of the package:  </label> <br />
                        <input className="w-75 ms-4" {...register("img", { required: true })} />
                        <br /> <br />

                        <label for="description">Description of the package:  </label> <br />
                        <input className="w-75 ms-4" {...register("description", { required: true })} />
                        <br /> <br />

                        <label for="pricePerPerson">Price (per person) of the package:  </label> <br />
                        <input className="w-75 ms-4" {...register("pricePerPerson", { required: true })} />
                        <br /> <br />

                        <label for="duration">Duration of the package:  </label> <br />
                        <input className="w-75 ms-4" {...register("duration", { required: true })} />
                        <br /> <br />
                        
                        <label for="included">Services included in the package:  </label> <br />
                        <input className="w-75 ms-4" {...register("included", { required: true })} />
                        <br /> <br />

                        <label for="notIncluded">Services not included in the package:  </label> <br />
                        <input className="w-75 ms-4" {...register("notIncluded", { required: true })} />
                        <br /> <br />

                        <label for="destinations">Spots covered in the package:  </label> <br />
                        <input className="w-75 ms-4" {...register("destinations", { required: true })} />
                        <br /> <br />
                       
                    </div>
                    <input className="mx-auto px-4 py-2 bg-secondary text-light" type="submit" />
                </form>
        </div>
    );
};

export default AddPackage;