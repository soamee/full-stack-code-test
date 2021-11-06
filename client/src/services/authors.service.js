import axios from "axios"

class AuthorService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/author`,
        })
    }

    createAuthor = (author) => this.instance.post("/author", author)
    findAuthors = () => this.instance.get("/authors")
    findSingleAuthor = (id) => this.instance.get(`/author/${id}`)
    editAuthor = (id, author) => this.instance.put(`/author/${id}`, author) 
}

export default AuthorService