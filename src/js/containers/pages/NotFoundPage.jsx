import React from 'react';
import { Link } from 'react-router-dom';
//constants
import { getHomePageUrl } from '../../constants/appUrls';

const NotFoundPage = () => (
  <div className="not-found page-wrapper">
    <div className="inner-content">
      <h3 className="title">not found page</h3>
      <Link className="subtitle" to={getHomePageUrl()}>
        Go back
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
