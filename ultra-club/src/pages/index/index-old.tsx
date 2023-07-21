import { Component, PropsWithChildren } from 'react'
import { View } from '@tarojs/components'
import { PostCard, PostForm } from '../../components'

import './index.scss'

export default class Index extends Component<PropsWithChildren> {
  state = {
    posts: [
      { title: '示例标题', content: '示例内容' }
    ],
    formTitle: '',
    formContent: '',
  }
  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  handleSubmit(e) {
    e.preventDefault()

    const { formTitle: title, formContent: content } = this.state;
    const newPosts = this.state.posts.concat({ title, content })

    this.setState({
      posts: newPosts,
      formTitle: '',
      formContent: ''
    })
  }

  handleTitleInput(e) {
    this.setState({ formTitle: e.target.value })
  }

  handleContentInput(e) {
    this.setState({ formContent: e.target.value })
  }

  render() {
    return (
      <View className='index'>
        {this.state.posts.map((post, index) => (
          <PostCard key={index} title={post.title} content={post.content} />
        ))}
        <PostForm
          formTitle={this.state.formTitle}
          formContent={this.state.formContent}
          handleSubmit={e => this.handleSubmit(e)}
          handleTitleInput={e => this.handleTitleInput(e)}
          handleContentInput={e => this.handleContentInput(e)}
        />
      </View>
    )
  }
}
