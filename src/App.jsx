import React from 'react';
import B from "./components/B";
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
    return (
        <Provider store={store}>
            <B />
        </Provider>
    );
}

export default App;
