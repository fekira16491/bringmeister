import React from "react";
import styles from "../styles/Home.module.css";

//Loading spinner componenet
const LoadingSpinner = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}
        >
            <div
                className={styles.loadingspinner}
                data-testid="loading-spinner"
            ></div>
        </div>
    );
};

export default LoadingSpinner;
