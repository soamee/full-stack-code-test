import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import BookService from "../../../../services/books.service"
import AddBook from "./AddBook/AddBook"
import BooksItems from "./BooksItems/BooksItems"
const bookService = new BookService()


const BooksList = props => {

  const [listOfBooks, setListOfBooks] = useState([])
  const [submit, setSubmit] = useState(true)

  useEffect(() => {

    bookService
      .findBooks()
      .then(allBooks => setListOfBooks(allBooks.data))
      .catch(err => console.log(err.message))
  }, [])

  useEffect(() => {

    bookService
      .findBooks()
      .then(allBooks => setListOfBooks(allBooks.data))
      .catch(err => console.log(err.message))
  }, [submit])

  const refreshList = () => {
    submit ? setSubmit(false) : setSubmit(true);
  }

  return (
    <Container>
      <AddBook onRefreshList={refreshList} />
      <Row className="justify-content-center">
        <BooksItems items={listOfBooks} />
      </Row>
    </Container>
  )
}

export default BooksList