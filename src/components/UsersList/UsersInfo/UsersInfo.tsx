import React from "react";
import User from "./User";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {IUserData} from "../../../types/types";

const UsersInfo = () => {
    const usersInfo = useSelector((state: RootState) => state.users.users);
    const sortedUsersByCity = useSelector((state: RootState) => state.users.filteredList);
    const sortedByCompany = useSelector((state: RootState) => state.users.filteredUsersByCompany);
    const sortType = useSelector((state: RootState) => state.users.sortType);
    let usersWithSortedUsers;
    if(sortType === "unsorted") {
        usersWithSortedUsers = usersInfo;
    } else if (sortType === "city") {
        usersWithSortedUsers = sortedUsersByCity;
    } else if (sortType === "company") {
        usersWithSortedUsers = sortedByCompany;
    }

    return (
        <>
            {usersWithSortedUsers.map((user: IUserData) => {
                return  <User
                    key={user.id}
                    name={user.name}
                    address={user.address.city}
                    company={user.company.name}
                    id={user.id}
                />
            })
            }
        </>
    )
}
export default UsersInfo;