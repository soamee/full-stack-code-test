import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {

    const [ headTitle, setheadTitle ] = useState(<h1>Welcome to Soamee Books</h1>)
    const [ description, setDescription ] = useState(<h3>Soamee Books is a website responsive where you are able to find some of your favourite books furthermore if you cannot find the book you are looking for, you are able to add it to our huge Database. Have Fun! </h3>)
    const [ booksButton, setbooksButton ] = useState(<Link to={`/books`} className="btn btn-success">Check our Books</Link>)

    return(
        <>

            <main>
                {headTitle}         
                <Container>
                    <Row>
                    {description}
                    </Row>
                    <Row className="mt-5">
                    <Col lg={12}>
                    {booksButton}
                    </Col> 
                    </Row>
                </Container>   
            </main>        
        </>
    )
}

export default Home