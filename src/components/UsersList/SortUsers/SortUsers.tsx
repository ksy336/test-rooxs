import React from "react";
import "./SortUsers.scss";
import Button from "../../../UI/Button/Button";

const SortUsers = () => {
   return (
       <aside className="sort">
           <div className="sort__buttons">
               <h3 className="sort-text">Сортировка</h3>
               <div className="buttons">
                   <Button className="btn__city">по городу</Button>
                   <Button className="btn__company">по компании</Button>
               </div>
           </div>
       </aside>
   )
}
export default SortUsers;