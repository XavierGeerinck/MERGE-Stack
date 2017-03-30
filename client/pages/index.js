import { authenticate } from '../utils/AuthService'
import App from '../components/App'
import Header from '../components/smart/Header'
import List from '../components/smart/Posts/List'
import withData from '../lib/withData'

class ListPostPage extends React.Component {
  static async getInitialProps({ req, res }) {
    const user = await authenticate(req, res);
    return { user };
  }

  render() {
    return (
      <App>
          <Header user={this.props.user} pathname={this.props.url.pathname} />
          <List />
      </App>
    )
  }
}

export default withData(ListPostPage);