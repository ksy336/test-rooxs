import React from "react";
import "./Spinner.scss";

const LoadingSpinner = () => {
    return (
    <div className="spinner-container">
        <div className="spinner-content">
            <h1 className="loading-sign">Loading...</h1>
            <div className="loading-spinner"/>
        </div>
    </div>
    )
}
export default LoadingSpinner;