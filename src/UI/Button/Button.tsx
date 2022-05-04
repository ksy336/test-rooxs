import React from "react";
import "./Button.scss";

const Button = (props: any) => {
    return (
        <button
            onClick={props.onClick}
            type={props.type || "button"}
            disabled={props.disabled}
            className={`button ${props.className} ${props.disabled && "disabled"}`}
        >{props.children}</button>
    )
}
export default Button;
