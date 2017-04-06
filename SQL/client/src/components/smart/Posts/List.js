import React from 'react'
import Link from 'next/link'
import { graphql, gql } from 'react-apollo'
import Post from './Post'
import Container from '../../dumb/Container'
import Header from '../Header'

class List extends React.Component {

  static propTypes = {
    data: React.PropTypes.object,
  }

  render() {
    if (this.props.data.loading) {
      return (<div className='List'>
        <div>
          Loading
        </div>
      </div>)
    }

    return (
      <div>
        <Container width={600} isCentered={true}>
          <style jsx>{`
            .Add-Post {
              position: absolute;
              top: 10px;
              left: 10px;

              background-color: white;
              border: 1px solid #e6e6e6;
              border-radius: 3px;
              padding: 10px 10px;

              display: flex;
              justify-content: center;
              text-decoration: none;
              color: black;
              align-items: center;
            }

            .Add-Post img {
              display: block;
              width: 24px;
              margin-right: 7px;
            }

            .Add-Post div {
              text-decoration: none;
            }

          `}</style>
          <Link href="/create">
            <a className="Add-Post">
                <img src="/static/plus.svg" role='presentation' />
                <div>New Post</div>
            </a>
          </Link>

          {this.props.data.allPosts.map(post => <Post key={post.id} post={post} />)}
          {this.props.children}
        </Container>
      </div>
    )
  }
}

const FeedQuery = gql`query allPosts {
  allPosts(orderBy: DESC) {
    id
    imageUrl
    description,
    author {
      id,
      name
    }
  }
}`

// TODO: Should find a way to auto refresh when new data is available (subscriptions or redux?)
const withData = graphql(FeedQuery);
export default withData(List)
