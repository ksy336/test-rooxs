import React from "react";
import {IUsers} from "../../../types/types";
import "./User.scss";

const User = (props: IUsers) => {
    return (
        <div className="users-info">
            <div className="user-item">
                <div className="item name">ФИО: <span className="user-text">{props.name}</span></div>
                <div className="item city">город:<span className="user-text">{props.address}</span></div>
                <div className="item company">компания:<span className="user-text">{props.company}</span></div>
            </div>
        </div>
    )
}
export default User;