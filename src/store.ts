import { createStore } from 'redux';

const devtools = window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']();

const store = createStore(() => {}, devtools);

export default store;
