import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import BookService from "../../../services/books.service"
import AddBook from "./AddBook/AddBook"
import BooksItems from "./BooksItems/BooksItems"

const bookService = new BookService()

const BooksList = () => {

    const [ listOfBooks, setlistOfBooks ] = useState([])
    const [ addBook, setaddBook ] = useState(undefined)
    
    useEffect(() => {
        console.log("holaaaaaa")
        bookService
        .findBooks()
        .then(allBooks => setlistOfBooks(allBooks.data))
        .catch(err => console.log(err.message))
        console.log(typeof(listOfBooks))
    }, [])
   
    return(
        <Container>
            <AddBook />
            <Row>
                <BooksItems items={listOfBooks} />
            </Row>
       </Container>
    )
}

export default BooksList