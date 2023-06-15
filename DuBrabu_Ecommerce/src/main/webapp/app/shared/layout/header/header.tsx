import './header.scss';

import React, { useState } from 'react';
import { Translate, Storage } from 'react-jhipster';
import { Navbar, Nav, NavbarToggler, Collapse } from 'reactstrap';
import LoadingBar from 'react-redux-loading-bar';

import { Home, Brand } from './header-components';
import { AdminMenu, EntitiesMenu, AccountMenu, LocaleMenu } from '../menus';
import { useAppDispatch } from 'app/config/store';
import { setLocale } from 'app/shared/reducers/locale';

export interface IHeaderProps {
  isAuthenticated: boolean;
  isAdmin: boolean;
  ribbonEnv: string;
  isInProduction: boolean;
  isOpenAPIEnabled: boolean;
  currentLocale: string;
}

const Header = (props: IHeaderProps) => {

  const dispatch = useAppDispatch();

  const renderDevRibbon = () =>
    props.isInProduction === false ? (
      <div className="ribbon dev">
        <a href="">
          <Translate contentKey={`global.ribbon.${props.ribbonEnv}`} />
        </a>
      </div>
    ) : null;


  /* jhipster-needle-add-element-to-menu - JHipster will add new menu items here */

  return (
    <div id="app-header" >
      {renderDevRibbon()}
      <LoadingBar className="loading-bar" />
      <div className='navegado'>
      <Navbar  fixed="top" className="junin" color=' #fca311'>
        <Brand />
        <div className='buttonHome'>
          <a className='hometitle' href='/'>
            <h5 className='hometitle'> Home</h5>
          </a>
        </div>
        <div className='hometitle'>
          <input className='pesquisar' placeholder='Pesquisar'>
          </input>
        </div>
        <div className='buttonLogin'>
          <a className='hometitle' href='/login'>
            <h5 className='hometitle'>Login</h5>
          </a>
        </div>
        <div className='buttonCarrinho'>
          <a className='hometitle'>
            <h5 className='hometitle'>Meu Carrinho</h5>
          </a>
        </div>
        <div className='perfilFoto'>
          <a>
          <img className='foto'src='../../../../content/images/perfilFoto.svg'></img>
        </a>
        </div>
      </Navbar>
      </div>
    </div>
  );
};

export default Header;
