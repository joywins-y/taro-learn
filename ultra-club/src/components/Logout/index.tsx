import { AtButton } from "taro-ui"

interface IProps {
    loading: boolean;
}
interface IEvent {
    handleLogout: () => void;
}
export default function Logout(props: IProps & IEvent) {
    return <AtButton full type='primary' loading={props.loading} onClick={props.handleLogout}>登录</AtButton>
}