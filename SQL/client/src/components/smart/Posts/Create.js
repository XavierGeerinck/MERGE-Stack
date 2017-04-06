import React from 'react'
import { graphql, gql } from 'react-apollo'
import Router from 'next/router'
import Container from '../../dumb/Container'
import Header from '../Header'
import Form from '../../dumb/Form'
import FormBlock from '../../dumb/FormBlock'
import Button from '../../dumb/Button'

class Create extends React.Component {
  static propTypes = {
    router: React.PropTypes.object,
    addPost: React.PropTypes.func,
  }

  state = {
    description: '',
    imageUrl: '',
    authorId: 1
  }

  render() {
    return (
      <div>
        <Container width={600} isCentered={true}>
          <div className='Card'>
            {
              this.state.imageUrl &&
              <div className="Image"
                style={{
                  backgroundImage: `url(${this.state.imageUrl})`,
                  backgroundSize: 'cover',
                  paddingBottom: '100%',
                }}
              />
            }

            <Form>
              <FormBlock type="text" value={this.state.imageUrl} placeholder='Image Url' onChange={(e) => this.setState({ imageUrl: e.target.value })} autoFocus />
              <FormBlock type="text" value={this.state.description} placeholder='Description' onChange={(e) => this.setState({ description: e.target.value })} />
              {this.state.description && this.state.imageUrl &&
                <Button type="button" onClick={this.handlePost} text="Post"/>
              }
            </Form>
          </div>
        </Container>
      </div>
    )
  }

  handlePost = async (e) => {
    e.preventDefault();
    const { description, imageUrl, authorId } = this.state
    await this.props.addPost({ variables: { description, imageUrl, authorId } });
    Router.push('/');
  }
}

const withMutation = graphql(gql`
  mutation addPost($description: String!, $imageUrl: String!, $authorId: String!) {
    createPost(description: $description, imageUrl: $imageUrl, authorId: $authorId) {
      id
      description
      imageUrl,
      author {
        id,
        name
      }
    }
  }
`, { name: 'addPost' });

export default withMutation(Create)
