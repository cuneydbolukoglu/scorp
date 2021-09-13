import { useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import { userUpdate } from "../../redux/actions";
import { FormattedMessage } from 'react-intl';

const LoginModal = props => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { name: name, email: email, password: password };
    const form = e.currentTarget;

    if (form.checkValidity() === true) {
      userUpdate(userData);
      props.onClose();
    }
    else {
      e.stopPropagation();
    }

    setValidated(true);
  }

  return (
    <Modal show={props.show} onHide={() => props.onClose()}>
      <Modal.Header closeButton>
        <Modal.Title>
          <FormattedMessage id='modal.title' defaultMessage="Login" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>
              <FormattedMessage id='modal.name' defaultMessage="Name" />
            </Form.Label>
            <FormattedMessage id='modal.name' defaultMessage="Name">
              {(message) => (
                <Form.Control type="text" onChange={(e) => setName(e.target.value)} placeholder={message} required />
              )}
            </FormattedMessage>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              <FormattedMessage id='modal.email' defaultMessage="Email" />
            </Form.Label>
            <FormattedMessage id='modal.email' defaultMessage="Email" >
              {(message) => (
                <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder={message} required />
              )}
            </FormattedMessage>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>

              <FormattedMessage id='modal.password' defaultMessage="Password" />
            </Form.Label>
            <FormattedMessage id='modal.password' defaultMessage="Password" >
              {(message) => (
                <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder={message} required />
              )}
            </FormattedMessage>
          </Form.Group>
          <Button variant="primary" type="submit">
            <FormattedMessage id='modal.login.button' defaultMessage="Login" />
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default LoginModal;