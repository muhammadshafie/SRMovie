import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";

const NavBar = ({ searchTerm, setSearchTerm, SEARCH_API, getMovies }) => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        if(searchTerm) {
            getMovies(SEARCH_API+searchTerm);
            setSearchTerm('');
        }
    
    };
    
    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <Navbar variant="dark" fixed="top" className="header-bg">
                <Container>
                    <Navbar.Brand href="/">SRMovie</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#all">ALL</Nav.Link>
                        <Nav.Link href="#trending">TRENDING MOVIES</Nav.Link>
                    </Nav>
                    <Nav>
                        <form onSubmit={handleOnSubmit}>
                            <input className='search text-white' type="text" placeholder='Search...' value={searchTerm} onChange={handleOnChange}/>
                        </form>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;