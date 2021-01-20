import axios from "axios";

const fetchPicturesWithQuery = (searchQuery, page = 1) => {
    return axios
        .get(
            `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=19534934-9bdcedd823ab91ff8ab8054d1&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then((response) => response.data.hits);
};

export default {
    fetchPicturesWithQuery,
};  