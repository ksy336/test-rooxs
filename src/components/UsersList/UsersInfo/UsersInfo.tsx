import React from "react";
import User from "./User";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {IUserData} from "../../../types/types";

const UsersInfo = () => {
    let usersWithSortedUsers;
    const usersInfo = useSelector((state: RootState) => state.users.users);
    const sortedUsersByCity = useSelector((state: RootState) => state.users.filteredList);
    const sortedByCompany = useSelector((state: RootState) => state.users.filteredUsersByCompany);
    const isSorted = useSelector((state: RootState) => state.users.isSorted);
    const sortType = useSelector((state: RootState) => state.users.sortType);
    console.log(sortType);
    if(sortType === "unsorted") {
        usersWithSortedUsers = usersInfo;
        console.log(usersWithSortedUsers)
    } else if (sortType === "city") {
        usersWithSortedUsers = sortedUsersByCity;
        console.log(usersWithSortedUsers)
    } else if (sortType === "company") {
        usersWithSortedUsers = sortedByCompany;
        console.log(usersWithSortedUsers)
    }

    return (
        <>
            {usersWithSortedUsers.map((user: IUserData) => {
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