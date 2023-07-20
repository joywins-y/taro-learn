import { Image, Text, View } from "@tarojs/components";

import './mine.scss'
import avatar from '../../images/avatar.png'

export default function Mine() {
    return <View className='mine'>
        <View>
            <Image src={avatar} className='mine-avatar' />
            <View className='mine-nickName'>
                <Text>故里</Text>
            </View>
            <View className='min-username'>
                <Text>joy</Text>
            </View>
        </View>
        <View className='mine-footer'>Form ... footer ...</View>
    </View>
}