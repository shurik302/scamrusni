import React from "react";
import "../stylesheets/Popularitymini.css";
import { Predl } from "../tech/Collection";

function Popularitymini({ image, text }) {
    return (
        <div className="Popularitymini">
            <div className="BlockImage">
                <img src={image} />
            </div>
            <div className="BlockText">{text}</div>
        </div>
    );
}

export default Popularitymini;
