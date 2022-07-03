import React from "react";
import Spinner from "react-bootstrap/esm/Spinner";

function Loader() {

    return(
        <Spinner className="spinner" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}

export { Loader }