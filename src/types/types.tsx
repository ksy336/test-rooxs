
export interface Company {
    name: string
}
export interface IUserData {
    id: number,
    name: any,
    address: any
    userName: string,
    company: Company,
}
export interface  IUsers {
    name: string,
    address: any
    company: string
}

export interface UserState {
    loading: boolean,
    error: null | string,
    users: IUserData[],
    isSorted: boolean,
    sortType: string,
    filteredList: [],
    filteredUsersByCompany: []
}
