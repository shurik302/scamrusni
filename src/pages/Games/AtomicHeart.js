import React from "react";
import GamesProto from "../../components/GamesProto";
import ah1 from "../../images/imageGame/AtomicHeart/1.jpg";
import Dyinglight2 from "../../images/imageGame/Dyinglight2.jpg";
import eldenring from "../../images/imageGame/eldenring.jpg";
import fh4 from "../../images/imageGame/fh4.jpg";
import fh5 from "../../images/imageGame/fh5.png";

function AtomicHeart() {
    return (
        <div>
            <GamesProto
                numberSlideFromMassive="0"
                Name="Atomic Heart"
                Price="249"
                DateGame="Сентябрь/Октябрь/Нояборь/Декабрь 2022"
                TextInfoGame="Добро пожаловать в Atomic Heart - РПГ-боевик в закрытом мире. В СССР будущего, в 1955 году главенствует наука. Мир на пороге величайшего события - через три дня станет возможным управление роботами силой мысли. Вы - агент П-3. Вам придется выяснить, что на самом деле стоит за утопической мечтой?
                История альтернативной реальности 1950х годов, берет свое начало с развития робототехники и высоких технологий в годы Второй Мировой Войны. Мир игры не так далек от тех идеалов, за которые борется человечество наших дней. Счастливое общество, верховенство науки, идеальные города, с залитыми солнцем зелеными парками и скверами, автоматизация быта, и стремление к звездам. Все это мы можем получить уже в ближайшем будущем. Но давайте посмотрим на изнанку идеального мира? Могло ли подобное уже произойти? И к чему это может привести?"
                ImageGameProtO={ah1}
                ImageGameProtS={Dyinglight2}
                ImageGameProtT={eldenring}
                ImageGameProtF={fh4}
                ImageGameProtFif={fh5}
                TextGameProtO="Atomic Heart со скидкой 15%"
                TextGameProtS="Dying light 2"
                TextGameProtT="Elden ring"
                TextGameProtF="Forza Horizon 4"
                TextGameProtFif="Forza Horizon 5"
                ProcM="Требуются 64-разрядные процессор и операционная система"
                OsM="Windows 10 (20H1 version or newer, 64-bit versions)"
                ProcRazvernM="AMD Ryzen 5 1600@ 3. GHz or Intel Core i5-4460 @ 3.1 GHz (AVX, AVX2 and SSE 4.2 support required)"
                OzuM=" 8 GB ОЗУ"
                VideoM="AMD Radeon R9 380 (4 GB) or NVIDIA GeForce GTX 960 (4 GB)"
                DirectXM="Версии 12"
                DiskM="90 GB"
                ProcR="Требуются 64-разрядные процессор и операционная система"
                OsR="Windows 10 (20H1 version or newer, 64-bit versions)"
                ProcRazvernR="AMD Ryzen 7 2700X @ 3.8 GHz or Intel Core i7-7700 @ 3.6 GHz (AVX, AVX2 and SSE 4.2 support required)"
                OzuR="16 GB ОЗУ"
                VideoR="AMD RX Vega 64 (8 GB) or NVIDIA GeForce GTX 1080 (8 GB)"
                DirectXR=" Версии 12"
                DiskR="90 GB"
            />
        </div>
    );
}

export default AtomicHeart;
