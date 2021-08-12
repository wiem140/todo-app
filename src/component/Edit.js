import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { Button, Modal, FormControl } from "react-bootstrap"
import { editTask } from '../I.S/Action/action';
import '../App.css';

const Edit = ({task}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();
  const handleEdit =() => {
      dispatch(editTask(task.id, newText));
      handleClose()
  }

  return (
    <>
      <Button className="EditButton" variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormControl
        onChange={(e)=> setNewText(e.target.value)}
        value={newText}
        placeholder="Edit Task ..."
        className="mr-2"
        />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit ;
