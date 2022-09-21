import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import atomicheart from "../images/imageGame/AtomicHeart/1.jpg";
import battlefield4 from "../images/imageGame/battlefield4.jpeg";
import callofdutymw1 from "../images/imageGame/callofdutymw1.jpg";
import callofdutymw2 from "../images/imageGame/callofdutymw2.jpeg";
import Dyinglight2 from "../images/imageGame/Dyinglight2.jpg";
import eldenring from "../images/imageGame/eldenring.jpg";
import fh4 from "../images/imageGame/fh4.jpg";
import fh5 from "../images/imageGame/fh5.png";
import godofwar from "../images/imageGame/godofwar.jpeg";
import godofwarragn from "../images/imageGame/godofwarragn.jpg";
import gta5 from "../images/imageGame/gta5.jpg";
import Hogwarts from "../images/imageGame/Hogwarts.jpeg";
import metroexodus from "../images/imageGame/metroexodus.jpg";
import rainboxsixsiege from "../images/imageGame/rainboxsixsiege.jpg";
import sniperelite5 from "../images/imageGame/sniperelite5.jpg";
import spidermanremastered from "../images/imageGame/spidermanremastered.jpg";
import stalker2 from "../images/imageGame/stalker2.jpg";
import thelastofusremastered from "../images/imageGame/thelastofusremastered.jpg";

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
                <div className="Games">
                    <div className="bc">
                        <img src={atomicheart} />
                    </div>
                    <span>
                        Atomic heart
                        <br />
                        Доступна к предзаказу!
                    </span>
                    <Link to="/AtomicHeart">
                        Перейти <i class="fa-solid fa-chevron-right"></i>
                    </Link>
                    <div className="bcShadow"></div>
                </div>
                <a className="Games">
                    <div className="bc">
                        <img src={battlefield4} />
                    </div>
                    <span>Battldield 4</span>
                    <div className="bcShadow"></div>
                </a>
                <a className="Games">
                    <div className="bc">
                        <img src={callofdutymw1} />
                    </div>
                    <span>Call of duty Modern Warfare 1</span>
                    <div className="bcShadow"></div>
                </a>
                <a className="Games">
                    <div className="bc">
                        <img src={callofdutymw2} />
                    </div>
                    <span>
                        Call of duty Modern Warfare 2<br />
                        Доступна к предзаказу!
                    </span>
                    <Link to="/Callofdutymw2">
                        Перейти <i class="fa-solid fa-chevron-right"></i>
                    </Link>
                    <div className="bcShadow"></div>
                </a>
                <a className="Games">
                    <div className="bc">
                        <img src={Dyinglight2} />
                    </div>
                    <span>Dying light 2</span>
                    <div className="bcShadow"></div>
                </a>
                <a className="Games">
                    <div className="bc">
                        <img src={eldenring} />
                    </div>
                    <span>Elden ring</span>
                    <div className="bcShadow"></div>
                </a>
                <a className="Games">
                    <div className="bc">
                        <img src={fh4} />
                    </div>
                    <span>Forza horizon 4</span>
                    <div className="bcShadow"></div>
                </a>
                <a className="Games">
                    <div className="bc">
                        <img src={fh5} />
                    </div>
                    <span>Forza horizon 5</span>
                    <div className="bcShadow"></div>
                </a>
                <a className="Games">
                    <div className="bc">
                        <img src={godofwar} />
                    </div>
                    <span>God of War</span>
                    <div className="bcShadow"></div>
                </a>
                <a className="Games">
                    <div className="bc">
                        <img src={godofwarragn} />
                    </div>
                    <span>
                        God of War Ragnarock
                        <br />
                        Доступна к предзаказу!
                    </span>
                    <div className="bcShadow"></div>
                </a>
                <a className="Games">
                    <div className="bc">
                        <img src={gta5} />
                    </div>
                    <span>Gta 5</span>
                    <div className="bcShadow"></div>
                </a>
                <a className="Games">
                    <div className="bc">
                        <img src={Hogwarts} />
                    </div>
                    <span>
                        Hogwarts Legacy
                        <br />
                        Доступна к предзаказу!
                    </span>
                    <div className="bcShadow"></div>
                </a>
                <a className="Games">
                    <div className="bc">
                        <img src={metroexodus} />
                    </div>
                    <span>Metro exodus</span>
                    <div className="bcShadow"></div>
                </a>
                <a className="Games">
                    <div className="bc">
                        <img src={rainboxsixsiege} />
                    </div>
                    <span>Rainbow six siege</span>
                    <div className="bcShadow"></div>
                </a>
                <a className="Games">
                    <div className="bc">
                        <img src={sniperelite5} />
                    </div>
                    <span>Sniper elite 5</span>
                    <div className="bcShadow"></div>
                </a>
                <a className="Games">
                    <div className="bc">
                        <img src={spidermanremastered} />
                    </div>
                    <span>Spiderman remastered</span>
                    <div className="bcShadow"></div>
                </a>
                <a className="Games">
                    <div className="bc">
                        <img src={stalker2} />
                    </div>
                    <span>
                        Stalker 2
                        <br />
                        Доступна к предзаказу! Со своей, русской озвучкой!
                    </span>
                    <div className="bcShadow"></div>
                </a>
                <a className="Games">
                    <div className="bc">
                        <img src={atomicheart} />
                    </div>
                    <span>
                        Atomic heart
                        <br />
                        Доступна к предзаказу!
                    </span>
                    <div className="bcShadow"></div>
                </a>
                <a className="Games">
                    <div className="bc">
                        <img src={thelastofusremastered} />
                    </div>
                    <span>The last of us 1 remastered</span>
                    <div className="bcShadow"></div>
                </a>
            </Slider>
        );
    }
}
