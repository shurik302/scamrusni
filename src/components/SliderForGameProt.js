import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { targets } from "../tech/Collection";

import "../stylesheets/Slider.css";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidetoscroll: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 10000,
        };
        return (
            <Slider {...settings}>
                <div className="GamesSldie">
                    <img src={targets[this.props.number].firstim} />
                </div>
                <div className="GamesSldie">
                    <img src={targets[this.props.number].secim} />
                </div>
                <div className="GamesSldie">
                    <img src={targets[this.props.number].thirdim} />
                </div>
                <div className="GamesSldie">
                    <img src={targets[this.props.number].fourthim} />
                </div>
                <div className="GamesSldie">
                    <img src={targets[this.props.number].fifthim} />
                </div>
                <div className="GamesSldie">
                    <img src={targets[this.props.number].sixthim} />
                </div>
                <div className="GamesSldie">
                    <img src={targets[this.props.number].seventhim} />
                </div>
                <div className="GamesSldie">
                    <img src={targets[this.props.number].eighthim} />
                </div>
                <div className="GamesSldie">
                    <img src={targets[this.props.number].ninthim} />
                </div>
            </Slider>
        );
    }
}
