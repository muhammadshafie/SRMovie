import { Col, Container, Row, Button } from 'react-bootstrap'


const Intro = ({ searchTerm, setSearchTerm, SEARCH_API, getMovies }) => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        if(searchTerm) {
            getMovies(SEARCH_API+searchTerm);
            setSearchTerm('');
            if (e.key === "Enter") {
                e.target.blur();
            }
        }
    
    };
    
    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    };
    return (
        <div className='intro'>
            <Container className='text-white text-center justify-content-center align-items-center'>
                <Row>
                    <Col >
                    <h1 className='title'>DISCOVER YOUR ENJOYMENT <br /> WITH BEST MOVIE DIRECTORY</h1>
                    <div className='mt-4 text-center'>
                        <Button variant="dark" href='#trending'>Let's Explore Trending Movie</Button>
                    </div>
                    <form onSubmit={handleOnSubmit}>
                        <input className='mt-4 search' type="text" placeholder='Search...' value={searchTerm} onChange={handleOnChange}/>
                    </form>
                    </Col>
                </Row>
            </Container>
        </div> 
    )
}

export default Intro