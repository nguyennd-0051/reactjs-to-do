export const setCookie = (name, value, expireTime) => {
    const expires = 'expires=' + expireTime;
    document.cookie = name + '=' + value + ';' + expires + ';path=/';

    return;
}

export const getCookie = (cookieName) => {
    const name = cookieName + '=';
    const allCookies = document.cookie.split(';');

    for (let i = 0; i < allCookies.length; i++) {
        let itemCookie = allCookies[i];

        while (itemCookie.charAt(0) === ' ') {
            itemCookie = itemCookie.substring(1);
        }

        if (itemCookie.indexOf(name) === 0) {
            return itemCookie.substring(name.length, itemCookie.length);
        }
    }

    return '';
}