export const getRandomPost = async (id) => {
  const data1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json())
  const data2 = await fetch('https://dog.ceo/api/breeds/image/random').then(res => res.json())
  const res = {...data1,...data2}
  const res2 = {image: data1.sprites.front_default,name: data1.name,}
  return [res, res2]
}
