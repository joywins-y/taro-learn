import Taro from "@tarojs/taro";
import { useState } from "react";
import { AtFloatLayout } from "taro-ui";
import { View } from "@tarojs/components";

import Logout from "../Logout";
import LoginForm from "../LoginForm";

import './index.scss'

interface IProps {
    isLogged: boolean;
    isLogout: boolean;
    isOpened: boolean;
}
interface IEvent {
    handleSubmit: (v) => void;
    handleLogout: () => void;
    handleSetIsOpened: (v) => void;
}
export default function Footer(props: IProps & IEvent) {
    const [formNickName, setFormNickName] = useState<string>('')
    const [files, setFiles] = useState<any>([])

    async function handleSubmit(e) {
        e.preventDefault()

        // 鉴权
        if (!formNickName || !files.length) {
            Taro.atMessage({ type: 'error', message: '您还有内容没有填写' })
            return
        }
        Taro.atMessage({ type: 'success', message: '登录成功' })
        // 缓存在 storage
        const userInfo = { avatar: files[0].url, nickName: formNickName }
        await props.handleSubmit(userInfo)

        // 清空表单
        setFiles([])
        setFormNickName('')
    }

    return <View className='mine-footer'>
        {props.isLogged && <Logout loading={props.isLogout} handleLogout={props.handleLogout} />}
        <View className='motto'>{props.isLogged ? 'Copyright © 2023' : '您还未登录'}</View>
        <AtFloatLayout
          title='登录'
          isOpened={props.isOpened}
          onClose={() => props.handleSetIsOpened(false)}
        >
            <LoginForm
              files={files}
              formNickName={formNickName}
              handleSubmit={handleSubmit}
              handleFilesSelect={(fs) => setFiles(fs)}
              handleNickNameInput={(e) => setFormNickName(e.target.value)}
            />
        </AtFloatLayout>
    </View>
}