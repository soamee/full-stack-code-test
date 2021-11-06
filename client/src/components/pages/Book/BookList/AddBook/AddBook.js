import Button from "@restart/ui/esm/Button"
import { useState } from "react"
import { Container, Modal } from "react-bootstrap"
import { ButtonStyled } from "./UI/AddBook.style"
import FormAddBook from "./FormAddBook/FormAddBook"


const AddBook = (props) => {

  const [showForm, setShowForm] = useState(false)

  const openModal = () => {

    setShowForm(true)
  }

  const closeModal = () => {

    setShowForm(false)
  }

  return (
    <Container className="d-flex justify-content-center">
      <ButtonStyled>
        <Button
          block
          className="mt-5 mb-5 btn btn-add add-book"
          onClick={() => openModal()}
        >
          Add a Book
        </Button>
      </ButtonStyled>
      <Modal show={showForm} onHide={() => closeModal()}>
        <Modal.Header closeButton>
          <Modal.Title className="modal__title">Would you like to add a book ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormAddBook
            closeModal={closeModal}
            onRefreshList={props.onRefreshList}
          />
        </Modal.Body>
      </Modal>
    </Container>
  )
}

export default AddBook