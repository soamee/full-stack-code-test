// import { Route, Router } from "react-router"
import { Routes, Route } from "react-router-dom";
import BookDetails from "../pages/Book/BookList/BookDetails/BookDetails";
import BooksList from "../pages/Book/BookList/BookList";
import Home from "../pages/Home/Home"


const AllRoutes = (props) => {

    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/books" element={<BooksList />} />
            <Route path="/books/:id" element={<BookDetails {...props} />} />
        </Routes>
    )
}

export default AllRoutes