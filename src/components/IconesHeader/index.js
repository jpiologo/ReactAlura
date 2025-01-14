import './style.css'
import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'

const icones = [perfil, sacola];

function IconesHeader() {
    return (
        <ul className='icones'>
          {icones.map((img) => (
            <li className='icone'><img src={img} alt='icones'></img></li>
          ))}
        </ul>
    )
}

export default IconesHeader;