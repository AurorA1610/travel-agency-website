import React from 'react';
import { Row, Spinner } from 'react-bootstrap';
import usePackages from '../../../hooks/usePackages';
import SinglePackage from '../SinglePackage/SinglePackage';
import './Packages.css';

const Packages = () => {
    const [packages, setPackages] = usePackages([]);
    return (
        <div>
            <section id="packages">
                <h1 className="mt-5 mb-2 packages-heading">" Perfect Holiday Packages "</h1>
                {
                    packages.length === 0 ? <Spinner animation="border" variant="secondary" /> :
                    <Row sm={1} md={2} className="py-3 px-md-5 mx-md-5 g-5">
                        {
                            packages.map(singlePackage => <SinglePackage
                                                        key={singlePackage._id} 
                                                        singlePackage={singlePackage}
                                                    ></SinglePackage>)
                        }
                    </Row>
                }
            </section>
        </div>
    );
};

export default Packages;