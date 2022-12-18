import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
  const NavBar = ()=>{
    return(
        <div  >
        <Container className='bb'>
      <Navbar expand="lg" >
        <Container>
          <Navbar.Brand href="#">Profil</Navbar.Brand>
          <Nav.Link href="#action1">About</Nav.Link>
        </Container>
      </Navbar>
    </Container>
        </div>
    )
}
export default NavBar 