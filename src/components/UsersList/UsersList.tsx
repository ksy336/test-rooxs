import React from "react";
import SortUsers from "./SortUsers/SortUsers";
import UsersInfo from "./UsersInfo/UsersInfo";
import "./UsersList.scss";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import LoadingSpinner from "../../UI/Spinner/LoadingSpinner";

const UsersList = () => {
    const loading = useSelector((state: RootState) => state.users.loading);
    return (
        <>
            {loading && <LoadingSpinner />}
            {!loading && <main className="main">
                <div className="wrapper main__wrapper">
                    <SortUsers/>
                    <section className="main__content">
                        <h3 className="main__text">Список пользователей</h3>
                        <UsersInfo/>
                    </section>
                </div>
            </main>
            }
        </>
    )
}
export default UsersList;