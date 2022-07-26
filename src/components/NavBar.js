import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";

const NavBar = () => {
    return (
        <div>
            <Navbar variant="dark"className="header-bg">
                <Container>
                    <Navbar.Brand href="/">SRMovie</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#all">ALL</Nav.Link>
                        <Nav.Link href="#trending">TRENDING MOVIES</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;