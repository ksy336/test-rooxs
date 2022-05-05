import React from "react";
import {IUsers} from "../../../types/types";
import "./User.scss";
import {Link} from "react-router-dom";

const User = (props: IUsers) => {
    return (
        <>
        <div className="users-info layout-2-column">
            <div className="user-item">
                <div className="item name">ФИО: <span className="user-text">{props.name}</span></div>
                <div className="item city">город:<span className="user-text">{props.address}</span></div>
                <div className="item company">компания:<span className="user-text">{props.company}</span></div>
            </div>
            <div className="details-info">
               <Link className="details-link" to="/profile">Подробнее</Link>
            </div>
        </div>

        </>
    )
}
export default User;