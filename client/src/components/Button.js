import React from "react";
import "./style.css"

function Buttons(props) {
    return(
        <div>
            <button type="submit" className="btn mr-2" onClick={props.detailsFunction}>{props.detailsButton}</button>
            <button type="submit" className="btn" onClick={props.saveFunction}>{props.saveButton}</button>
        </div>
    )
}

export default Buttons;