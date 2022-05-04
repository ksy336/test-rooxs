import React from "react";
import User from "./User";
import { useSelector} from "react-redux";
import {RootState} from "../../../store";
import {IUserData} from "../../../types/types";

const UsersInfo = () => {
    const usersInfo = useSelector((state: RootState) => state.users.users);
    return (
        <>
                {usersInfo.map((user: IUserData) => {
                   return  <User
                       key={user.id}
                       name={user.name}
                       address={user.address.city}
                       company={user.company.name}
                   />
                })
                }
        </>
    )
}
export default UsersInfo;