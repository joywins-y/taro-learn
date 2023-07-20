import Taro from "@tarojs/taro";
import { Text, View } from "@tarojs/components";

import './index.scss'

export default function PostCard(props) {
    const handleClick = () => {
        if (props.isList) {
            const { title, content } = props;
            Taro.navigateTo({
                url: `/pages/post/post?title=${title}&content=${content}`
            })
        }
    }
    return <View className='post-card' onClick={handleClick}>
        <View className='post-title'>
            <Text>{props.title}</Text>
        </View>
        <View className='post-content'>
            <Text>{props.content}</Text>
        </View>
    </View>
}