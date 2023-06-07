import React, { useEffect, useState } from 'react';

export const GifhyComponent = () => {

    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const obtenerImagen = async () => {
            try {
                const apiKey = 'WoB0pgo11V0na4oFMEiY8Vcp6EdKX4K3';
                const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
                const { data } = await response.json();

                const { url } = data.images.original;
                setImageUrl(url);
            } catch (error) {
                console.log(error);
            }
        };

        obtenerImagen();
    }, []);

    return (
        <div className='container-giphy'>
            <img className="image-giphy" src={imageUrl} alt="Gif" />
        </div>
    );
};