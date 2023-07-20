import { AtButton } from 'taro-ui';

interface IProps {

}

interface IEvent {
    handleClick: () => void;
}

export default function LoginButton(props: IProps & IEvent) {
    return <AtButton type='primary' onClick={props.handleClick}>
        普通登录
    </AtButton>
}