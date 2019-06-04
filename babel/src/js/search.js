async function search(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  const pokemon = await response.json()
  return pokemon
}

export default search