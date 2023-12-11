import React from 'react';

const FigmaEmbed = ({ figmaURL }) => {
    return (
        <div>
            <iframe
                title="Figma Embed"
                style={ { border: '1px solid rgba(0, 0, 0, 0.1)' } }
                width="500"
                height="1000"
                src={ `https://www.figma.com/embed?embed_host=share&url=${ encodeURIComponent(figmaURL) }` }
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default FigmaEmbed;
