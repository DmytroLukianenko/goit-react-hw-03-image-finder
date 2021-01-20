import React, { Component } from 'react'
import PropTypes from "prop-types";

export default class Button extends Component {
    render() {
        return (
            <button className='Button' type="button" onClick={this.props.onClick}>
                Load More
            </button>
        );
    }
}

Button.propTypes = { onClick: PropTypes.func };
