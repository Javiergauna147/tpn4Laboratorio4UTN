import { Nav, Navbar } from "react-bootstrap"
import './navigation.css';


function Navigation() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">TpN4</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/productos">Productos</Nav.Link>
                        <Nav.Link href="/about">Donde estamos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Navigation;