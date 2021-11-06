import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Border } from "./UI/BooksItems.style"


const BooksItems = ({ items }) => {

  const listOfItems = items?.map(book => {
    return (
      <Col md={6}>
        <Border>
          <Link to={`/books/${book._id}`}>
            <h1>{book.name}</h1>
          </Link>
        </Border>
      </Col>
    )
  })

  return (
    <>
      {listOfItems}
    </>
  )
}


export default BooksItems