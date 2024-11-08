//bootstrap imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//navbar function
const NavigationBar = () => {
  return (
    //makes use of navbar from bootstrap and change theme to black
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                {/*linkings differents tabs in the navbar with specific hrefs*/}
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
  );
};
//call this in the app.js to make use of this navbar template
export default NavigationBar;