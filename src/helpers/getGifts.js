export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=SsqnbACexRtYcnEjLZEd69J4hv1An40G&q=${category}&limit=20`;
  const resp = await fetch(url);
  const {data =[]} = await resp.json();

  const gifts = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))
  console.log(gifts);
  return gifts;
}