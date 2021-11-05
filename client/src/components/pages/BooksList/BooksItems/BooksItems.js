import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { CardBook } from "../../BookDetails/BookDetails.styles"

const BooksItems = ({items}) => {
    console.log(items)

    const listOfItems = items.map(book => {
        return(      
            <CardBook>    
                    <Col key={book._id} className="justify-content" xs={12} ms={6} lg={4}>           
                        <Link to={`/books/${book._id}`}>
                            <h1>{book.name}</h1>
                        </Link>
                    </Col>
            </CardBook>
        )
    })

    
    return(
        <>
        {listOfItems}
        </>
    )
}

export default BooksItems