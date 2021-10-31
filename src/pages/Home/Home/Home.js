import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import TourTypes from '../TourTypes/TourTypes';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <Packages></Packages>
            <TourTypes></TourTypes>
        </div>
    );
};

export default Home;