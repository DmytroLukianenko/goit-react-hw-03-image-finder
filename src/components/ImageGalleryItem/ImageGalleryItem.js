import React from 'react'
import PropTypes from "prop-types";

const ImageGalleryItem = ({ imageUrl, id, onClick }) => {
    return (
        <li className="ImageGalleryItem">
            <img
                className="ImageGalleryItem-image"
                id={id}
                src={imageUrl}
                alt="Is not available"
                onClick={onClick}
            />
        </li>
    );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    imageUrl: PropTypes.string,
    id: PropTypes.number,
    onClick: PropTypes.func.isRequired,
};
