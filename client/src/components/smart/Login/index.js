import React from 'react';
import { graphql, gql } from 'react-apollo'
import Router from 'next/router'
import Header from '../Header';
import Form from '../../dumb/Form';
import FormBlock from '../../dumb/FormBlock';
import Container from '../../dumb/Container';
import { login } from '../../../utils/AuthService';

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const result = await this.props.login({ variables: { email, password }});

    try {
        login(result.data.login.token, result.data.login.user);
    } catch (err) {
      return null; // something happened
    }

    Router.push('/');
  }

  render() {
    return (
      <div>
        <Container width={500} isCentered={true} isBackground={true}>
          <h1 style={{ "textAlign": "center" }}>Login</h1>

          <Form>
            <FormBlock label="Email" type="text" placeholder="Email" isHideLabel={true} onChange={(e) => this.setState({ email: e.target.value })} />
            <FormBlock label="Password" type="password" placeholder="Password" isHideLabel={true} onChange={(e) => this.setState({ password: e.target.value })} />
            <FormBlock text="Login" type="button" isHideLabel={true} onClick={this.handleLogin} />
          </Form>
        </Container>
      </div>
    );
  }
}

const withMutation = graphql(gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token,
      user {
        id,
        name,
        email
      }
    }
  }
`, { name: 'login' });

export default withMutation(Login);