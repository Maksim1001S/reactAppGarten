import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const BreadCrumbs = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
  
    return (
      <nav className="breadcrumbs">
        {pathSegments.map((segment, index) => {
          const routeTo = `/${pathSegments.slice(0, index + 1).join('/')}`;
          return (
            <React.Fragment key={segment}>
              <Link to={routeTo}>{segment}</Link>
              {index < pathSegments.length - 1 && <span className="breadcrumb-separator">/</span>}
            </React.Fragment>
          );
        })}
      </nav>
    );
}

export default BreadCrumbs