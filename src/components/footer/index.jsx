import { Navbar } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

const Footer = props => {
    return (
        <footer>
            <Navbar bg="dark" variant="dark" className="mt-5 p-2">
                <Navbar.Text>
                    <FormattedMessage id='footer.title' defaultMessage="Copyright" />
                </Navbar.Text>
            </Navbar>
        </footer>
    )
}

export default Footer;