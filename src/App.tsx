import React, { useState } from 'react'
import './App.css'
import { getPokemon, PokemonDetail } from './utils/pokemon'
import { Card } from './components/Card'

const App = () => {
  const MAX_POKEMON_ID = 1025

  const [loading, setLoading] = useState(false)
  const [currentPokemon, setCurrentPokemon] = useState<PokemonDetail | null>(null)

  const fetchRandomPokemon = async () => {
    setLoading(true)
    setCurrentPokemon(null)

    try {
      const randomId = Math.floor(Math.random() * MAX_POKEMON_ID) + 1
      const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`

      const pokemonData = await getPokemon(url)
      setCurrentPokemon(pokemonData)
    } catch (error) {
      console.error("ランダムなポケモンの取得に失敗しました。", error)
    } finally {
      setLoading(false)
    }
  }

  const renderScreenContent = () => {
    if (loading) {
      return <div className="loader">ロード中...</div>
    }
    if (currentPokemon) {
      return <Card pokemon={currentPokemon} />
    }
    return (
      <div className="initial-message">
        <span>ボタンを押して</span>
        <span>ポケモンをさがそう！</span>
      </div>
    )
  }

  return (
    <div className="pokedex">
      <div className="pokedex-header">
        <div className="pokedex-light-main"></div>
        <div className="pokedex-lights-small">
          <div className="light red"></div>
          <div className="light yellow"></div>
          <div className="light green"></div>
        </div>
      </div>
      <div className="pokedex-screen-container">
        <div className="pokedex-screen">
          {renderScreenContent()}
        </div>
      </div>
      <div className="pokedex-controls">
        <button className="random-button" onClick={fetchRandomPokemon} disabled={loading}>
          さがす
        </button>
      </div>
    </div>
  )
}

export default App
