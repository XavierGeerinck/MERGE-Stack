import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import NProgress from 'nprogress'
import Router from 'next/router'
import { gql, graphql, withApollo } from 'react-apollo';
import Container from '../../dumb/Container';
import { authenticate, logout, getToken } from '../../../utils/AuthService'
import UserDropdown from '../../dumb/Header/UserDropdown'

// import config from 'root/config'
class Header extends React.Component {
  componentWillMount() {
    Router.onRouteChangeStart = (url) => {
      NProgress.start();
    }

    Router.onRouteChangeComplete = () => NProgress.done()
    Router.onRouteChangeError = () => NProgress.done()
  }

  render() {
    return (
      <header className="Header">
        <Head>
          {/* Import CSS for nprogress */}
          <link rel='stylesheet' type='text/css' href='/static/nprogress.css' />
        </Head>

        <Container width={800} isNoPadding={true}>
          {/*<h1>{config.ui.title}</h1>*/}
          <ul className="Header-Menu">
            <li><Link href="/" activeClassName='active' ><a>Home</a></Link></li>
            {!this.props.user && (<li><Link href="/login" activeClassName='active' ><a>Login</a></Link></li>)}
            {this.props.user && (<li><Link href="/create" activeClassName='active' ><a>Create Post</a></Link></li>)}
            {this.props.user && (<UserDropdown user={this.props.user}/>)}
          </ul>
          {this.props.children}
        </Container>

        <style jsx>{`
          .Header {
              height: 77px;
              background-color: white;
              border-bottom: 1px solid rgba(0,0,0,.0975);
              margin-bottom: 20px;
              padding: 0;
          }

          .Header-Menu {
              list-style: none;
              display: flex;
              padding: 0;
              margin: 0;
              justify-content: center;
          }

          .Header-Menu li:first-of-type {
              border-left: 1px solid rgba(0,0,0,.0975);
          }

          .Header-Menu li {
              display: block;
              height: 77px;
              border-right: 1px solid rgba(0,0,0,.0975);
              line-height: 77px;
              text-align: center;
              padding: 0 18px;
          }

          .Header-Menu li:hover {
              background-color: #fafafa;
              cursor: pointer;
          }

          .Header-Menu li a {
              text-decoration: none;
              color: black;
              height: 100%;
              width: 100%;
              display: block;
          }
        `}</style>
      </header>
    );
  }
}

export default Header;