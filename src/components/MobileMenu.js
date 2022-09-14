import React from "react";
import "../stylesheets/MobileMenu.css";
import {
    menuolMiniO,
    menuolMiniS,
    menuolMiniT,
    menuolMiniF,
} from "../tech/Function";

function MobileMenu() {
    return (
        <div className="MobileMenu">
            <div className="MenUm">
                <ol className="MenuOLMiniA">
                    <li className="menuolMiniO">
                        <a
                            className="menuolUMini menuolUMiniO"
                            onClick={menuolMiniO}
                        >
                            Услуги
                            <i class="fa-solid fa-caret-down fa-caret-downO"></i>
                        </a>
                        <ol className="menuolVMini menuolVMiniO">
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
                    <li className="menuolMiniS">
                        <a
                            className="menuolPMini menuolPodMiniS"
                            onClick={menuolMiniS}
                        >
                            Помощь
                            <i class="fa-solid fa-caret-down fa-caret-downS"></i>
                        </a>
                        <ol className="menuolVMini menuolVMiniS">
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
                    <li className="menuolMiniT">
                        <a
                            className="menuolPoMini menuolPodMiniT"
                            onClick={menuolMiniT}
                        >
                            Пополнение
                            <i class="fa-solid fa-caret-down fa-caret-downT"></i>
                        </a>
                        <ol className="menuolVMini menuolVMiniT">
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
                    <li className="menuolMiniF">
                        <a
                            className="menuolPodMini menuolPodMiniF"
                            onClick={menuolMiniF}
                        >
                            Поддержка
                            <i class="fa-solid fa-caret-down fa-caret-downF"></i>
                        </a>
                        <ol className="menuolVMini menuolVMiniF">
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
                        <hr className="predhrsocialnet" />
                        <ol className="socialnet">
                            <i class="fa-brands fa-telegram"></i>
                            <i class="fa-solid fa-envelope"></i>
                            <i class="fa-solid fa-phone"></i>
                        </ol>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default MobileMenu;
