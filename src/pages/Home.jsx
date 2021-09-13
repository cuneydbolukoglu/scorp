import { FormattedMessage } from "react-intl";

const Home = props => {
    return (
        <section>
            <h2>
                <FormattedMessage id='home.page.title' defaultMessage="What is Lorem Ipsum ?" />
            </h2>
            <p>
                <FormattedMessage id='home.page.text' defaultMessage="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text" />
            </p>
        </section>
    )
}

export default Home;