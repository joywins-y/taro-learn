import { Form, Input, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useState } from "react";
import { AtButton, AtImagePicker } from "taro-ui";

interface IProps {
    files: any;
    formNickName: string;
}

interface IEvent {
    handleSubmit: (e) => void;
    handleFilesSelect: (v) => void;
    handleNickNameInput: (v) => void;
}
export default function LoginForm(props: IProps & IEvent) {
    const [showAddBtn, setShowAddBtn] = useState(true)

    function onChange(files) {
        if (files.length) {
            setShowAddBtn(false)
        }

        props.handleFilesSelect(files)
    }

    function onImageClick() {
        Taro.previewImage({
            urls: [props.files[0].url]
        })
    }

    return <View className='post-form'>
        <Form onSubmit={props.handleSubmit}>
            <View className='login-box'>
                <View className='avatar-selector'>
                    <AtImagePicker
                      length={1}
                      count={1}
                      mode='scaleToFill'
                      files={props.files}
                      onChange={onChange}
                      showAddBtn={showAddBtn}
                      onImageClick={onImageClick}
                    />
                </View>
                <Input
                  className='input-nickName'
                  type='text'
                  placeholder='点击输入昵称'
                  value={props.formNickName}
                  onInput={props.handleNickNameInput}
                />
                <AtButton>登录</AtButton>
            </View>
        </Form>
    </View>
}