import React, { Component } from 'react'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

import PropTypes from "prop-types";

export default class ImageGallery extends Component {
    handleClick = (largeImageURL) => {
        this.props.onClose(largeImageURL);
    };

    render() {
        const { pictures } = this.props;

        return (
            <ul className="ImageGallery">
                {pictures.map(({ id, webformatURL, largeImageURL }) => (
                    <ImageGalleryItem
                        key={id}
                        id={id}
                        imageUrl={webformatURL}
                        onClick={() => this.handleClick(largeImageURL)}
                    />
                ))}
            </ul>
        );
    }
}

ImageGallery.propTypes = {
    pictures: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string,
            largeImageURL: PropTypes.string,
        })
    ).isRequired,
    onClose: PropTypes.func.isRequired,
};