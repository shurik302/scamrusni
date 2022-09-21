import React from "react";
import "../stylesheets/Home.css";
import Slider from "../components/SliderMain";
import Popularitymini from "../components/Popularitymini";
import battlefield4 from "../images/imageGame/battlefield4.jpeg";
import atomicheart from "../images/imageGame/AtomicHeart/1.jpg";
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

function Home() {
    return (
        <div className="Home">
            <div className="UpHome">
                <div className="Cataloge">
                    Каталог товаров :
                    <ol className="HomeCataloge">
                        <li>
                            <a>Battlefield</a>
                        </li>
                        <li>
                            <a>Аккаунты</a>
                        </li>
                        <li>
                            <a>Потом придумаем</a>
                        </li>
                        <li>
                            <a>Потом придумаем</a>
                        </li>
                        <li>
                            <a>Потом придумаем</a>
                        </li>
                        <li>
                            <a>Потом придумаем</a>
                        </li>
                        <li>
                            <a>Потом придумаем и дополнить можно</a>
                        </li>
                    </ol>
                </div>
                <div className="SliderMain">
                    <Slider />
                </div>
                <div className="Popularity">
                    <Popularitymini
                        image={battlefield4}
                        text="Battlefield 4 premium со скидкой 10%"
                    />
                    <Popularitymini
                        image={atomicheart}
                        text="Atomic heart предзакажи сейчас!"
                    />
                    <Popularitymini
                        image={Hogwarts}
                        text="Hogwarts legacy скоро выходит. Успей предзаказать!"
                    />
                    <Popularitymini
                        image={sniperelite5}
                        text="Snipere lite 5 со скидкой 14%"
                    />
                    <Popularitymini
                        image={stalker2}
                        text="Stalker 2 с русской озвучкой от нашей компании!"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
