import React from 'react';
import './Service.css';

const Service = (props) => {
    const { name, price, time, img } = props.service;
    return (
        <div className="single-service">
            <h3>{name}</h3>
            <h3>{price}</h3>
            <h4>{time}</h4>
            <img src={img} alt="Services" />
        </div>
    );
};

export default Service;