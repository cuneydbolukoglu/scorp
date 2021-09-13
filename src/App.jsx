import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux"
import Header from './components/header';
import Footer from './components/footer';
import Home from "./pages/Home";
import Contact from './pages/Contact';

import EN from "./lang/en.json";
import TR from "./lang/tr.json";

function App() {
  const language = useSelector(state => state.langReducer);

  return (
    <Router>
      <IntlProvider locale={language} messages={language === 'en' ? EN : TR}>
        <Container>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </Container>
      </IntlProvider>
    </Router >
  );
}

export default App;
