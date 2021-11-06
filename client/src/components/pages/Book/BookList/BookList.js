import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import BookService from "../../../../services/books.service"
import AddBook from "./AddBook/AddBook"
import BooksItems from "./BooksItems/BooksItems"
const bookService = new BookService()


const BooksList = () => {

  const [listOfBooks, setListOfBooks] = useState([])

  useEffect(() => {

    bookService
      .findBooks()
      .then(allBooks => setListOfBooks(allBooks.data))
      .catch(err => console.log(err.message))
  }, [])

  return (
    <Container>
      <AddBook />
      <Row className="justify-content-center">
        <BooksItems items={listOfBooks} />
      </Row>
    </Container>
  )
}

export default BooksList