import React from 'react';

const Trending = ({title,poster_path, overview, vote_average, IMG_API, setVoteClass}) => {
    return (
        <div className='movie'>
            <img src={IMG_API + poster_path} alt={title} />
            <div className='movie-info'>
                <h4>{title}</h4>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average.toFixed(2)}</span>
            </div>
            <div className="movie-over">
                <h3>Overview: </h3>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Trending;