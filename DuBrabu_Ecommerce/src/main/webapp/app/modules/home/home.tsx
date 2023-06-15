import './home.scss';

import React, { useEffect, useState, useRef, } from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { Row, Col, Alert } from 'reactstrap';
import { useSnapCarousel } from 'react-snap-carousel';
import { useAppSelector } from 'app/config/store';

export const Home = () => {
    const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();
  return (
    <>
    <h1 style={{
      textAlign: 'center',
      paddingBottom: 30
    }}>Os Preferidos DuBrabu</h1>
      <ul
        ref={scrollRef}
        style={{
          display: 'flex',
          overflow: 'auto',
          scrollSnapType: 'x mandatory'
        }}
      >
        {Array.from({ length: 3
         }).map((_, i) => (
          <li
            style={{
              backgroundColor: 'aqua',
              fontSize: '50px',
              width: '250px',
              height: '250px',
              flexShrink: 0,
              color: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            Item {i}
          </li>
        ))}
      </ul>
    </>
  );
};



export default Home;
