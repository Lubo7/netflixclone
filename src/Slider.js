import React from 'react';
import './Slider.css';
import Carousel from 'react-elastic-carousel';
import Card from './Card';

const breakPoints = [
    {width:1, itemsToShow:1},
    {width:500, itemsToShow:2},
    {width:768, itemsToShow:3},
    {width:1200, itemsToShow:4}
]


function Slider() {
    return (
        <div className="slider">
            <Carousel breakPoints = {breakPoints}>
                <Card className="card"/>
                <Card className="card"/>
                <Card className="card"/>
                <Card className="card"/>
                <Card className="card"/>
                <Card className="card"/>
                <Card className="card"/>
            </Carousel>
        </div>
    )
}

export default Slider
