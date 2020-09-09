import React from 'react';
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
//

export const GifGrid = ({categoria}) => {

    const {data: images, loading} = useFetchGifs(categoria);

    return (
        <>
            <h3 className="animate__animated animate__fadeInDown">{categoria}</h3>
            {loading && <p className="animate__animated animate__bounce">Loading</p>}
            { <div className="card-grid">
                
                { images.map(img => {
                    return <GifGridItem key={img.id} {...img}/>
                }) }
            </div> }
        </>
    )
}

GifGrid.propTypes = {
    categoria: PropTypes.string.isRequired
}