import React from "react";
import "../stylesheets/GamesProto.css";
import SliderForGameProt from "../components/SliderForGameProt";
import minilogo from "../images/minilogo.png";
import Popularitymini from "../components/Popularitymini";

function GamesProto({
    numberSlideFromMassive,
    Name,
    Price,
    DateGame,
    TextInfoGame,
    ImageGameProtO,
    TextGameProtO,
    ImageGameProtS,
    TextGameProtS,
    ImageGameProtT,
    TextGameProtT,
    ImageGameProtF,
    TextGameProtF,
    ImageGameProtFif,
    TextGameProtFif,
    ProcM,
    OsM,
    ProcRazvernM,
    OzuM,
    VideoM,
    DirectXM,
    DiskM,
    ProcR,
    OsR,
    ProcRazvernR,
    OzuR,
    VideoR,
    DirectXR,
    DiskR,
}) {
    return (
        <div className="GamesProto">
            <div className="UpGame">
                <div className="SliderProt">
                    <SliderForGameProt number={numberSlideFromMassive} />
                </div>
                <div className="Info">
                    <span>{Name}</span>
                    <span>{Price} руб.</span>
                    <span>Выйдет : {DateGame}</span>
                    <a className="ButtonBuyGame">Купить</a>
                </div>
            </div>
            <div className="MediumGame">
                <div className="InfoGame">
                    <span>Описание {Name} :</span>
                    <span>{TextInfoGame}</span>
                </div>
                <div className="Predl">
                    <Popularitymini
                        image={ImageGameProtO}
                        text={TextGameProtO}
                    />
                    <Popularitymini
                        image={ImageGameProtS}
                        text={TextGameProtS}
                    />
                    <Popularitymini
                        image={ImageGameProtT}
                        text={TextGameProtT}
                    />
                    <Popularitymini
                        image={ImageGameProtF}
                        text={TextGameProtF}
                    />
                    <Popularitymini
                        image={ImageGameProtFif}
                        text={TextGameProtFif}
                    />
                </div>
            </div>
            <div className="DownGame">
                <div className="sisTreb">
                    <span className="TextSisTreb">Системные требования</span>
                    <hr />
                    <div className="treb">
                        <div className="Minsis">
                            <span>МИНИМАЛЬНЫЕ:</span>
                            <span>{ProcM}</span>
                            <span>
                                ОС: <span>{OsM}</span>
                            </span>
                            <span>
                                Процессор <span>{ProcRazvernM}</span>
                            </span>
                            <span>
                                Оперативная память: <span>{OzuM}</span>
                            </span>
                            <span>
                                Видеокарта <span>{VideoM}</span>
                            </span>
                            <span>
                                DirectX: <span>{DirectXM}</span>
                            </span>
                            <span>
                                Место на диске: <span>{DiskM}</span>
                            </span>
                        </div>
                        <div className="RecSis">
                            <span>РЕКОМЕНДОВАННЫЕ:</span>
                            <span>{ProcR}</span>
                            <span>
                                ОС: <span>{OsR}</span>
                            </span>
                            <span>
                                Процессор <span>{ProcRazvernR}</span>
                            </span>
                            <span>
                                Оперативная память: <span>{OzuR}</span>
                            </span>
                            <span>
                                Видеокарта <span>{VideoR}</span>
                            </span>
                            <span>
                                DirectX:<span>{DirectXR}</span>
                            </span>
                            <span>
                                Место на диске: <span>{DiskR}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GamesProto;
