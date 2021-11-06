import Button from "@restart/ui/esm/Button"
import { useState } from "react"
import { Form, Row } from "react-bootstrap"
import AuthorService from "../../../../../../services/authors.service"
import BookService from "../../../../../../services/books.service"

const authorService = new AuthorService()
const bookService = new BookService()


const FormAddBook = ({ closeModal }) => {

  const [name, setName] = useState("")
  const [isbn, setIsbn] = useState(0)
  const [first_name, setFirst_name] = useState("")
  const [last_name, setLast_name] = useState("")
  const [avatar, setavatar] = useState("https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/ancient-books-bernard-jaubert.jpg")

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
      .createAuthor({ first_name, last_name })
      .then(res => {

        const author = res.data.author[0]._id

        return bookService.createBook({ name, isbn, author })
      })
      .then(book => alert(`The book ${book.data.bookCreated.name} has been created.`))
      .catch(err => alert(err.response.data.message))

    clearState()
    closeModal()

  }

  return (

    <Form className="container send__message" onSubmit={handleSubmit}>
      <Row className="justify-content-center d-flex">
        <h6 className="text-center">
          Add a book <img width="100%" src={avatar} alt="Books avatar" />
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


        <Button className="rounded-pill mt-3" variant="success" type="submit">
          Submit
        </Button>
      </Row>
    </Form>

  )
}

export default FormAddBook
