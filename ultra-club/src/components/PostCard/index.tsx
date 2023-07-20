import Taro from "@tarojs/taro";
import { Text, View } from "@tarojs/components";
import classNames from "classnames";

import './index.scss'

interface IProps {
    title: string | undefined;
    content: string | undefined;
    isList?: boolean;
}

export default function PostCard(props: IProps) {
    const handleClick = () => {
        if (props.isList) {
            const { title, content } = props;
            Taro.navigateTo({
                url: `/pages/post/post?title=${title}&content=${content}`
            })
        }
    }
    return <View className={classNames('post-card', { postcard__isList: props.isList })} onClick={handleClick}>
        <View className='post-title'>
            <Text>{props.title}</Text>
        </View>
        <View className='post-content'>
            <Text>{props.content}</Text>
        </View>
    </View>
}

PostCard.defaultProps = {
    isList: ''
}