import {getErrorStatus, getUsers, loadUsers, sortUsers, getSorting} from "./user-slice";

const fetchUserData = () => {
    return async(dispatch: any) => {

        const fetchData = async() => {
            dispatch(loadUsers(true))
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            console.log(response);
            if (!response.ok) {
                throw new Error(" Something went wrong!");
            }
            return await response.json();
        }
        try {
            const list = await fetchData();
            console.log(list);
            dispatch(sortUsers(false));
            dispatch(getSorting("unsorted"));
            dispatch(getUsers(list));
        } catch(error) {
            dispatch(getErrorStatus(error))
        }
        dispatch(loadUsers(false));
    }
}
export default fetchUserData;