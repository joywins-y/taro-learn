import { View } from "@tarojs/components"
import { useState } from "react"
import { PostCard, PostForm } from "../../components"

export default function Index() {
  const [posts, setPosts] = useState([{ title: '示例标题', content: '示例内容' }])
  const [formTitle, setFormTitle] = useState('')
  const [formContent, setFormContent] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const newPosts = posts.concat({ title: formTitle, content: formContent })
    setPosts(newPosts)
    setFormTitle('')
    setFormContent('')
  }

  return <View className='index'>
    {posts.map((post, index) => (<PostCard key={index} title={post.title} content={post.content} isList />))}
    <PostForm
      formTitle={formTitle}
      formContent={formContent}
      handleSubmit={handleSubmit}
      handleTitleInput={(e) => setFormTitle(e.target.value)}
      handleContentInput={(e) => setFormContent(e.target.value)}
    />
  </View>
}