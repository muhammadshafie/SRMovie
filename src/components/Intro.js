import { Col, Container, Row, Button } from 'react-bootstrap'


const Intro = () => {
    return (
        <div className='intro'>
            <Container className='text-white d-flex text-center justify-content-center align-items center'>
                <Row>
                    <Col>
                    <h1 className='title'>DISCOVER YOUR ENJOYMENT</h1>
                    <h1 className='title'>WITH BEST MOVIE DIRECTORY</h1>
                    <div className='introButton mt-4 text-center'>
                        <Button variant="dark" href='#trending'>Let's Explore Trending Movie</Button>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro