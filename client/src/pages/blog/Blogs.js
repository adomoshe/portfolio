import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from '../../components/Nav';
import BlogHome from './BlogHome'
import Cuba from './cuba/Cuba';
import SpringBreak from './study_abroad/SpringBreak';
import Dublin from './study_abroad/Dublin';
// import Week2 from './study_abroad/Week2';
// import Arrival from './study_abroad/Arrival';
import Footer from '../../components/Footer';

const Blogs = ({ match }) => {
  return (
    <Router>
      <div className="container-fluid">
        <Nav />
        <Route exact path={match.path} component={BlogHome} />
        <Route exact path={`${match.path}/cuba`} component={Cuba} />
        <Route exact path={`${match.path}/spring-break`} component={SpringBreak} />
        <Route exact path={`${match.path}/dublin`} component={Dublin} />
        {/* <Route exact path={`${match.path}/week-2`} component={Week2} />
        <Route exact path={`${match.path}/arrival`} component={Arrival} /> */}
        <Footer />
      </div>
    </Router>
  );
};

export default Blogs;
