export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=7dP0K6HqugQQSuNcz6pP6qcR7nwjA36E&q=${category}&limit=6`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(({ title, images, id }) => ({
      id,
      title,
      url: images.downsized_medium.url,
    }));
    console.log(gifs);
    return gifs;
  };
  