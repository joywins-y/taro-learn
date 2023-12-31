import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtMessage } from "taro-ui";
import LoggedMine from "../LoggedMine";
import LoginButton from "../LoginButton";
import WeappLoginButton from '../WeappLoginButton'
import AlipayLoginButton from '../AlipayLoginButton'

import './index.scss'

interface IProps {
    userInfo: any;
    isLogged: boolean;
}

interface IEvent {
    handleClick: () => void;
    setLoginInfo: (...rest) => void;
}

export default function Header(props: IProps & IEvent) {
    const isWeapp = Taro.getEnv() === Taro.ENV_TYPE.WEAPP
    const isAlipay = Taro.getEnv() === Taro.ENV_TYPE.ALIPAY

    return <View className='user-box'>
        <AtMessage />
        <LoggedMine userInfo={props.userInfo} />
        {
            !props.isLogged && (
                <View className='login-button-box'>
                    <LoginButton handleClick={props.handleClick} />
                    {isWeapp && <WeappLoginButton setLoginInfo={props.setLoginInfo} />}
                    {isAlipay && <AlipayLoginButton setLoginInfo={props.setLoginInfo} />}
                </View>
            )
        }
    </View>
}