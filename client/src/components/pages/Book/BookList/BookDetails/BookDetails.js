import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import BookService from "../../../../../services/books.service"
import EditBook from "./EditBook/EditBook"
import { CardItem, EditContainer } from "./UI/BookDetails.style"
const bookService = new BookService()


const BookDetails = props => {

  const { id } = useParams()
  const [book, setBook] = useState({})
  const fullName = `${book.author?.first_name}  ${book.author?.last_name}`
  let [showForm, setShowForm] = useState(false)

  useEffect(() => {

    bookService
      .findSingleBook(id)
      .then(singleBook => setBook(singleBook.data.bookFound))
      .catch(err => console.log(err.message))
  }, [showForm])

  const editForm = async () => {

    showForm ? await setShowForm(false) : setShowForm(true)
  }

  if (showForm) {

    return <EditBook item={book} onShowForm={editForm} />
  }

  return (
    <CardItem>

      <h2>
        Title: {book.name}
      </h2>
      <p>
        Author: {fullName}
      </p>
      <span>
        Isbn: {book.isbn}
      </span>

      <EditContainer>
        <button className="btn btn-edit" onClick={editForm}>
          Edit Book
        </button>
        <Link className="btn btn-back" to={"/books"}>
          Back to Books
        </Link>
      </EditContainer>
    </CardItem>
  )
}

export default BookDetails

