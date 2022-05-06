
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
    address: any,
    company: string,
    id: number
}

export interface UserState {
    loading: boolean,
    error: null | string,
    users: IUserData[],
    sortType: string,
    filteredList: [],
    filteredUsersByCompany: [],
    userProfile: []
}
export interface FormState {
    isFormValid: boolean,
    firstName: string,
    userName: string,
    email: string,
    street: string,
    city: string,
    zipCode: number | string,
    phone: number | string,
    website: string,
    comment?: string
}