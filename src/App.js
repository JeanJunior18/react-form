import React from 'react';
import Signup from './pages/signup';
import { Provider } from 'react-redux';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Signup />
    </Provider>
  );
}

export default App;
