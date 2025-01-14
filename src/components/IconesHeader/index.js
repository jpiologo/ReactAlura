import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'
import styled from 'styled-components'

const Icones = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 15px;
`

const icones = [perfil, sacola];

function IconesHeader() {
    return (
        <Icones>
          {icones.map((img) => (
            <li className='icone'><img src={img} alt='icones'></img></li>
          ))}
        </Icones>
    )
}

export default IconesHeader;