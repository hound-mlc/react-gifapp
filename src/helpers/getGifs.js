export const getGifs = async(categoria) => {
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=etEYhcHOBJ1p9JCCNw5weNKfm5STFb74&limit=10'
    const resp = await fetch(url+"&q="+encodeURI(categoria));
    const {data} = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifs;
}