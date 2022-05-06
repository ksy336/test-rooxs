import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import Button from "../../../UI/Button/Button";
import {FormState} from "../../../types/types";
import {sendFirstName, sendUserName, sendEmail, sendStreet, sendCity, sendZipCode, sendPhone, sendWebsite, sendComment} from "../../../store/form-slice";
import "./Form.scss";

const Form = () => {
    const dispatch = useDispatch();
    const {isFormValid: formIsValid, firstName, userName, email, street, city, zipCode, phone, website, comment} = useSelector((state: RootState) => state.form);
    const filteredUsers = useSelector((state: RootState) => state.users.userProfile);
    const {
        register,
        formState: {errors},
        reset,
        handleSubmit} = useForm<FormState>({mode: 'onChange'});

    const submitHandler = () => {
        reset();
        const formData = {
            firstName,
            userName,
            email,
            street,
            city,
            zipCode,
            phone,
            website,
            comment
        }
        console.log(JSON.stringify(formData));
    }

    return (
        <React.Fragment>
        <form
            className="form-profile"
            onSubmit={handleSubmit(submitHandler)}
        >
            <div className="form-content">
                <label htmlFor="name">
                    Name
                    <input
                        className={`${errors?.firstName ? "error" : ""}`}
                        type="text"
                        id="name"
                        placeholder={filteredUsers[0].name}
                        disabled={!formIsValid}
                        {...register("firstName", {
                            onChange: (e: any) => {dispatch(sendFirstName(e.target.value))},
                            required: "Name is required",
                            minLength: {
                                value: 3,
                                message: "Minimum 3 symbols"
                            },
                        })}
                    />
                </label>
                {errors?.firstName && (<p className="text-invalid">{errors?.firstName.message || "Error"}</p>)}
                <label htmlFor="user">
                    User name
                    <input
                        type="text"
                        id="user"
                        placeholder={filteredUsers[0].username}
                        className={`${errors?.userName ? "error" : ""}`}
                        disabled={!formIsValid}
                        {...register("userName", {
                            onChange:(e) => {dispatch(sendUserName(e.target.value))},
                            required: "User name is required"
                        })}
                    />
                </label>
                {errors?.userName && (<p className="text-invalid">{`${errors?.userName.message || "Error"}`}</p>)}
                <label htmlFor="email">
                    E-mail
                    <input
                        className={`${errors?.email ? "error" : ""}`}
                        type="email"
                        id="email"
                        placeholder={filteredUsers[0].email}
                        disabled={!formIsValid}
                        {...register("email", {
                            onChange: (e) => {dispatch(sendEmail(e.target.value))},
                            required: "E-mail is required"
                        })}
                    />
                </label>
                {errors?.email && (<p className="text-invalid">{`${errors?.email.message || "Error"}`}</p>)}
                <label htmlFor="street">
                    Street
                    <input
                        className={`${errors?.street ? "error" : ""}`}
                        type="text"
                        id="street"
                        placeholder={filteredUsers[0].address.street}
                        disabled={!formIsValid}
                        {...register("street", {
                            onChange: (e) => {dispatch(sendStreet(e.target.value))},
                            required: "Street is required"
                        })}
                    />
                </label>
                {errors?.street && (<p className="text-invalid">{`${errors?.street.message || "Error"}`}</p>)}
                <label htmlFor="city">
                    City
                    <input
                        className={`${errors?.city ? "error" : ""}`}
                        type="text"
                        id="city"
                        placeholder={filteredUsers[0].address.city}
                        disabled={!formIsValid}
                        {...register("city", {
                            onChange: (e) => {dispatch(sendCity(e.target.value))},
                            required: "City is required"
                        })}
                    />
                </label>
                {errors?.city && (<p className="text-invalid">{`${errors?.city.message || "Error"}`}</p>)}
                <label htmlFor="code">
                    Zip code
                    <input
                        className={`${errors?.zipCode ? "error" : ""}`}
                        type="number"
                        id="code"
                        placeholder={filteredUsers[0].address.zipcode}
                        disabled={!formIsValid}
                        {...register("zipCode", {
                            onChange: (e) => {dispatch(sendZipCode(e.target.value))},
                            required: "Zip code is required"
                        })}
                    />
                </label>
                {errors?.zipCode && (<p className="text-invalid">{`${errors?.zipCode.message || "Error"}`}</p>)}
                <label htmlFor="phone">
                    Phone
                    <input
                        className={`${errors?.phone ? "error" : ""}`}
                        type="number"
                        id="phone"
                        placeholder={filteredUsers[0].phone}
                        disabled={!formIsValid}
                        {...register("phone", {
                            onChange: (e) => {dispatch(sendPhone(e.target.value))},
                            required: "Phone is required",
                            minLength: {
                                value: 6,
                                message: "Minimum 6 symbols"
                            }
                        })}
                    />
                </label>
                {errors?.phone && (<p className="text-invalid">{`${errors?.phone.message || "Error"}`}</p>)}
                <label htmlFor="website">
                    Website
                    <input
                        className={`${errors?.website ? "error" : ""}`}
                        type="text"
                        id="website"
                        placeholder={filteredUsers[0].website}
                        disabled={!formIsValid}
                        {...register("website", {
                            onChange: (e) => {dispatch(sendWebsite(e.target.value))},
                            required: "Website is required"
                        })}
                    />
                </label>
                {errors?.website && (<p className="text-invalid">{`${errors?.website.message || "Error"}`}</p>)}
                <label htmlFor="comment">
                    Comment
                    <textarea
                        id="comment"
                        disabled={!formIsValid}
                        {...register("comment", {
                            onChange: (e) => {dispatch(sendComment(e.target.value))},
                            required: false
                        })}
                    />
                </label>
            </div>
            <div className="button-send">
                <Button type="submit" className={`${!formIsValid ? "btn-submit disabled" : "btn-submit"}`} disabled={!formIsValid}>Отправить</Button>
            </div>
            </form>
        </React.Fragment>
    )
}
export default Form;