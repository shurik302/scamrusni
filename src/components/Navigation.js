import React from "react";
import minilogo from "../images/minilogo.png";
import "../stylesheets/Navigation.css";
import MobileMenu from "./MobileMenu";
import MobileMenuOnc from "../tech/Function";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="Navigation">
            <Link to="/" className="Logo">
                <img src={minilogo} />
            </Link>
            <div className="Dmenu">
                <ol className="Menu">
                    <li className="menuol">
                        <a className="menuolU">
                            Услуги<i class="fa-solid fa-caret-down"></i>
                        </a>
                        <ol className="menuolV">
                            <li>
                                <a>test</a>
                            </li>
                            <li>
                                <a>test</a>
                            </li>
                            <li>
                                <a>test</a>
                            </li>
                        </ol>
                    </li>
                    <li className="menuol">
                        <a className="menuolP">
                            Помощь<i class="fa-solid fa-caret-down"></i>
                        </a>
                        <ol className="menuolV">
                            <li>
                                <a>test</a>
                            </li>
                            <li>
                                <a>test</a>
                            </li>
                            <li>
                                <a>test</a>
                            </li>
                        </ol>
                    </li>
                    <li className="menuol">
                        <a className="menuolPo">
                            Пополнение<i class="fa-solid fa-caret-down"></i>
                        </a>
                        <ol className="menuolV">
                            <li>
                                <a>test</a>
                            </li>
                            <li>
                                <a>test</a>
                            </li>
                            <li>
                                <a>test</a>
                            </li>
                        </ol>
                    </li>
                    <li className="menuol">
                        <a className="menuolPod">
                            Поддержка<i class="fa-solid fa-caret-down"></i>
                        </a>
                        <ol className="menuolV">
                            <li>
                                <a>test</a>
                            </li>
                            <li>
                                <a>test</a>
                            </li>
                            <li>
                                <a>test</a>s
                            </li>
                        </ol>
                    </li>
                </ol>
                <div className="rightP">
                    <div className="Popoln">
                        <button href="../pages/Refill" className="PopolnB">
                            Пополнить счёт
                        </button>
                    </div>
                    <div className="Loginout">
                        <a>Войти</a>
                        <i class="fa-solid fa-right-to-bracket"></i>
                        <a>Зарегестрироваться</a>
                    </div>
                    <i onClick={MobileMenuOnc} class="fa-solid fa-bars"></i>
                </div>
            </div>
            <div className="ThisMobileMenu">
                <MobileMenu />
            </div>
        </div>
    );
}

export default Navigation;
