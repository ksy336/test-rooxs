import React from "react";
import SortUsers from "./SortUsers/SortUsers";
import "./UsersList.scss";

export interface IUser {
  name: string;
  city: string;
  company: string;
}

const UsersList = () => {
    return (
        <>
            <main className="main">
                <div className="wrapper main__wrapper">
                    <SortUsers />
                    <section className="main__content">
                        <h3 className="main__text">Список пользователей</h3>
                        <div className="users-info layout-2-column">

                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
export default UsersList;