import logo from '../../images/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
  gap: 15px;
`

function Logo () {
    return (
        <LogoContainer>
          <img src={logo} alt='Logo'></img>
          <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo; 