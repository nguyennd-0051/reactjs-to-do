import {createBrowserHistory} from 'history';

const key = 'history';
document.addEventListener('DOMContentLoaded', () => {
    localStorage.setItem(key, JSON.stringify([
        {
            pathname: window.location.pathname,
            search: window.location.search
        }
    ]));
});

window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    localStorage.removeItem(key);
});

function handleChangeHistory(location, action) {
    const cachedHistory = JSON.parse(localStorage.getItem(key)) || [];
    if (action == 'REPLACE') {
        cachedHistory.pop();
    }
    for (let i = cachedHistory.length - 1; i >= 0; i--) {
        const route = cachedHistory[i];
        if (!route || !route.pathname.includes(location.pathname)) break;
        // eslint-disable-next-line no-param-reassign
        if (route.pathname == location.pathname && !location.search) location.search = route.search;
        cachedHistory.length += -1;
    }

    const previousRoute = cachedHistory[cachedHistory.length - 1];
    if (!previousRoute || previousRoute.pathname != location.pathname) {
        cachedHistory.push(location);
    }

    localStorage.setItem(key, JSON.stringify(cachedHistory));
}

/* eslint-disable*/
(function (windowHistory) {
    const {replaceState} = windowHistory;
    windowHistory.replaceState = function (state, title, url) {
        if (typeof windowHistory.onreplaceState == 'function') {
            windowHistory.onreplaceState({state});
        }
        // ... whatever else you want to do
        // handle wrong event
        if (!state) handleChangeHistory({
            pathname: window.location.pathname,
            search: url
        }, 'REPLACE');
        return replaceState.apply(windowHistory, arguments);
    };
}(window.history));
/* eslint-enable */

const history = createBrowserHistory();
history.listen(handleChangeHistory);

export default history;
