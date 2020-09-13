import React from 'react';
import { Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import Routes from './routes';
import { Provider } from 'react-redux';
import configStore from './shared/configStore';
import rootReducer from './redux/rootReducer';
import rootSaga from './redux/rootSaga';
import history from './routes/history';
import './App.scss';

const initialState = {};
const store = configStore(initialState, history, rootReducer);
store.runSaga(rootSaga);

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  </div>
);

export default App;
