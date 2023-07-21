import { AtButton } from 'taro-ui';

interface IEvent {
    handleClick: () => void;
}

export default function LoginButton(props: IEvent) {
    return <AtButton type='primary' onClick={props.handleClick}>
        普通登录
    </AtButton>
}