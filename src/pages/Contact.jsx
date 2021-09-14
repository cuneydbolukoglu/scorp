import { useState, useEffect } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";

const Contact = props => {
    const userData = useSelector(state => state.userReducer);
    const [validated, setValidated] = useState(false);

    const [name, setName] = useState(userData.name);
    const [email, setEmail] = useState(userData.email);
    const [country, setCountry] = useState("TR");
    const [phone, setPhone] = useState(null);
    const [text, setText] = useState(null);

    useEffect(() => {
        setName(userData.name);
        setEmail(userData.email);
    }, [userData])

    const countryList = [
        { id: "TR", name: "Turkey" },
        { id: "US", name: "United States of America" },
        { id: "GB", name: "Birleşik Krallık" },
        { id: "DE", name: "Almanya" },
        { id: "SE", name: "İsveç" },
        { id: "KE", name: "Kenya" },
        { id: "BR", name: "Brezilya" },
        { id: "ZW", name: "Zimbabve" }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const contactFormValue = { name: name, email: email, country_code: country, phonenumber: phone && phone.replaceAll('(','').replaceAll(')',''), text: text };
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            console.log(contactFormValue);
        }

        setValidated(true);
    }

    return (
        <section>
            <h2>
                <FormattedMessage id='contact.page.title' defaultMessage="Contact" />
            </h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>
                            <FormattedMessage id='contact.page.name' defaultMessage="Name" />
                        </Form.Label>
                        <FormattedMessage id='contact.page.name' defaultMessage="Name">
                            {(message) => (
                                <Form.Control type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder={message} required />
                            )}
                        </FormattedMessage>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>
                            <FormattedMessage id='contact.page.email' defaultMessage="Email" />
                        </Form.Label>
                        <FormattedMessage id='contact.page.email' defaultMessage="Email">
                            {(message) => (
                                <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder={message} required />
                            )}
                        </FormattedMessage>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>
                            <FormattedMessage id='contact.page.country' defaultMessage="Country" />
                        </Form.Label>
                        <Form.Select onChange={(e) => setCountry(e.target.value)} required>
                            {
                                countryList.map((item, index) => (
                                    <option value={item.id} key={index}>{item.name}</option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>
                            <FormattedMessage id='contact.page.phone' defaultMessage="Phone Number" />
                        </Form.Label>
                        <FormattedMessage id='contact.page.phone' defaultMessage="Phone Number">
                            {(message) => (
                                <Form.Control type="phone" onChange={(e) => setPhone(e.target.value)} placeholder={"X(XXX) XXX XX XX"} required pattern="(([\+]90?)|[0]?)([ ]?)(\([0-9]{3}\))([ ]?)([0-9]{3})(\s*[\-]?)([0-9]{2})(\s*[\-]?)([0-9]{2})" />
                            )}
                        </FormattedMessage>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridText">
                        <Form.Label>
                            <FormattedMessage id='contact.page.text' defaultMessage="Text" />
                        </Form.Label>
                        <FormattedMessage id='contact.page.text' defaultMessage="Text">
                            {(message) => (
                                <Form.Control as="textarea" rows={4} onChange={(e) => setText(e.target.value)} placeholder={message} required />
                            )}
                        </FormattedMessage>
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    <FormattedMessage id='contact.page.button' defaultMessage="Send" />
                </Button>
            </Form>
        </section>
    );
}

export default Contact;