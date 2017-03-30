import React from 'react'
import { graphql, gql } from 'react-apollo'
import Link from 'next/link'
import Card from '../../dumb/Card/Card';
import CardHeader from '../../dumb/Card/CardHeader';
import CardContent from '../../dumb/Card/CardContent';
import Avatar from '../../dumb/Avatar';

class Post extends React.Component {
  static propTypes = {
    post: React.PropTypes.object,
    mutate: React.PropTypes.func,
    refresh: React.PropTypes.func,
  }

  render() {
    return (
      <Card link={`/post/${this.props.post.id}`}>
        <CardHeader>
          <style jsx>{`
          .Author {
            flex-grow: 1;
            flex-shrink: 1;
            display: block;
          }

          .Author a {
            color: #262626;
            font-weight: bold;
            text-decoration: none;
            text-transform: none;
            font-size: 15px;
          }

          .TimeAgo a {
            text-decoration: none;
            color: #999;
            font-size: 15px;
          }  
          `}</style>

          <Avatar href={`/post/${this.props.post.id}`} image="/static/avatar.png" />
          <div className="Author"><Link href={`/post/${this.props.post.id}`}><a>{this.props.post.author.name}</a></Link></div>
          <div className="TimeAgo"><Link href={`/post/${this.props.post.id}`}><a>1h</a></Link></div>
        </CardHeader>

        <div className="Image"
            style={{
              backgroundImage: `url(${this.props.post.imageUrl})`,
              backgroundSize: 'cover',
              paddingBottom: '100%',
            }}
          />

        <CardContent>
          <div className="Description">
            {this.props.post.description}
          </div>
        </CardContent>
      </Card>
    )
  }
  //<span className='red f6 pointer dim' onClick={this.handleDelete}>Delete</span>

  handleDelete = async () => {
    await this.props.mutate({ variables: { id: this.props.post.id } })
    this.props.refresh()
  }
}

const deleteMutation = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`

const PostWithMutation = graphql(deleteMutation)(Post)

export default PostWithMutation
