import { useState } from 'react';
import Taro from '@tarojs/taro';
import { Button } from '@tarojs/components';

interface IProps {

}

interface IEvent {

}

export default function LoginButton(props) {
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