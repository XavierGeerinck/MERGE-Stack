import Router from 'next/router';
import { logout } from '../utils/AuthService'

export default () => {
    logout();
    return (<div></div>);
}