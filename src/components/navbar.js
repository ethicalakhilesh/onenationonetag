import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar varient="dark" style={{backgroundColor:"gold"}}>
        <Container>
          <Navbar.Brand >One Nation One Tag</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;