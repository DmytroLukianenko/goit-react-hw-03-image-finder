import React, { Component } from "react";
import Loader from "react-loader-spinner";

export default class LoaderSpinner extends Component {
    render() {
        return (
            <Loader
                type="Puff"
                color="#3f51b5"
                height={100}
                width={100}
                style={{ margin: 'auto' }}
            />
        );
    }
}