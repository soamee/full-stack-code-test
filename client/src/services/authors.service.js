import axios from "axios"

class AuthorService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/author`,
        })
    }

    findAuthors = () => this.instance.get("/")
    findSingleAuthor = (id) => this.instance.get(`/${id}`)
    editAuthor = (id, author) => this.instance.put(`/${id}`, author) 
}

export default AuthorService