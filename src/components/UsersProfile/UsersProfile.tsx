import React from "react";
import SortUsers from "../UsersList/SortUsers/SortUsers";
import Button from "../../UI/Button/Button";
import Form from "./Form/Form";
import {useDispatch} from "react-redux";
import {changeFormValid} from "../../store/form-slice";
import "./UsersProfile.scss";

const UsersProfile = () => {
    const dispatch = useDispatch();
    const editHandler = () => {
        dispatch(changeFormValid(true));
    }
    return (
        <>
            <div className="wrapper main__wrapper">
                <SortUsers/>
                <section className="profile__content">
                    <div className="user__profile">
                        <h3 className="user-text">Профиль пользователя</h3>
                        <div className="buttons-profile">
                            <Button className="btn__edit" onClick={editHandler}>Редактировать</Button>
                        </div>
                    </div>
                    <article className="profile-form">
                        <Form />
                    </article>
                </section>
            </div>

        </>
    )
}
export default UsersProfile;