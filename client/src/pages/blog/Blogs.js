import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from '../../components/Nav';
import Cuba from './cuba/Cuba';
import Footer from '../../components/Footer';

const Blogs = ({ match }) => {
  return (
    <Router>
      <div className="container-fluid">
        <Nav />
        <Route exact path={`${match.path}/cuba`} component={Cuba} />
        <Footer />
      </div>
    </Router>
  );
};

export default Blogs;
