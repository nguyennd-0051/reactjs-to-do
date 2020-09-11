import 'babel-polyfill'; // Needed for redux-saga es6 generator support
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { fromJS } from 'immutable';

const sagaMiddleware = createSagaMiddleware();

export default function configStore(initialState = {}, history, rootReducer) {
    const middlewares = [
        sagaMiddleware
    ];

    const enhancers = [
        applyMiddleware(...middlewares)
    ];

    /* eslint-disable no-underscore-dangle */
    const composeEnhancers =
        process.env.APP_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
    /* eslint-enable */

    const store = createStore(
        rootReducer,
        fromJS(initialState),
        composeEnhancers(...enhancers)
    );

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);

    return store;
}
