import { useState, useEffect } from "react";
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (categoria) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( ()=> {
        getGifs(categoria).then(images =>{
            setState({data: images, loading: false});
        })
    }, [categoria]);

    return state;
}