import Router from 'next/router'
import cookie from "react-cookie"

export const authenticate = async (req, res) => {
    const user = req ? req.user : getAuthUser();

    if (user) {
        return user;
    }

    req ? res.redirect('/login') : Router.push('/login');
}

export const login = (token, user) => {
    cookie.save('token', token, { path: "/" });

    try {
        window.localStorage.setItem('user', JSON.stringify(user));
    } catch (err) {
        throw err;
    }
}

export const logout = () => {
    window.localStorage.removeItem('user');
    cookie.remove('token', { path: "/" });
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.localStorage.setItem('logout', Date.now());
    Router.push('/');
}

export const getToken = () => {
    return cookie.load('token');
}

const getAuthUser = () => {
    try {
        return JSON.parse(window.localStorage.getItem('user'));
    } catch (err) {
        return null;
    }
}