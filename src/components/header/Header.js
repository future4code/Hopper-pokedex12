import { Container } from "./Styles"

const Header = ({onClick, src}) => {

  return (
    <Container>
      <nav>
        <ul>
          <li onClick={onClick}><img src={src} alt="Icone" /></li>
        </ul>
      </nav>
    </Container>
  )
}

export default Header