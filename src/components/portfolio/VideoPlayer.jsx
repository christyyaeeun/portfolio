import React from 'react';

const VideoPlayer = ({ gifURL }) => {
    return (
        <video autoPlay loop muted controls={ false }>
            <source src={ gifURL } type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
        </video>
    );
};

export default VideoPlayer;
