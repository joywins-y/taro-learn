import { Image, View } from "@tarojs/components"
import Taro from "@tarojs/taro"
import PropTypes from 'prop-types'

import './index.scss'
import avatar from '../../images/avatar.png'

interface IProps {
    userInfo: any;
}

export default function LoggedMine(props: IProps) {
    const { userInfo = {} } = props

    function onImageClick() {
        Taro.previewImage({ urls: [userInfo.avatar] })
    }

    return <View className='logged-mine'>
        <Image src={userInfo.avatar || avatar} className='mine-avatar' onClick={onImageClick} />
        <View className='mine-nickName'>{userInfo.nickName || '故里'}</View>
        <View className='mine-username'>{userInfo.username}</View>
    </View>
}

LoggedMine.propTypes = {
    avatar: PropTypes.string,
    nickName: PropTypes.string,
    username: PropTypes.string,
}