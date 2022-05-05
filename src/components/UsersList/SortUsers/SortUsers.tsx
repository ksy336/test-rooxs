import React from "react";
import Button from "../../../UI/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {sortUsers, filterList, filterUsersByCompany, getSorting} from "../../../store/user-slice";
import "./SortUsers.scss";

const SortUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.users.users);

    const sortByCityHandler = () => {
        dispatch(sortUsers(true));
        dispatch(getSorting("city"));
        const reversedCities = [...users].sort((a: any, b: any) => {
            return a.address.city.localeCompare(b.address.city)
        })
        console.log(reversedCities)
        dispatch(filterList(reversedCities))
    }
    const sortByCompanyHandler = () => {
        dispatch(sortUsers(true));
        dispatch(getSorting("company"))
        const filteredUsersByCompany = [...users].sort((a: any, b: any) => {
            return a.company.name.localeCompare(b.company.name);
        });
        console.log(filteredUsersByCompany)
        dispatch(filterUsersByCompany(filteredUsersByCompany));
    }

   return (
       <aside className="sort">
           <div className="sort__buttons">
               <h3 className="sort-text">Сортировка</h3>
               <div className="buttons">
                   <Button className="btn__city" onClick={sortByCityHandler}>по городу</Button>
                   <Button className="btn__company" onClick={sortByCompanyHandler}>по компании</Button>
               </div>
           </div>
       </aside>
   )
}
export default SortUsers;