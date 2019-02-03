import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from '../../components/Nav';
import BlogHome from './BlogHome'
import Cuba from './cuba/Cuba';
import Footer from '../../components/Footer';

const Blogs = ({ match }) => {
  return (
    <Router>
      <div className="container-fluid">
        <Nav />
        <Route exact path={match.path} component={BlogHome} />
        <Route exact path={`${match.path}/cuba`} component={Cuba} />
        {/* <Route exact path={`${match.path}/spring-break`} component={SpringBreak} />
        <Route exact path={`${match.path}/dublin`} component={Dublin} />
        <Route exact path={`${match.path}/week-2`} component={Week2} />
        <Route exact path={`${match.path}/arrival`} component={Arrival} /> */}

        <Footer />
      </div>
    </Router>
  );
};

export default Blogs;
