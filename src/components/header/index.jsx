import { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import Logo from '../../assets/logo.svg';
import LoginModal from '../loginModal';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { userDelete, langUpdate } from '../../redux/actions';
import { FormattedMessage } from 'react-intl';

const Header = props => {
    const [showModal, setShowModal] = useState(false);
    const userData = useSelector(state => state.userReducer);
    const lang = useSelector(state => state.langReducer);

    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="light" className="mb-5">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            alt=""
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <FormattedMessage id='header.logo' defaultMessage="Sample" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link as={Link} to="/">
                                <FormattedMessage id='header.home.button' defaultMessage="Home" />
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact">
                                <FormattedMessage id='header.contact.button' defaultMessage="Contact" />
                            </Nav.Link>
                            <NavDropdown title={lang.toUpperCase()} id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={() => langUpdate("tr")}>TR</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => langUpdate("en")}>EN</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        {userData.name ?
                            <NavDropdown title={userData.name} id="collasible-nav-dropdown">
                                <NavDropdown.Item>{userData.email}</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => userDelete()}>
                                    <FormattedMessage id='header.logout.button' defaultMessage="Logout" />
                                </NavDropdown.Item>
                            </NavDropdown>
                            :
                            <Button onClick={() => setShowModal(true)} variant="primary">
                                <FormattedMessage id='header.login.button' defaultMessage="Login" />
                            </Button>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <LoginModal show={showModal} onClose={() => setShowModal(false)} />
        </header>
    )
}

export default Header;