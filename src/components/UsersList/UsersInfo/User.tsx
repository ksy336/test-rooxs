import React from "react";
import {IUserData, IUsers} from "../../../types/types";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {getUserProfile} from "../../../store/user-slice";
import "./User.scss";

const User = (props: IUsers) => {
    const dispatch = useDispatch();
    const allUsers = useSelector((state: RootState) => state.users.users);

    const {name, address, company, id} = props;
    const filteredUsers = allUsers.filter((user: IUserData) => {
        return user.id === id;
    });
    const profileClickHandler = () => {
        dispatch(getUserProfile(filteredUsers));
    }
    return (
        <>
        <div className="users-info layout-2-column">
            <div className="user-item">
                <div className="item name">ФИО: <span className="user-text">{name}</span></div>
                <div className="item city">город:<span className="user-text">{address}</span></div>
                <div className="item company">компания:<span className="user-text">{company}</span></div>
            </div>
            <div className="details-info">
               <Link className="details-link" to="/profile" onClick={profileClickHandler}>Подробнее</Link>
            </div>
        </div>

        </>
    )
}
export default User;