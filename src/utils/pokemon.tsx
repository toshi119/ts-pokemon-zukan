export interface PokemonDetail {
  name: string
  imageUrl: string
  types: string[]
  height: number
  weight: number
  ability: string
}

export const getPokemon = async (url: string): Promise<PokemonDetail> => {
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`正しくレスポンスが返ってきませんでした, ${res.status}`)
    }
    const data = await res.json()

    const formattedPokemon: PokemonDetail = {
      name: data.name,
      imageUrl: data.sprites.front_default,
      types: data.types.map((typeInfo: { type: { name: string } }) => typeInfo.type.name),
      height: data.height,
      weight: data.weight,
      ability: data.abilities[0]?.ability.name || '不明',
    }

    return formattedPokemon
  } catch (error) {
    console.error('データの取得に失敗しました', error)
    throw error
  }
}
