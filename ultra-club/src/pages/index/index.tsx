import Taro from "@tarojs/taro"
import { useState } from "react"
import { Text, View } from "@tarojs/components"
import { AtFab, AtFloatLayout, AtMessage } from "taro-ui"
import { PostCard, PostForm } from "../../components"

import './index.scss'

export default function Index() {
  const [posts, setPosts] = useState([{ title: '示例标题', content: '示例内容' }])
  const [formTitle, setFormTitle] = useState<string>('')
  const [formContent, setFormContent] = useState<string>('')
  const [isOpened, setIsOpened] = useState<boolean>(false)

  function handleSubmit(e) {
    e.preventDefault()

    const newPosts = posts.concat({ title: formTitle, content: formContent })
    setPosts(newPosts)
    setFormTitle('')
    setFormContent('')
    setIsOpened(false)

    Taro.atMessage({
      message: '帖子发布成功',
      type: 'success',
    })
  }

  return <View className='index'>
    <AtMessage />
    {posts.map((post, index) => (<PostCard key={index} title={post.title} content={post.content} isList />))}
    <AtFloatLayout isOpened={isOpened} title='发布新的帖子' onClose={() => setIsOpened(false)}>
      <PostForm
        formTitle={formTitle}
        formContent={formContent}
        handleSubmit={handleSubmit}
        handleTitleInput={(e) => setFormTitle(e.target.value)}
        handleContentInput={(e) => setFormContent(e.target.value)}
      />
    </AtFloatLayout>
    <View className='post-button'>
      <AtFab onClick={() => setIsOpened(true)}>
        <Text className='at-fab__icon at-icon at-icon-edit'></Text>
      </AtFab>
    </View>
  </View>
}