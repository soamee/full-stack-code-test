import { Container, Nav, Navbar } from "react-bootstrap";
import "./Navigation.css"

const Navigation = () => {

    const title1 = "Books"

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        
        <Navbar.Brand className="logo" align="start" href="/">Soamee</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Container >
                <Nav className="me-auto">
                <Nav.Link href="/books">{title1}</Nav.Link>
                </Nav>
            </Container>
        </Navbar.Collapse>
        
        </Navbar>
    )
}

export default Navigation