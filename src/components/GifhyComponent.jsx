import React from 'react'

export const GifhyComponent = () => {

    const apiKey = 'WoB0pgo11V0na4oFMEiY8Vcp6EdKX4K3';
    const httpCode = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

    httpCode
        .then(response => response.json())
        .then( ({ data }) => {
            const { url } = data.images.original;
            const img  = document.createElement('img');
            img.src = url;

            document.body.append( img );

        })
        .catch(error => {
            console.log(error);
        })
}

