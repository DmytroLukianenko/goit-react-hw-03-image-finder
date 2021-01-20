import React, { Component } from 'react'

import PropTypes from "prop-types"

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener("keydown", this.handelModalEscapeKey);
        window.addEventListener("click", this.handleCloseClickOverlay);
    }
    componentDidUpdate() {
        window.removeEventListener("keydown", this.handelModalEscapeKey);
        window.removeEventListener("click", this.handleCloseClickOverlay);
    }

    handelModalEscapeKey = (e) => {
        if (e.code === "Escape") {
            this.props.onClose();
        }
    };

    closeModalOnOverlayClick = () => {
        this.props.onClose();
    };

    render() {
        const { largeImageUrl } = this.props;
        return (
            <div
                className="Overlay"
                onClick={this.closeModalOnOverlayClick}
            >
                <div className="Modal">
                    <img src={largeImageUrl} alt="Not Available" />
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    largeImageUrl: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};