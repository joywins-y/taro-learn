import { Button, Form, Input, Text, Textarea, View } from "@tarojs/components";

import './index.scss'

interface IProps {
    formTitle: string;
    formContent: string;
}

interface IEvent {
    handleSubmit: (e) => void;
    handleTitleInput: (e) => void;
    handleContentInput: (e) => void;
}

export default function PostForm(props: IProps & IEvent) {
    return <View className='post-form'>
        <View>添加新的帖子</View>
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
                <Button className='form-button' formType='submit' type='primary'>提交</Button>
            </View>
        </Form>
    </View>
}