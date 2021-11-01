import React from 'react';

const MovieField = (props) => (
    <div className="movie-field">
        <label>{props.label}: </label>
        {props.value}
    </div>
);
export default MovieField;
