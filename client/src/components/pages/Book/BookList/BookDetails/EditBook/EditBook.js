import Button from "@restart/ui/esm/Button"
import { useState } from "react"
import { Form, Row } from "react-bootstrap"
import AuthorService from "../../../../../../services/authors.service"
import BookService from "../../../../../../services/books.service"
import { CardItem, EditContainer } from "../UI/BookDetails.style"
const authorService = new AuthorService()
const bookService = new BookService()

const EditBook = ({ item, onShowForm }) => {

  console.log(item)

  const [name, setName] = useState(item?.name)
  const [isbn, setIsbn] = useState(item?.isbn)
  const [first_name, setFirst_name] = useState(item?.author.first_name)
  const [last_name, setLast_name] = useState(item?.author.last_name)
  const [bookId, setBookId] = useState(item?._id)
  const [authorId, setAuthorId] = useState(item?.author._id)


  const clearState = () => {

    setName("")
    setIsbn("")
    setFirst_name("")
    setLast_name("")
  }

  const handleChange = (e) => {

    const { value, name } = e.target

    switch (name) {

      case "name":
        setName(value);
        break;
      case "isbn":
        setIsbn(value);
        break;
      case "first_name":
        setFirst_name(value);
        break;
      case "last_name":
        setLast_name(value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    authorService
      .editAuthor(authorId, { first_name, last_name })
      .then(() => {
        return bookService.editBook(bookId, { name, isbn, authorId })
      })
      .then(book => alert(`This ${book.data.bookUpdated.name} has been updated successfully`))
      .catch(err => alert(err.message))

    clearState()
    onShowForm()
  }




  return (
    <CardItem>
      <Form className="container send__message" onSubmit={handleSubmit}>
        <Row className="justify-content-center d-flex">
          <h6 className="text-center">
            Edit this book
          </h6>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="subject">
            <Form.Label>Title:* </Form.Label>

            <Form.Control
              className="rounded-pill"
              onChange={(e) => handleChange(e)}
              name="name"
              value={name}
              type="text"
              placeholder="Add the Title here."
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="content">
            <Form.Label>Isbn:* </Form.Label>
            <Form.Control
              className="rounded-pill"
              onChange={(e) => handleChange(e)}
              name="isbn"
              value={isbn}
              type="number"
              placeholder="Add the isbn here"
            />
          </Form.Group>

          <hr />

          <Row className="justify-content-center d-flex">
            <h6 className="text-center">
              Add it's Author
            </h6>
          </Row>

          <Form.Group className="mb-3" controlId="content">
            <Form.Label>Firstname:* </Form.Label>
            <Form.Control
              className="rounded-pill"
              onChange={(e) => handleChange(e)}
              name="first_name"
              value={first_name}
              type="text"
              placeholder="Add the firstname here"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="content">
            <Form.Label>Lastname:* </Form.Label>
            <Form.Control
              className="rounded-pill"
              onChange={(e) => handleChange(e)}
              name="last_name"
              value={last_name}
              type="text"
              placeholder="Add the lastname here"
            />
          </Form.Group>

          <EditContainer>
            <Button className="mt-3 bg-success" variant="success" type="submit">
              Submit
            </Button>
            <Button className="mt-3 bg-danger" variant="danger" type="button" onClick={onShowForm}>
              Cancelar
            </Button>
          </EditContainer>
        </Row>
      </Form>
    </CardItem>
  )
}

export default EditBook