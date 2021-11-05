import Button from "@restart/ui/esm/Button"
import { useState } from "react"
import { Form, Row } from "react-bootstrap"



const FormAddBook = () => {

    const [ title, settitle ] = useState("")
    const [ isbn, setisbn ] = useState(0)
    const [ first_name, setfirst_name ] = useState("")
    const [ last_name, setlast_name ] = useState("")
    const [ avatar, setavatar ] = useState("https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/ancient-books-bernard-jaubert.jpg")

    const clearState = () => {

        settitle("")
        setisbn("")
        setfirst_name("")
        setlast_name("")
    }

    const handleChange = (e) => {

        const { value, name } = e.target

        switch(name) {
            case "title":
                settitle(value);
                break;
            case "isbn":
                setisbn(value);
                break;
            case "first_name":
                setfirst_name(value);
                break;
            case "last_name":
                setlast_name(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = () => {

    }

    return(
        <>
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
                name="title"
                value={title}
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

            <hr/>

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
            {/* {error && <p id="errorMessage">{error}</p>}
            {success && <p id="successMessage">{success}</p>} */}
          </Row>
        </Form>
      </>
    )
}

export default FormAddBook