import styled from "styled-components"

const Container = styled.div`
  height: 10vh;
  background: #3470b4F9;
  nav {
    height: 100%;
    padding: 2em;
    display: flex;
    align-items: center;
    ul {
      list-style: none;
      li {
        color: #feca04;
        cursor: pointer;
        img {
          width: 6em;
          height: 10vh;
          padding: 10px;
        }
      }
    }
  }
`;

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