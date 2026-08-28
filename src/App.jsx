import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  const [erro , setErro] = useState('')
  const [loading, setLoading] = useState(false)
  const [detalhes, setDetalhes] = useState(null)
  const [pag, setPag] = useState(1)
  const [totalpag, setTotalpag] = useState(0)

  async function buscarFilmes() {
    setLoading(true)
    const resposta = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${search}&page=${pag}`)
    const dados = await resposta.json()
    if (dados.Response === "False"){
      setErro(dados.Error)
      setMovies([])
    } else{
      dados.Search.sort((filmeA, filmeB) => Number(filmeB.Year) - Number(filmeA.Year))
      setMovies(dados.Search)
      setErro('')
      setTotalpag(dados.totalResults)
    }
    setLoading(false)
  }

  async function verDetalhes(imdbID){
    const resposta = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&i=${imdbID}`)
    const dados = await resposta.json()
    setDetalhes(dados)
  }

  useEffect(() => {
    if(search) {
      //eslint-disable-next-line react-hooks/set-state-in-effect
      buscarFilmes()
    }
  }, [pag])

  function proximaPagina(){
    setPag(pag + 1)
  }

  function paginaAnterior(){
    setPag(pag - 1)
  }

  return (
    <>

      <header className="header">
        <h1>BuscarFilmes</h1>
      </header>

      <div className="search-area">
        <input
        type="text"
        placeholder='Digite o que procura...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter"){
            setPag(1)
            buscarFilmes()
          }
        }}
        />

        <button onClick={() => { setPag(1); buscarFilmes() }} disabled={loading}>Buscar</button>
      </div>

      {erro && <p className="erro">{erro}</p>}
      {loading && <p>Carregando...</p>}
      {movies.length === 0 && !erro && !loading &&(
        <div className='empty-state'>
          <p>Nenhum filme por aqui ainda</p>
          <span>Digite um título acima e busque por ele</span>
        </div>
      )}

      <div className="movies-container">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.imdbID} onClick={() => verDetalhes(movie.imdbID)}>
            <img src={movie.Poster} alt={movie.Title} />

            <div className="movie-info">
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='paginacao'>
        <button onClick={paginaAnterior} disabled={pag === 1}>Anterior</button>
        <span>Página {pag}</span>
        <button onClick={proximaPagina} disabled={pag * 10 >= totalpag}>Próxima</button>
      </div>

      {detalhes && (
        <div className='modal-overlay' onClick={() => setDetalhes(null)}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <h2>{detalhes.Title}</h2>
            <p><strong>Ano:</strong>{detalhes.Year}</p>
            <p><strong>Elenco:</strong>{detalhes.Actors}</p>
            <p><strong>Nota IMDb:</strong>{detalhes.imdbRating}</p>
            <p>{detalhes.Plot}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default App
