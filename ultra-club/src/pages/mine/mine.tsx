import Taro from "@tarojs/taro";
import { useEffect, useState } from "react";
import { View } from "@tarojs/components";

import './mine.scss'
import { Footer, Header } from "../../components";

export default function Mine() {
    const [nickName, setNickName] = useState<string>('')
    const [avatar, setAvatar] = useState<string>('')
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const [isLogout, setIsLogout] = useState<boolean>(false)

    // 双取反来构造字符串对应的布尔值，用于标志此时是否用户已经登录
    const isLogged = !!nickName

    useEffect(() => {
        async function getStorage() {
            try {
                const { data } = await Taro.getStorage({ key: 'userInfo' })

                const { nickName: name, avatar: at } = data;
                setAvatar(at)
                setNickName(name)
            } catch (error) {
                console.log('getStorage ERR: ', error);
            }
        }
        getStorage()
    }, [])

    async function setLoginInfo(at: string, name: string) {
        setAvatar(at)
        setNickName(name)

        try {
            await Taro.setStorage({ key: 'userInfo', data: { avatar: at, nickName: name } })
        } catch (error) {
            console.log('setStorage ERR: ', error);
        }
    }

    async function handleLogout() {
        setIsLogout(true)
        try {
            await Taro.removeStorage({ key: 'userInfo' })
            setAvatar('')
            setNickName('')
        } catch (error) {
            console.log('removeStorage ERR: ', error)
        }
        setIsLogout(false)
    }

    function handleSetIsOpened(flag: boolean) {
        setIsOpened(flag)
    }

    function handleClick() {
        handleSetIsOpened(true)
    }

    async function handleSubmit(userInfo: any) {
        // 缓存在 storage 里面
        await Taro.setStorage({ key: 'userInfo', data: userInfo })
        // 设置本地信息
        setAvatar(userInfo.avatar)
        setNickName(userInfo.nickName)
        // 关闭弹窗
        setIsOpened(false)
    }

    return <View className='mine'>
        <Header
          isLogged={isLogged}
          userInfo={{ avatar, nickName }}
          handleClick={handleClick}
          setLoginInfo={setLoginInfo}
        />
        <Footer
          isLogged={isLogged}
          isLogout={isLogout}
          isOpened={isOpened}
          handleLogout={handleLogout}
          handleSubmit={handleSubmit}
          handleSetIsOpened={handleSetIsOpened}
        />
    </View>
}