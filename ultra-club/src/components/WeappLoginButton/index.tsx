import { Button } from "@tarojs/components";
import { useState } from "react";

interface IProps {

}

interface IEvent {

}

export default function LoginButton(props) {
    const [isLogin, setIsLogin] = useState<boolean>(false)

    async function onGetUserInfo(e) {
        setIsLogin(true)

        console.log(e);

        const { avatarUrl, nickName } = e.detail.userInfo
        await props.setLoginInfo(avatarUrl, nickName)

        setIsLogin(false)
    }

    return <Button className='login-button' type='primary' openType='getUserInfo' onGetUserInfo={onGetUserInfo} loading={isLogin}>微信登录</Button>
}