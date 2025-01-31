import { useEffect , useState } from 'react';
import styled from 'styled-components';
import { getFavoritos } from '../services/favoritos';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);

  li {
      list-style: none;
  }
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosDaApi = await getFavoritos()
    setFavoritos(favoritosDaApi)
  }

  useEffect(() => {
    fetchFavoritos();
  }, []);

  return (
    <AppContainer>
      {favoritos.map( favorito => (
        <p>{favorito.nome}</p>
      ))}
    </AppContainer>
  ); 
}

export default Favoritos;
