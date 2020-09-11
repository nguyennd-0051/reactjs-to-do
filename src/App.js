import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import Routes from './routes';
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';
import configStore from './shared/configStore';
import rootReducer from './redux/rootReducer';
import rootSaga from './redux/rootSaga';
import './App.scss';

const initialState = {};
const history = createBrowserHistory();
const store = configStore(initialState, history, rootReducer);
store.runSaga(rootSaga);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
