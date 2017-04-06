import React from 'react';
import CreatePost from '../components/smart/Posts/Create'
import { authenticate } from '../utils/AuthService'
import withData from '../lib/withData'
import Header from '../components/smart/Header'

class CreatePostPage extends React.Component {
  static async getInitialProps({ req, res }) {
    const user = await authenticate(req, res);
    return { user };
  }

  render() {
    return (
      <div>
          <Header user={this.props.user} />
          <CreatePost />
      </div>
    )
  }
}

export default withData(CreatePostPage);