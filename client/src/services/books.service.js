import axios from "axios"

class BookService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/book`,
        })
    }

    createBook = (book) => this.instance.post("/book", book);
    findBooks = () => this.instance.get("/books")
    findSingleBook = (id) => this.instance.get(`/book/${id}`)
    editBook = (id, book) => this.instance.put(`/book/${id}`, book) 
}

export default BookService