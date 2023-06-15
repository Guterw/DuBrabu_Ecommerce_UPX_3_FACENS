import React from 'react';
import { Translate } from 'react-jhipster';

import { NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BrandIcon = props => (
  <div {...props} className="brand-icon">
    <img src="content/images/logo.svg" alt="Logo" />
  </div>
);

export const Brand = () => (
  <>
  <div className='navegado'>
  <div >
  <NavbarBrand tag={Link} to="/" className="brand-logo">
    <BrandIcon />

    <span className="navbar-version">{VERSION}</span>
  </NavbarBrand>
  </div>
  </div>
  </>
);

export const Home = () => (
  <NavItem className='junin'>
    <NavLink tag={Link} to="/" className="d-flex align-items-center">
      <FontAwesomeIcon icon="home" />
      <span>
        <Translate contentKey="global.menu.home">Home</Translate>
      </span>
    </NavLink>
  </NavItem>
);
