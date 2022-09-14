import React from "react";
import "../stylesheets/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="upFot">
                <div className="olUpFot">
                    <ol className="MenuF">
                        <div>
                            <li className="menuolF">
                                <a className="menuolUF menuolFot">Услуги</a>
                                <ol className="menuolVF menuolVN">
                                    <li>
                                        <a>Купить</a>
                                    </li>
                                    <li>
                                        <a>Продать</a>
                                    </li>
                                    <li>
                                        <a>Обменять</a>
                                    </li>
                                </ol>
                            </li>
                            <li className="menuolF">
                                <a className="menuolPF menuolFot">Помощь</a>
                                <ol className="menuolVF menuolVN">
                                    <li>
                                        <a>Вопросы</a>
                                    </li>
                                    <li>
                                        <a>Горячая линия</a>
                                    </li>
                                    <li>
                                        <a>У меня проблема ...</a>
                                    </li>
                                </ol>
                            </li>
                        </div>
                        <div>
                            <li className="menuolF ">
                                <a className="menuolPoF menuolFot">
                                    Пополнение
                                </a>
                                <ol className="menuolVF menuolVN">
                                    <li>
                                        <a>Карточка</a>
                                    </li>
                                    <li>
                                        <a>Криптовалюта</a>
                                    </li>
                                    <li>
                                        <a>Другие способы</a>
                                    </li>
                                </ol>
                            </li>
                            <li className="menuolF ">
                                <a className="menuolPodF menuolFot">
                                    Поддержка
                                </a>
                                <ol className="menuolVF menuolVN">
                                    <li>
                                        <a>Телеграмм</a>
                                    </li>
                                    <li>
                                        <a>Связаться с нами</a>
                                    </li>
                                    <li>
                                        <a>Электронная почта</a>
                                    </li>
                                </ol>
                            </li>
                        </div>
                    </ol>
                </div>
            </div>
            <hr className="hrFot" />
            <div className="downFot">
                <div>
                    <span>Copyright © 2022 Easy transfer</span>
                </div>
                <div className="socnetfot">
                    <i class="fa-brands fa-telegram"></i>
                    <i class="fa-solid fa-envelope"></i>
                    <i class="fa-solid fa-phone"></i>
                </div>
            </div>
        </div>
    );
}

export default Footer;
