import Taro from '@tarojs/taro';
import { useState } from 'react';
import { Button } from '@tarojs/components';

import './index.scss'

interface IEvent {
    setLoginInfo: (...rest) => void;
}

export default function LoginButton(props: IEvent) {
    const [isLogin, setIsLogin] = useState<boolean>(false)

    async function onGetAuthorize(res) {
        console.log(res);

        setIsLogin(true)
        try {
            let userInfo = await Taro.getOpenUserInfo()

            console.log(userInfo);

            userInfo = JSON.parse(userInfo.response).response
            const { avatar, nickName } = userInfo
            await props.setLoginInfo(avatar, nickName);
        } catch (error) {
            console.log('onGetAuthorize ERR: ', error)
        }
        setIsLogin(false)
    }

    return <Button className='login-button' type='primary' openType='getAuthorize' onGetUserInfo={onGetAuthorize} loading={isLogin}>支付宝登录</Button>
}