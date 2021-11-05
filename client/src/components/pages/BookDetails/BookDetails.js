import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import BookService from "../../../services/books.service"
import { CardItem } from "../BooksList/BookList.styles"


const bookService = new BookService()

const BookDetails = props => {

    const { id } = useParams()
    const [ book, setBook ] = useState({})
    const fullName = `${book.author?.first_name}   ${book.author?.last_name}`

    console.log(book)
    useEffect(() => {
       
        bookService
            .findSingleBook(id)
            .then(singleBook => setBook(singleBook.data.bookFound))
            .catch(err => console.log(err.message))
    }, [])

    return(
        <CardItem>
            <>
            <h2>
            Title: {book.name}
            </h2>
            <p>
            Author: {fullName}
            </p>
            <span>
            Isbn: {book.isbn}
            </span>
            </>
            <div>
                <Link className="btn btn-danger" to={"/books"}>
                    Back to Books
                </Link>
            </div>
        </CardItem>
    )
}

export default BookDetails