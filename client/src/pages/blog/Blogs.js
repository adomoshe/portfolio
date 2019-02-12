import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from '../../components/Nav';
import BlogHome from './BlogHome';
import Cuba from './cuba/Cuba';
import SpringBreak from './study_abroad/SpringBreak';
import Dublin from './study_abroad/Dublin';
import Week2 from './study_abroad/Week2';
import Arrival from './study_abroad/Arrival';
import Footer from '../../components/Footer';

const Blogs = ({ match }) => (
  <Router>
    <div className="container-fluid">
      <Nav />
      <Route exact path={match.url} component={BlogHome} />
      <Route exact path={`${match.url}/cuba`} component={Cuba} />
      <Route exact path={`${match.url}/spring-break`} component={SpringBreak} />
      <Route exact path={`${match.url}/dublin`} component={Dublin} />
      <Route exact path={`${match.url}/week_2`} component={Week2} />
      <Route exact path={`${match.url}/arrival`} component={Arrival} />
      <Footer />
    </div>
  </Router>
);

export default Blogs;
