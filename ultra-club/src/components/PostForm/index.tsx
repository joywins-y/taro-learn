import { Form, Input, Text, Textarea, View } from "@tarojs/components";
import { AtButton } from "taro-ui";

import './index.scss'

export default function PostForm(props) {
    return <View className='post-form'>
        <Form onSubmit={props.handleSubmit}>
            <View>
                <View className='form-hint'>
                    <Text>标题</Text>
                </View>
                <Input className='input-title' type='text' placeholder='点击输入标题' value={props.formTitle} onInput={props.handleTitleInput} />
                <View className='form-hint'>
                    <Text>正文</Text>
                </View>
                <Textarea placeholder='点击输入正文' className='input-content' value={props.formContent} onInput={props.handleContentInput} />
                <AtButton formType='submit' type='primary'>提交</AtButton>
            </View>
        </Form>
    </View>
}